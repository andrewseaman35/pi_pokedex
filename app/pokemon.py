import json


class Pokemon():
    _pokemon_by_number = {}

    def __init__(self, number, name, **kwargs):
        if number in self._pokemon_by_number:
            raise ValueError(f"duplicate pokemon number: {number}")

        self.number = number
        self.name = name

        self._pokemon_by_number[number] = self

    @classmethod
    def all(cls):
        return list(cls._pokemon_by_number.values())


with open('./app/pokemon.json', 'r') as f:
    pokemon_data = json.loads(f.read())

[Pokemon(**pokemon) for pokemon in pokemon_data['pokemon']]
