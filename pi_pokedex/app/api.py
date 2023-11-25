import time
start = time.time()
print(f"Start: {start}")

import json
import os
import boto3
import traceback
now_1 = time.time()
print(f"Imports done: {now_1 - start}")




class _IdentifierApi:
    _instance = None

    def __init__(self):
        self.aws_session = boto3.session.Session(profile_name="pokedex")
        self.ssm_client = self.aws_session.client("ssm", region_name="us-east-1")
        self.lambda_client = self.aws_session.client("lambda", region_name="us-east-1")
        self.config = {}

        self._initialize_config()

    def _initialize_config(self):
        self.lambda_function_name = self._get_from_ssm("/pokedex/live/identifier_lambda_function_name")

    def _get_from_ssm(self, key):
        response = self.ssm_client.get_parameter(Name=key)
        return response["Parameter"]["Value"]

    def upload(filepath):
        pass

    def identify(self, filepath):
        start = time.time()
        print(f"Start identify: {start}")

        response = self.lambda_client.invoke(
            FunctionName=self.lambda_function_name,
            InvocationType='RequestResponse',
            LogType='None',
            Payload=json.dumps({
                'source': 'test',
                'group': 'test1'
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
