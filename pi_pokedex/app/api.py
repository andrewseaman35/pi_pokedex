import time
import json
import boto3
now_1 = time.time()


class _IdentifierApi:
    _instance = None

    def __init__(self):
        self.aws_session = boto3.session.Session(profile_name="pokedex")
        self.ssm_client = self.aws_session.client("ssm", region_name="us-east-1")
        self.lambda_client = self.aws_session.client("lambda", region_name="us-east-1")
        self.s3_client = self.aws_session.client("s3", region_name="us-east-1")

        self._get_ssm_config()

    def _get_ssm_config(self):
        self.lambda_function_name = self._get_from_ssm("/pokedex/live/identifier_lambda_function_name")
        self.s3_bucket_name = self._get_from_ssm("/pokedex/live/s3_bucket_name")
        self.s3_key_prefix = self._get_from_ssm("/pokedex/live/s3_key_prefix")

    def _get_from_ssm(self, key):
        response = self.ssm_client.get_parameter(Name=key)
        return response["Parameter"]["Value"]

    def upload(self, filepath, source, group):
        start = time.time()
        print(f"Start upload: {start}")
        key = f"{self.s3_key_prefix}{source}/{group}/original.jpg"
        with open(filepath, 'rb') as f:
            self.s3_client.put_object(
                Body=f,
                Bucket=self.s3_bucket_name,
                Key=key,
            )
        print(f"End upload: {time.time() - start}")
        return key

    def identify(self, source, group):
        start = time.time()
        print(f"Start identify: {start}")

        response = self.lambda_client.invoke(
            FunctionName=self.lambda_function_name,
            InvocationType='RequestResponse',
            LogType='None',
            Payload=json.dumps({
                'source': source,
                'group': group,
            }),
        )

        print(response)
        json_response = response['Payload'].read()
        print(json_response)
        print(f"Done: {time.time() - start}")
        return 1

def IdentifierApi():
    if _IdentifierApi._instance is None:
        _IdentifierApi._instance = _IdentifierApi()
    return _IdentifierApi._instance


filepath = '/Users/andrewseaman/repos/pi_pokedex/pi_pokedex/assets/img/pokemon/1.png'
IdentifierApi().upload(filepath, 'test', 'test2')