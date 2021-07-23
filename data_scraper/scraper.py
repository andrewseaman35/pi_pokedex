import json
import os
import sys

from bs4 import BeautifulSoup
import requests

POKEMON_URL_FORMAT = 'https://www.pokemon.com/us/pokedex/{pokemon}'
POKEMON_DIR = './responses/pokemon'
POKEMON_FILE_FORMAT = POKEMON_DIR + '/{}.html'
POKEMON_DB_URL_FORMAT = 'https://pokemondb.net/pokedex/{pokemon}'
POKEMONDB_DIR = './responses/pokemondb'
POKEMONDB_FILE_FORMAT = POKEMONDB_DIR + '/{}.html'

OUTPUT_DIR = './output'
OUTPUT_FILE = OUTPUT_DIR + '/pokemon.json'

POKEMONDB_SITE_MAPPING = {
    'nidoran-male': 'nidoran-m',
    'nidoran-female': 'nidoran-f',
}


def get_pokemon_page_content(pokemon, save=False):
    if os.path.exists(POKEMON_FILE_FORMAT.format(pokemon)):
        return read_pokemon_page_content(pokemon)
    page = requests.get(POKEMON_URL_FORMAT.format(pokemon=pokemon))
    if page.status_code != 200:
        raise Exception("Failed to load page!")

    if save:
        save_pokemon_page_content(pokemon, page.content)

    return page.content


def save_pokemon_page_content(pokemon, content):
    with open(POKEMON_FILE_FORMAT.format(pokemon), 'wb') as f:
        f.write(content)


def read_pokemon_page_content(pokemon):
    with open(POKEMON_FILE_FORMAT.format(pokemon), 'rb') as f:
        data = f.read()
    return data


def get_pokemondb_page_content(pokemon, save=False):
    if os.path.exists(POKEMONDB_FILE_FORMAT.format(pokemon)):
        return read_pokemondb_page_content(pokemon)
    
    url_pokemon = POKEMONDB_SITE_MAPPING.get(pokemon, pokemon)
    page = requests.get(POKEMON_DB_URL_FORMAT.format(pokemon=url_pokemon))
    if page.status_code != 200:
        raise Exception("Failed to load page!")

    if save:
        save_pokemondb_page_content(pokemon, page.content)

    return page.content


def save_pokemondb_page_content(pokemon, content):
    with open(POKEMONDB_FILE_FORMAT.format(pokemon), 'wb') as f:
        f.write(content)


def read_pokemondb_page_content(pokemon):
    with open(POKEMONDB_FILE_FORMAT.format(pokemon), 'rb') as f:
        data = f.read()
    return data


def get_pokemon_basic_info(soup):
    '''
    Scrape name, number, red/blue description, image urls
    '''
    title_div = soup.find('div', {'class': 'pokedex-pokemon-pagination-title'})
    name = title_div.text.split('#')[0].strip()
    number = int(title_div.find('span').text.split('#')[-1])

    description_div = soup.find('div', {'class': 'version-descriptions'})
    red_description = description_div.find('p', {'class': 'version-y'}).text.strip()
    blue_description = description_div.find('p', {'class': 'version-x'}).text.strip()

    profile_image_div = soup.find('div', {'class': 'profile-images'})
    profile_images = profile_image_div.find_all('img')
    picture_sources = [img['src'] for img in profile_images]
    basic_info = {
        'name': name,
        'number': number,
        'red_description': red_description,
        'blue_description': blue_description,
        'images': picture_sources,
    }
    if not all(value for value in basic_info.values()):
        missing = [k for k, v in basic_info.items() if not v]
        raise ValueError(f'missing value in basic info: {",".join(missing)}')
    return basic_info


def parse_gender(gender_value_li):
    allowed_non_genders = {'Unknown'}
    attribute_value = gender_value_li.find('span', {'class': 'attribute-value'})
    genders = []
    if attribute_value.find('i', {'class': 'icon_male_symbol'}) is not None:
        genders.append('M')
    if attribute_value.find('i', {'class': 'icon_female_symbol'}) is not None:
        genders.append('F')
    if not genders:
        gender = attribute_value.text.strip()
        if gender not in allowed_non_genders:
            raise ValueError('no genders found')
        return gender
    return '/'.join(genders)


def parse_abilities(ability_value_li):
    abilities = [
        value.text.strip() 
        for value in  ability_value_li.find_all('span', {'class': 'attribute-value'})
    ]
    if not abilities:
        raise ValueError('no abilities found')
    return abilities


def get_stats(soup):
    '''
    Scrape height, weight, gender, category, abilities
    '''
    supported_stats = {'height', 'weight', 'gender', 'category', 'abilities'}
    stats = {}
    ability_info = soup.find('div', {'class': 'pokemon-ability-info'})
    ability_info_list_items = ability_info.find_all('li')
    for li in ability_info_list_items:
        label_span = li.find('span', {'class': 'attribute-title'})
        label = label_span.text.strip().lower() if label_span else None
        if not label or label not in supported_stats:
            continue
        if label == 'gender':
            value = parse_gender(li)
        elif label == 'abilities':
            value = parse_abilities(li)
        else:
            value = li.find('span', {'class': 'attribute-value'}).text.strip().lower()
        stats[label] = value
    if not all(stat in stats for stat in supported_stats):
        missing = supported_stats - set(stats.keys())
        raise ValueError(f'missing stats: {missing}')
    return stats


def get_pokemon_attributes(soup):
    attributes_div = soup.find('div', {'class': 'pokedex-pokemon-attributes'})
    weaknesses_list_items = attributes_div.find('div', {'class': 'dtm-weaknesses'}).find_all('li')
    weaknesses = [
        item.text.strip()
        for item in weaknesses_list_items
    ]
    types_list_items = attributes_div.find('div', {'class': 'dtm-type'}).find_all('li')
    types = [
        item.text.strip()
        for item in types_list_items
    ]
    if not types:
        raise ValueError('no types found')
    if not weaknesses:
        raise ValueError('no weaknesses found.. ballin\'')
    return {
        'types': types,
        'weaknesses': weaknesses,
    }


def get_evolution_progression(soup, current_pokemon_number):
    evolution_profile = soup.find('ul', {'class':'evolution-profile'})
    if evolution_profile is None:
        return {
            'evolutions': [current_pokemon_number]
        }
    evolutions = evolution_profile.find_all('li', recursive=False)
    evolution_numbers = [
        int(evolution.find('span', {'class': 'pokemon-number'}).text.split('#')[-1].strip())
        for evolution in evolutions
    ]
    return {
        'evolutions': evolution_numbers
    }


def get_base_stats(db_soup):
    supported_values = {'hp', 'attack', 'defense', 'sp. atk', 'sp. def', 'speed'}
    label_mapping = {
        'sp. atk': 'special_attack',
        'sp. def': 'special_defense',
    }
    stats_table = db_soup.find('div', {'id': 'dex-stats'}).parent.find('table', {'class': 'vitals-table'})
    rows = stats_table.find_all('tr')
    stats = {}
    for row in rows:
        label = row.find('th').text.lower().strip()
        if label not in supported_values:
            continue
        label = label_mapping.get(label, label)
        value = int(row.find('td').text.lower().strip())
        stats[label] = value

    if not all(label_mapping.get(val, val) in stats for val in supported_values):
        missing = supported_values - set(stats.keys())
        raise ValueError(f'base stats not found: {missing}')

    return stats


def get_pokemon_data(pokemon):
    pokemon_page_content = get_pokemon_page_content(pokemon, save=True)
    soup = BeautifulSoup(pokemon_page_content, 'html.parser')

    data = get_pokemon_basic_info(soup)
    data.update({
        'stats': get_stats(soup)
    })
    data.update({
        'attributes': get_pokemon_attributes(soup)
    })
    data.update({
        'evolution': get_evolution_progression(soup, data['number'])
    })

    pokemondb_page_content = get_pokemondb_page_content(pokemon, save=True)
    db_soup = BeautifulSoup(pokemondb_page_content, 'html.parser')
    data.update({
        'base_stats': get_base_stats(db_soup)
    })

    return data


if not os.path.exists(POKEMON_DIR):
    os.makedirs(POKEMON_DIR, exist_ok=True)
if not os.path.exists(POKEMONDB_DIR):
    os.makedirs(POKEMONDB_DIR, exist_ok=True)
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR, exist_ok=True)

user_input_pokemon = sys.argv[1] if len(sys.argv) == 2 else None
if user_input_pokemon:
    pokemon_data = get_pokemon_data(user_input_pokemon)
    print(pokemon_data)
else:
    pokemon_list = []
    with open('./pokemon_list.txt', 'r') as f:
        for line in f:
            pokemon_list.append(line.strip())

    pokemon_data = []
    for pokemon in pokemon_list:
        print(f'-- {pokemon}')
        pokemon_data.append(get_pokemon_data(pokemon))
    
    with open(OUTPUT_FILE, 'w') as f:
        f.write(json.dumps({
            'pokemon': pokemon_data
        }))

# import pdb; pdb.set_trace()
