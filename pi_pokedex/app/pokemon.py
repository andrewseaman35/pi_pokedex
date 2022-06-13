import json


class Pokemon:
    _pokemon_by_number = {}

    def __init__(
        self,
        number,
        name,
        red_description,
        blue_description,
        images,
        stats,
        attributes,
        evolutions,
        base_stats,
    ):
        if number in self._pokemon_by_number:
            raise ValueError(f"duplicate pokemon number: {number}")

        self.number = number
        self.name = name
        self.red_description = red_description
        self.blue_description = blue_description
        self.images = images
        self.stats = stats
        self.attributes = attributes
        self.evolutions = evolutions
        self.base_stats = base_stats

        self._pokemon_by_number[number] = self

    def __str__(self):
        return f"({self.number_string}) {self.name}"

    @classmethod
    def all(cls):
        return list(cls._pokemon_by_number.values())

    @classmethod
    def get_by_number(self, number):
        return self._pokemon_by_number[int(number)]

    @property
    def number_string(self):
        return f"#{self.number:03}"

    @property
    def types(self):
        return self.attributes["types"]


with open("./app/pokemon.json", "r") as f:
    pokemon_data = json.loads(f.read())

[Pokemon(**pokemon) for pokemon in pokemon_data["pokemon"]]
