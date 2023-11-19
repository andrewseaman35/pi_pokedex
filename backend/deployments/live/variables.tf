variable "s3_bucket_name" {
  type        = string
  description = "Name of s3 bucket"
  default     = "aseaman-public-bucket"
}

variable "s3_key_prefix" {
  type        = string
  description = "key prefix"
  default     = "pokedex/"
}

variable "suffix" {
  type        = string
  description = "global naming suffix"
  default     = "live"
}
