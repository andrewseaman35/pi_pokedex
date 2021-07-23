import json
import os

import requests
import shutil

SCRAPER_OUTPUT = './output/pokemon.json'
OUTPUT_DIR = './output/images'


def download_image(pokemon):
    filename = OUTPUT_DIR + '/{number}.png'.format(number=pokemon['number'])

    # Just use the first image for now
    image_url = pokemon['images'][0]
    r = requests.get(image_url, stream=True)
    if r.status_code == 200:
        r.raw.decode_content = True
        with open(filename,'wb') as f:
            shutil.copyfileobj(r.raw, f)
    else:
        raise Exception(f'failed to retrieve image for {pokemon["name"]}')


if not os.path.exists(SCRAPER_OUTPUT):
    raise ValueError('run scraper.py first')

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR, exist_ok=True)

with open(SCRAPER_OUTPUT) as f:
    pokemon_data = json.loads(f.read())

for pokemon in pokemon_data['pokemon']:
    print(f"--{pokemon['name']}")
    download_image(pokemon)