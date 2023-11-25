import os
import random
import time
import tempfile

import boto3

STATE_CREATED = "created"
STATE_COMPLETED = "completed"

class PokemonIdentifier(object):
    region = "us-east-1"
    is_local = False

    def __init__(self, event, context):
        self.event = event
        self.context = context
        self.aws_session = (
            boto3.session.Session(profile_name="pokedex")
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
                "source": {"S": self.source},
                "key": {"S": self.group},
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

    def _save_result(self, result):
        timestamp = self._get_timestamp()
        print("storing result")
        self.ddb_client.update_item(
            TableName=self.ddb_table_name,
            Key={
                "source": {"S": self.source},
                "key": {"S": self.group},
            },
            UpdateExpression="SET #re = :re, #tu = :tu, #st = :st",
            ExpressionAttributeNames={
                "#re": "result",
                "#tu": "time_updated",
                "#st": "state",
            },
            ExpressionAttributeValues={
                ":re": {"N": str(result)},
                ":st": {"S": STATE_COMPLETED},
                ":tu": {"N": timestamp},
            },
        )


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
        return f"{self.s3_key_prefix}/original.jpg"

    def identify(self, filename):
        return random.randrange(0, 151)

    def handle(self):
        self._gather_parameters(self.event)
        print(self.event)
        item = self._get_item()
        if item:
            return {
                'pokemon_number': item['result']
            }

        item = self._create_new_entry()
        print(item)

        filename = self._download(self._original_s3_key())
        print(filename)

        pokemon_number = self.identify(filename)
        self._save_result(pokemon_number)

        return {
            "pokemon_number": pokemon_number
        }


def lambda_handler(event, context):
    return PokemonIdentifier(event, context).handle()

# event = {
#     'source': 'test',
#     'group': 'test1',
# }

# print(lambda_handler(event, None))