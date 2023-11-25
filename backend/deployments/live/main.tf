terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  backend "s3" {
    bucket  = "aseaman-tf-state"
    key     = "pokedex/live.tfstate"
    profile = "aseaman"
    region  = "us-east-1"
  }

  required_version = ">= 0.14.9"
}


provider "aws" {
  profile = "aseaman"
  region  = "us-east-1"

  default_tags {
    tags = {
      Environment = "Live"
      Repo        = "pi_pokedex"
      Project     = "pokedex"
    }
  }
}

data "aws_region" "current" {}

data "aws_caller_identity" "current" {}

locals {
  aws_region     = data.aws_region.current.name
  aws_account_id = data.aws_caller_identity.current.account_id
}

## Backend
resource "aws_dynamodb_table" "pokedex_table" {
  name           = "pokedex_${var.suffix}"
  billing_mode   = "PAY_PER_REQUEST"
  stream_enabled = false
  hash_key       = "source"
  range_key      = "key"

  attribute {
    name = "source"
    type = "S"
  }

  attribute {
    name = "key"
    type = "S"
  }
}

data "archive_file" "pokemon_identifier_zip" {
type        = "zip"
source_dir  = "${path.module}/../../pokemon_identifier/"
output_path = "${path.module}/../../outputs/pokemon_identifier.zip"
}

resource "aws_iam_role" "pokemon_identifier_role" {
  name = "pokemon_identifier_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_iam_role_policy" "pokemon_identifier_role_policy" {
  name = "pokemon_identifier_role_policy"
  role = aws_iam_role.pokemon_identifier_role.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:*",
        ]
        Resource = "arn:aws:logs:*:*:*"
      },
      {
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:ListBucket",
          "s3:GetObject"
        ]
        Resource = [
          "arn:aws:s3:::${var.s3_bucket_name}",
          "arn:aws:s3:::${var.s3_bucket_name}/${var.s3_key_prefix}*"
        ]
      },
      {
        Effect = "Allow"
        Action = [
          "dynamodb:GetItem",
          "dynamodb:PutItem",
          "dynamodb:UpdateItem",
        ]
        Resource = aws_dynamodb_table.pokedex_table.arn
      },
      {
        Effect = "Allow"
        Action = [
          "ssm:GetParameter"
        ]
        Resource = "arn:aws:ssm:${local.aws_region}:${local.aws_account_id}:parameter/*"
      }
    ]
  })
}

resource "aws_lambda_function" "pokemon_identifier_lambda_function" {
    # filename                       = "${path.module}/../../outputs/pokemon_identifier.zip"
    filename         = data.archive_file.pokemon_identifier_zip.output_path
    function_name    = "pokemon-identifier"
    role             = aws_iam_role.pokemon_identifier_role.arn
    handler          = "lambda_handler.lambda_handler"
    runtime          = "python3.9"
    timeout          = 10
    source_code_hash = data.archive_file.pokemon_identifier_zip.output_base64sha256


    depends_on       = [
        aws_iam_role_policy.pokemon_identifier_role_policy,
        data.archive_file.pokemon_identifier_zip
    ]
}


## Pokedex ##
resource "aws_iam_role" "pokedex_role" {
  name = "pokedex_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_iam_user" "pokedex_user" {
  name = "pokedex"
}

resource "aws_iam_access_key" "pokedex_user_access_key" {
  user = aws_iam_user.pokedex_user.name
}

data "aws_iam_policy_document" "pokedex_user_policy_document" {
  statement {
    effect    = "Allow"
    actions   = ["ec2:Describe*"]
    resources = ["*"]
  }
}

resource "aws_iam_user_policy" "pokedex_user_policy" {
  name   = "pokedex_user_policy"
  user   = aws_iam_user.pokedex_user.name
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:ListBucket",
          "s3:HeadObject",
          "s3:GetObject"
        ]
        Resource = [
          "arn:aws:s3:::${var.s3_bucket_name}",
          "arn:aws:s3:::${var.s3_bucket_name}/${var.s3_key_prefix}*"
        ]
      },
      {
        Effect = "Allow"
        Action = [
          "ssm:GetParameter"
        ]
        Resource = "arn:aws:ssm:${local.aws_region}:${local.aws_account_id}:parameter/*"
      }, {
        Effect = "Allow"
        Action = [
          "lambda:InvokeFunction"
        ]
        Resource = [
          aws_lambda_function.pokemon_identifier_lambda_function.arn
        ]
      }
    ]
  })
}

resource "aws_iam_role_policy" "pokedex_role_policy" {
  name = "pokedex_role_policy"
  role = aws_iam_role.pokedex_role.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:*",
        ]
        Resource = "arn:aws:logs:*:*:*"
      },
      {
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:ListBucket",
          "s3:HeadObject",
          "s3:GetObject"
        ]
        Resource = [
          "arn:aws:s3:::${var.s3_bucket_name}",
          "arn:aws:s3:::${var.s3_bucket_name}/${var.s3_key_prefix}*"
        ]
      },
      {
        Effect = "Allow"
        Action = [
          "ssm:GetParameter"
        ]
        Resource = "arn:aws:ssm:${local.aws_region}:${local.aws_account_id}:parameter/*"
      }
    ]
  })
}

resource "aws_ssm_parameter" "pokedex_table_name" {
  name  = "/pokedex/live/pokedex_table_name"
  type  = "String"
  value = aws_dynamodb_table.pokedex_table.name
}

resource "aws_ssm_parameter" "s3_bucket_name" {
  name  = "/pokedex/live/s3_bucket_name"
  type  = "String"
  value = var.s3_bucket_name
}

resource "aws_ssm_parameter" "s3_key_prefix" {
  name  = "/pokedex/live/s3_key_prefix"
  type  = "String"
  value = var.s3_key_prefix
}

resource "aws_ssm_parameter" "identifier_lambda_function_name" {
  name  = "/pokedex/live/identifier_lambda_function_name"
  type  = "String"
  value = aws_lambda_function.pokemon_identifier_lambda_function.function_name
}
