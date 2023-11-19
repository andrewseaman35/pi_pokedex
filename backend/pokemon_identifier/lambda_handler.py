import time
import os
import tempfile

import boto3

STATE_CREATED = "created"

class PokemonIdentifier(object):
    region = "us-east-1"
    is_local = True

    def __init__(self, event, context):
        self.event = event
        self.context = context
        self.aws_session = (
            boto3.session.Session(profile_name="aseaman")
            if self.is_local
            else boto3.session.Session()
        )
        self.ssm_client = self.aws_session.client("ssm", region_name=self.region)
        self.ddb_client = self.aws_session.client("dynamodb", region_name=self.region)
        self.s3_client = self.aws_session.client("s3", region_name=self.region)

    def get_from_ssm(self, key):
        response = self.ssm_client.get_parameter(Name=key)
        return response["Parameter"]["Value"]

    def _gather_parameters(self, event):
        self.source = event['source']
        self.group = event['group']

        self.ddb_table_name = self.get_from_ssm('/pokedex/live/pokedex_table_name')
        self.s3_bucket_name = self.get_from_ssm('/pokedex/live/s3_bucket_name')
        self.s3_base_key_prefix = self.get_from_ssm('/pokedex/live/s3_key_prefix')

        self.s3_key_prefix = f"{self.s3_base_key_prefix}{self.source}/{self.group}"

    def _get_timestamp(self):
        return str(int(time.time()))

    def _get_item(self):
        result = self.ddb_client.get_item(
            TableName=self.ddb_table_name,
            Key={
                "source": {
                    "S": self.source
                },
                "key": {
                    "S": self.group
                },
            }
        )
        ddb_item = result.get("Item", None)
        if ddb_item is None:
            return ddb_item

        return self._ddb_item_to_json(ddb_item)

    def _create_new_entry(self):
        timestamp = self._get_timestamp()
        print("creating new")
        ddb_item = {
            "source": {"S": self.source},
            "key": {"S": self.group},
            "state": {"S": STATE_CREATED},
            "time_created": {"N": timestamp},
            "time_updated": {"N": timestamp},
        }
        self.ddb_client.put_item(
            TableName=self.ddb_table_name,
            Item=ddb_item,
        )
        return self._ddb_item_to_json(ddb_item)

    @classmethod
    def _ddb_item_to_json(cls, ddb_item):
        item_data = {}
        for key, value_type_map in ddb_item.items():
            value = cls._parse_ddb_value_type_map(value_type_map)
            item_data[key] = value
        return item_data

    @classmethod
    def _parse_ddb_value_type_map(cls, value_type_map):
        value_type = next(iter(value_type_map.keys()))
        value = value_type_map[value_type]
        if value_type == "S":
            return str(value)
        elif value_type == "N":
            return int(value)
        elif value_type == "BOOL":
            return value
        elif value_type == "L":
            return [cls._parse_ddb_value_type_map(val) for val in value]
        elif value_type == "M":
            return {
                key: cls._parse_ddb_value_type_map(val) for (key, val) in value.items()
            }
        else:
            raise Exception("unsupported value: {}".format(value_type))

    def _download(self, key):
        tmpdir = tempfile.gettempdir()
        filename = key.split("/")[-1]
        local_filename = os.path.join(tmpdir, filename)
        with open(local_filename, "wb") as data:
            print(self.s3_bucket_name)
            print(key)
            self.s3_client.download_fileobj(self.s3_bucket_name, key, data)
        return local_filename

    def _original_s3_key(self):
        return f"{self.s3_key_prefix}/original.png"

    def handle(self):
        self._gather_parameters(self.event)
        item = self._get_item()
        if not item:
            item = self._create_new_entry()
        print(item)

        filename = self._download(self._original_s3_key())
        print(filename)

        return {"hi": "oh"}


def lambda_handler(event, context):
    return PokemonIdentifier(event, context).handle()

event = {
    'source': 'prototype_v0.3',
    'group': 'test1',
}

lambda_handler(event, None)