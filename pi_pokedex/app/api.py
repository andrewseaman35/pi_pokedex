import time
start = time.time()
print(f"Start: {start}")

import json
import os
import boto3
import traceback
now_1 = time.time()
print(f"Imports done: {now_1 - start}")

def identify(filepath):
    try:
        aws_session = boto3.session.Session(profile_name="pokedex")

        ssm_client = aws_session.client("ssm", region_name="us-east-1")
        lambda_client = aws_session.client("lambda", region_name="us-east-1")
    except Exception as e:
        print(traceback.format_exc())
        return "fuck"

    def get_from_ssm(key):
        response = ssm_client.get_parameter(Name=key)
        return response["Parameter"]["Value"]

    lambda_function_name = get_from_ssm("/pokedex/live/identifier_lambda_function_name")
    now_ssm = time.time()
    print(f"Got SSM: {now_ssm - now_2}")

    response = lambda_client.invoke(
        FunctionName=lambda_function_name,
        InvocationType='RequestResponse',
        LogType='None',
        Payload=json.dumps({
            'source': 'test',
            'group': 'test1'
        }),
    )

    # print(json.loads(response['Payload']))
    print(response)
    json_response = response['Payload'].read()
    print(json_response)
    return 1

now_2 = time.time()
print(f"Define done: {now_2 - now_1}")
response = identify("asdf")
print(response)
now_3 = time.time()
print(f"Identify done: {now_3 - now_2}")

print(f"TOTAL: {time.time() - start}")
