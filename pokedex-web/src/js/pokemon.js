const POKEMON = [{
    "name": "Bulbasaur",
    "number": 1,
    "red_description": "While it is young, it uses the nutrients that are stored in the seed on its back in order to grow.",
    "blue_description": "There is a plant seed on its back right from the day this Pok\u00e9mon is born. The seed slowly grows larger.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"],
    "stats": {
        "height": "2' 04\"",
        "weight": "15.2 lbs",
        "gender": "M/F",
        "category": "seed",
        "abilities": ["Overgrow"]
    },
    "attributes": {
        "types": ["Grass", "Poison"],
        "weaknesses": ["Fire", "Psychic", "Flying", "Ice"]
    },
    "evolutions": [1, 2, 3],
    "base_stats": {
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "special_attack": 65,
        "special_defense": 65,
        "speed": 45
    }
}, {
    "name": "Ivysaur",
    "number": 2,
    "red_description": "Exposure to sunlight adds to its strength. Sunlight also makes the bud on its back grow larger.",
    "blue_description": "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "28.7 lbs",
        "gender": "M/F",
        "category": "seed",
        "abilities": ["Overgrow"]
    },
    "attributes": {
        "types": ["Grass", "Poison"],
        "weaknesses": ["Fire", "Psychic", "Flying", "Ice"]
    },
    "evolutions": [1, 2, 3],
    "base_stats": {
        "hp": 60,
        "attack": 62,
        "defense": 63,
        "special_attack": 80,
        "special_defense": 80,
        "speed": 60
    }
}, {
    "name": "Venusaur",
    "number": 3,
    "red_description": "A bewitching aroma wafts from its flower. The fragrance becalms those engaged in a battle.",
    "blue_description": "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f3.png"],
    "stats": {
        "height": "6' 07\"",
        "weight": "220.5 lbs",
        "gender": "M/F",
        "category": "seed",
        "abilities": ["Overgrow"]
    },
    "attributes": {
        "types": ["Grass", "Poison"],
        "weaknesses": ["Fire", "Psychic", "Flying", "Ice"]
    },
    "evolutions": [1, 2, 3],
    "base_stats": {
        "hp": 80,
        "attack": 82,
        "defense": 83,
        "special_attack": 100,
        "special_defense": 100,
        "speed": 80
    }
}, {
    "name": "Charmander",
    "number": 4,
    "red_description": "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
    "blue_description": "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"],
    "stats": {
        "height": "2' 00\"",
        "weight": "18.7 lbs",
        "gender": "M/F",
        "category": "lizard",
        "abilities": ["Blaze"]
    },
    "attributes": {
        "types": ["Fire"],
        "weaknesses": ["Water", "Ground", "Rock"]
    },
    "evolutions": [4, 5, 6],
    "base_stats": {
        "hp": 39,
        "attack": 52,
        "defense": 43,
        "special_attack": 60,
        "special_defense": 50,
        "speed": 65
    }
}, {
    "name": "Charmeleon",
    "number": 5,
    "red_description": "If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings.",
    "blue_description": "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"],
    "stats": {
        "height": "3' 07\"",
        "weight": "41.9 lbs",
        "gender": "M/F",
        "category": "flame",
        "abilities": ["Blaze"]
    },
    "attributes": {
        "types": ["Fire"],
        "weaknesses": ["Water", "Ground", "Rock"]
    },
    "evolutions": [4, 5, 6],
    "base_stats": {
        "hp": 58,
        "attack": 64,
        "defense": 58,
        "special_attack": 80,
        "special_defense": 65,
        "speed": 80
    }
}, {
    "name": "Charizard",
    "number": 6,
    "red_description": "Its wings can carry this Pok\u00e9mon close to an altitude of 4,600 feet. It blows out fire at very high temperatures.",
    "blue_description": "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f2.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f4.png"],
    "stats": {
        "height": "5' 07\"",
        "weight": "199.5 lbs",
        "gender": "M/F",
        "category": "flame",
        "abilities": ["Blaze"]
    },
    "attributes": {
        "types": ["Fire", "Flying"],
        "weaknesses": ["Water", "Electric", "Rock"]
    },
    "evolutions": [4, 5, 6],
    "base_stats": {
        "hp": 78,
        "attack": 84,
        "defense": 78,
        "special_attack": 109,
        "special_defense": 85,
        "speed": 100
    }
}, {
    "name": "Squirtle",
    "number": 7,
    "red_description": "When it feels threatened, it draws its limbs inside its shell and sprays water from its mouth.",
    "blue_description": "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"],
    "stats": {
        "height": "1' 08\"",
        "weight": "19.8 lbs",
        "gender": "M/F",
        "category": "tiny turtle",
        "abilities": ["Torrent"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [7, 8, 9],
    "base_stats": {
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "special_attack": 50,
        "special_defense": 64,
        "speed": 43
    }
}, {
    "name": "Wartortle",
    "number": 8,
    "red_description": "It cleverly controls its furry ears and tail to maintain its balance while swimming.",
    "blue_description": "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "49.6 lbs",
        "gender": "M/F",
        "category": "turtle",
        "abilities": ["Torrent"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [7, 8, 9],
    "base_stats": {
        "hp": 59,
        "attack": 63,
        "defense": 80,
        "special_attack": 65,
        "special_defense": 80,
        "speed": 58
    }
}, {
    "name": "Blastoise",
    "number": 9,
    "red_description": "The rocket cannons on its shell fire jets of water capable of punching holes through thick steel.",
    "blue_description": "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009_f2.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009_f3.png"],
    "stats": {
        "height": "5' 03\"",
        "weight": "188.5 lbs",
        "gender": "M/F",
        "category": "shellfish",
        "abilities": ["Torrent"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [7, 8, 9],
    "base_stats": {
        "hp": 79,
        "attack": 83,
        "defense": 100,
        "special_attack": 85,
        "special_defense": 105,
        "speed": 78
    }
}, {
    "name": "Caterpie",
    "number": 10,
    "red_description": "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
    "blue_description": "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"],
    "stats": {
        "height": "1' 00\"",
        "weight": "6.4 lbs",
        "gender": "M/F",
        "category": "worm",
        "abilities": ["Shield Dust"]
    },
    "attributes": {
        "types": ["Bug"],
        "weaknesses": ["Fire", "Flying", "Rock"]
    },
    "evolutions": [10, 11, 12],
    "base_stats": {
        "hp": 45,
        "attack": 30,
        "defense": 35,
        "special_attack": 20,
        "special_defense": 20,
        "speed": 45
    }
}, {
    "name": "Metapod",
    "number": 11,
    "red_description": "Even though it is encased in a sturdy shell, the body inside is tender. It can\u2019t withstand a harsh attack.",
    "blue_description": "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"],
    "stats": {
        "height": "2' 04\"",
        "weight": "21.8 lbs",
        "gender": "M/F",
        "category": "cocoon",
        "abilities": ["Shed Skin"]
    },
    "attributes": {
        "types": ["Bug"],
        "weaknesses": ["Fire", "Flying", "Rock"]
    },
    "evolutions": [10, 11, 12],
    "base_stats": {
        "hp": 50,
        "attack": 20,
        "defense": 55,
        "special_attack": 25,
        "special_defense": 25,
        "speed": 30
    }
}, {
    "name": "Butterfree",
    "number": 12,
    "red_description": "It collects honey every day. It rubs honey onto the hairs on its legs to carry it back to its nest.",
    "blue_description": "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012_f2.png"],
    "stats": {
        "height": "3' 07\"",
        "weight": "70.5 lbs",
        "gender": "M/F",
        "category": "butterfly",
        "abilities": ["Compound Eyes"]
    },
    "attributes": {
        "types": ["Bug", "Flying"],
        "weaknesses": ["Fire", "Flying", "Electric", "Ice", "Rock"]
    },
    "evolutions": [10, 11, 12],
    "base_stats": {
        "hp": 60,
        "attack": 45,
        "defense": 50,
        "special_attack": 90,
        "special_defense": 80,
        "speed": 70
    }
}, {
    "name": "Weedle",
    "number": 13,
    "red_description": "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
    "blue_description": "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png"],
    "stats": {
        "height": "1' 00\"",
        "weight": "7.1 lbs",
        "gender": "M/F",
        "category": "hairy bug",
        "abilities": ["Shield Dust"]
    },
    "attributes": {
        "types": ["Bug", "Poison"],
        "weaknesses": ["Fire", "Psychic", "Flying", "Rock"]
    },
    "evolutions": [13, 14, 15],
    "base_stats": {
        "hp": 40,
        "attack": 35,
        "defense": 30,
        "special_attack": 20,
        "special_defense": 20,
        "speed": 50
    }
}, {
    "name": "Kakuna",
    "number": 14,
    "red_description": "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
    "blue_description": "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png"],
    "stats": {
        "height": "2' 00\"",
        "weight": "22.0 lbs",
        "gender": "M/F",
        "category": "cocoon",
        "abilities": ["Shed Skin"]
    },
    "attributes": {
        "types": ["Bug", "Poison"],
        "weaknesses": ["Fire", "Psychic", "Flying", "Rock"]
    },
    "evolutions": [13, 14, 15],
    "base_stats": {
        "hp": 45,
        "attack": 25,
        "defense": 50,
        "special_attack": 25,
        "special_defense": 25,
        "speed": 35
    }
}, {
    "name": "Beedrill",
    "number": 15,
    "red_description": "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
    "blue_description": "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015_f2.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "65.0 lbs",
        "gender": "M/F",
        "category": "poison bee",
        "abilities": ["Swarm"]
    },
    "attributes": {
        "types": ["Bug", "Poison"],
        "weaknesses": ["Fire", "Psychic", "Flying", "Rock"]
    },
    "evolutions": [13, 14, 15],
    "base_stats": {
        "hp": 65,
        "attack": 90,
        "defense": 40,
        "special_attack": 45,
        "special_defense": 80,
        "speed": 75
    }
}, {
    "name": "Pidgey",
    "number": 16,
    "red_description": "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
    "blue_description": "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"],
    "stats": {
        "height": "1' 00\"",
        "weight": "4.0 lbs",
        "gender": "M/F",
        "category": "tiny bird",
        "abilities": ["Keen Eye", "Tangled Feet"]
    },
    "attributes": {
        "types": ["Normal", "Flying"],
        "weaknesses": ["Electric", "Ice", "Rock"]
    },
    "evolutions": [16, 17, 18],
    "base_stats": {
        "hp": 40,
        "attack": 45,
        "defense": 40,
        "special_attack": 35,
        "special_defense": 35,
        "speed": 56
    }
}, {
    "name": "Pidgeotto",
    "number": 17,
    "red_description": "This Pok\u00e9mon is full of vitality. It constantly flies around its large territory in search of prey.",
    "blue_description": "This Pok\u00e9mon is full of vitality. It constantly flies around its large territory in search of prey.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png"],
    "stats": {
        "height": "3' 07\"",
        "weight": "66.1 lbs",
        "gender": "M/F",
        "category": "bird",
        "abilities": ["Keen Eye", "Tangled Feet"]
    },
    "attributes": {
        "types": ["Normal", "Flying"],
        "weaknesses": ["Electric", "Ice", "Rock"]
    },
    "evolutions": [16, 17, 18],
    "base_stats": {
        "hp": 63,
        "attack": 60,
        "defense": 55,
        "special_attack": 50,
        "special_defense": 50,
        "speed": 71
    }
}, {
    "name": "Pidgeot",
    "number": 18,
    "red_description": "This Pok\u00e9mon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
    "blue_description": "This Pok\u00e9mon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018_f2.png"],
    "stats": {
        "height": "4' 11\"",
        "weight": "87.1 lbs",
        "gender": "M/F",
        "category": "bird",
        "abilities": ["Keen Eye", "Tangled Feet"]
    },
    "attributes": {
        "types": ["Normal", "Flying"],
        "weaknesses": ["Electric", "Ice", "Rock"]
    },
    "evolutions": [16, 17, 18],
    "base_stats": {
        "hp": 83,
        "attack": 80,
        "defense": 75,
        "special_attack": 70,
        "special_defense": 70,
        "speed": 101
    }
}, {
    "name": "Rattata",
    "number": 19,
    "red_description": "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
    "blue_description": "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019_f2.png"],
    "stats": {
        "height": "1' 00\"",
        "weight": "7.7 lbs",
        "gender": "M/F",
        "category": "mouse",
        "abilities": ["Run Away", "Guts"]
    },
    "attributes": {
        "types": ["Normal"],
        "weaknesses": ["Fighting"]
    },
    "evolutions": [19, 20],
    "base_stats": {
        "hp": 30,
        "attack": 56,
        "defense": 35,
        "special_attack": 25,
        "special_defense": 35,
        "speed": 72
    }
}, {
    "name": "Raticate",
    "number": 20,
    "red_description": "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
    "blue_description": "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020_f2.png"],
    "stats": {
        "height": "2' 04\"",
        "weight": "40.8 lbs",
        "gender": "M/F",
        "category": "mouse",
        "abilities": ["Run Away", "Guts"]
    },
    "attributes": {
        "types": ["Normal"],
        "weaknesses": ["Fighting"]
    },
    "evolutions": [19, 20],
    "base_stats": {
        "hp": 55,
        "attack": 81,
        "defense": 60,
        "special_attack": 50,
        "special_defense": 70,
        "speed": 97
    }
}, {
    "name": "Spearow",
    "number": 21,
    "red_description": "Inept at flying high. However, it can fly around very fast to protect its territory.",
    "blue_description": "Inept at flying high. However, it can fly around very fast to protect its territory.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png"],
    "stats": {
        "height": "1' 00\"",
        "weight": "4.4 lbs",
        "gender": "M/F",
        "category": "tiny bird",
        "abilities": ["Keen Eye"]
    },
    "attributes": {
        "types": ["Normal", "Flying"],
        "weaknesses": ["Electric", "Ice", "Rock"]
    },
    "evolutions": [21, 22],
    "base_stats": {
        "hp": 40,
        "attack": 60,
        "defense": 30,
        "special_attack": 31,
        "special_defense": 31,
        "speed": 70
    }
}, {
    "name": "Fearow",
    "number": 22,
    "red_description": "A Pok\u00e9mon that dates back many years. If it senses danger, it flies high and away, instantly.",
    "blue_description": "A Pok\u00e9mon that dates back many years. If it senses danger, it flies high and away, instantly.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png"],
    "stats": {
        "height": "3' 11\"",
        "weight": "83.8 lbs",
        "gender": "M/F",
        "category": "beak",
        "abilities": ["Keen Eye"]
    },
    "attributes": {
        "types": ["Normal", "Flying"],
        "weaknesses": ["Electric", "Ice", "Rock"]
    },
    "evolutions": [21, 22],
    "base_stats": {
        "hp": 65,
        "attack": 90,
        "defense": 65,
        "special_attack": 61,
        "special_defense": 61,
        "speed": 100
    }
}, {
    "name": "Ekans",
    "number": 23,
    "red_description": "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.",
    "blue_description": "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png"],
    "stats": {
        "height": "6' 07\"",
        "weight": "15.2 lbs",
        "gender": "M/F",
        "category": "snake",
        "abilities": ["Shed Skin", "Intimidate"]
    },
    "attributes": {
        "types": ["Poison"],
        "weaknesses": ["Psychic", "Ground"]
    },
    "evolutions": [23, 24],
    "base_stats": {
        "hp": 35,
        "attack": 60,
        "defense": 44,
        "special_attack": 40,
        "special_defense": 54,
        "speed": 55
    }
}, {
    "name": "Arbok",
    "number": 24,
    "red_description": "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
    "blue_description": "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png"],
    "stats": {
        "height": "11' 06\"",
        "weight": "143.3 lbs",
        "gender": "M/F",
        "category": "cobra",
        "abilities": ["Shed Skin", "Intimidate"]
    },
    "attributes": {
        "types": ["Poison"],
        "weaknesses": ["Psychic", "Ground"]
    },
    "evolutions": [23, 24],
    "base_stats": {
        "hp": 60,
        "attack": 95,
        "defense": 69,
        "special_attack": 65,
        "special_defense": 79,
        "speed": 80
    }
}, {
    "name": "Pikachu",
    "number": 25,
    "red_description": "When Pikachu meet, they\u2019ll touch their tails together and exchange electricity through them as a form of greeting.",
    "blue_description": "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025_f2.png"],
    "stats": {
        "height": "1' 04\"",
        "weight": "13.2 lbs",
        "gender": "M/F",
        "category": "mouse",
        "abilities": ["Static"]
    },
    "attributes": {
        "types": ["Electric"],
        "weaknesses": ["Ground"]
    },
    "evolutions": [25, 26],
    "base_stats": {
        "hp": 35,
        "attack": 55,
        "defense": 40,
        "special_attack": 50,
        "special_defense": 50,
        "speed": 90
    }
}, {
    "name": "Raichu",
    "number": 26,
    "red_description": "If its electric pouches run empty, it raises its tail to gather electricity from the atmosphere.",
    "blue_description": "Its long tail serves as a ground to protect itself from its own high-voltage power.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026_f2.png"],
    "stats": {
        "height": "2' 07\"",
        "weight": "66.1 lbs",
        "gender": "M/F",
        "category": "mouse",
        "abilities": ["Static"]
    },
    "attributes": {
        "types": ["Electric"],
        "weaknesses": ["Ground"]
    },
    "evolutions": [25, 26],
    "base_stats": {
        "hp": 60,
        "attack": 90,
        "defense": 55,
        "special_attack": 90,
        "special_defense": 80,
        "speed": 110
    }
}, {
    "name": "Sandshrew",
    "number": 27,
    "red_description": "It burrows into the ground to create its nest. If hard stones impede its tunneling, it uses its sharp claws to shatter them and then carries on digging.",
    "blue_description": "It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pok\u00e9mon rids itself of dirt and moisture clinging to its body.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027_f2.png"],
    "stats": {
        "height": "2' 00\"",
        "weight": "26.5 lbs",
        "gender": "M/F",
        "category": "mouse",
        "abilities": ["Sand Veil"]
    },
    "attributes": {
        "types": ["Ground"],
        "weaknesses": ["Water", "Grass", "Ice"]
    },
    "evolutions": [27, 28],
    "base_stats": {
        "hp": 50,
        "attack": 75,
        "defense": 85,
        "special_attack": 20,
        "special_defense": 30,
        "speed": 40
    }
}, {
    "name": "Sandslash",
    "number": 28,
    "red_description": "It climbs trees by hooking on with its sharp claws. Sandslash shares the berries it gathers, dropping them down to Sandshrew waiting below the tree.",
    "blue_description": "The drier the area Sandslash lives in, the harder and smoother the Pok\u00e9mon\u2019s spikes will feel when touched.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028_f2.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "65.0 lbs",
        "gender": "M/F",
        "category": "mouse",
        "abilities": ["Sand Veil"]
    },
    "attributes": {
        "types": ["Ground"],
        "weaknesses": ["Water", "Grass", "Ice"]
    },
    "evolutions": [27, 28],
    "base_stats": {
        "hp": 75,
        "attack": 100,
        "defense": 110,
        "special_attack": 45,
        "special_defense": 55,
        "speed": 65
    }
}, {
    "name": "Nidoran\u2642",
    "number": 32,
    "red_description": "Small but brave, this Pok\u00e9mon will hold its ground and even risk its life in battle to protect the female it\u2019s friendly with.",
    "blue_description": "The horn on a male Nidoran\u2019s forehead contains a powerful poison. This is a very cautious Pok\u00e9mon, always straining its large ears.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png"],
    "stats": {
        "height": "1' 08\"",
        "weight": "19.8 lbs",
        "gender": "M",
        "category": "poison pin",
        "abilities": ["Poison Point", "Rivalry"]
    },
    "attributes": {
        "types": ["Poison"],
        "weaknesses": ["Psychic", "Ground"]
    },
    "evolutions": [32, 33, 34],
    "base_stats": {
        "hp": 46,
        "attack": 57,
        "defense": 40,
        "special_attack": 40,
        "special_defense": 40,
        "speed": 50
    }
}, {
    "name": "Nidorina",
    "number": 30,
    "red_description": "If the group is threatened, these Pok\u00e9mon will band together to assault enemies with a chorus of ultrasonic waves.",
    "blue_description": "The horn on its head has atrophied. It\u2019s thought that this happens so Nidorina\u2019s children won\u2019t get poked while their mother is feeding them.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png"],
    "stats": {
        "height": "2' 07\"",
        "weight": "44.1 lbs",
        "gender": "F",
        "category": "poison pin",
        "abilities": ["Poison Point", "Rivalry"]
    },
    "attributes": {
        "types": ["Poison"],
        "weaknesses": ["Psychic", "Ground"]
    },
    "evolutions": [29, 30, 31],
    "base_stats": {
        "hp": 70,
        "attack": 62,
        "defense": 67,
        "special_attack": 55,
        "special_defense": 55,
        "speed": 56
    }
}, {
    "name": "Nidoqueen",
    "number": 31,
    "red_description": "It pacifies offspring by placing them in the gaps between the spines on its back. The spines will never secrete poison while young are present.",
    "blue_description": "Nidoqueen is better at defense than offense. With scales like armor, this Pok\u00e9mon will shield its children from any kind of attack.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png"],
    "stats": {
        "height": "4' 03\"",
        "weight": "132.3 lbs",
        "gender": "F",
        "category": "drill",
        "abilities": ["Poison Point", "Rivalry"]
    },
    "attributes": {
        "types": ["Poison", "Ground"],
        "weaknesses": ["Water", "Psychic", "Ice", "Ground"]
    },
    "evolutions": [29, 30, 31],
    "base_stats": {
        "hp": 90,
        "attack": 92,
        "defense": 87,
        "special_attack": 75,
        "special_defense": 85,
        "speed": 76
    }
}, {
    "name": "Nidoran\u2640",
    "number": 29,
    "red_description": "It uses its hard incisor teeth to crush and eat berries. The tip of a female Nidoran\u2019s horn is a bit more rounded than the tip of a male\u2019s horn.",
    "blue_description": "Females are more sensitive to smells than males. While foraging, they\u2019ll use their whiskers to check wind direction and stay downwind of predators.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png"],
    "stats": {
        "height": "1' 04\"",
        "weight": "15.4 lbs",
        "gender": "F",
        "category": "poison pin",
        "abilities": ["Poison Point", "Rivalry"]
    },
    "attributes": {
        "types": ["Poison"],
        "weaknesses": ["Psychic", "Ground"]
    },
    "evolutions": [29, 30, 31],
    "base_stats": {
        "hp": 55,
        "attack": 47,
        "defense": 52,
        "special_attack": 40,
        "special_defense": 40,
        "speed": 41
    }
}, {
    "name": "Nidorino",
    "number": 33,
    "red_description": "It\u2019s nervous and quick to act aggressively. The potency of its poison increases along with the level of adrenaline present in its body.",
    "blue_description": "With a horn that\u2019s harder than diamond, this Pok\u00e9mon goes around shattering boulders as it searches for a moon stone.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png"],
    "stats": {
        "height": "2' 11\"",
        "weight": "43.0 lbs",
        "gender": "M",
        "category": "poison pin",
        "abilities": ["Poison Point", "Rivalry"]
    },
    "attributes": {
        "types": ["Poison"],
        "weaknesses": ["Psychic", "Ground"]
    },
    "evolutions": [32, 33, 34],
    "base_stats": {
        "hp": 61,
        "attack": 72,
        "defense": 57,
        "special_attack": 55,
        "special_defense": 55,
        "speed": 65
    }
}, {
    "name": "Nidoking",
    "number": 34,
    "red_description": "Nidoking prides itself on its strength. It\u2019s forceful and spirited in battle, making use of its thick tail and diamond-crushing horn.",
    "blue_description": "When it goes on a rampage, it\u2019s impossible to control. But in the presence of a Nidoqueen it\u2019s lived with for a long time, Nidoking calms down.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png"],
    "stats": {
        "height": "4' 07\"",
        "weight": "136.7 lbs",
        "gender": "M",
        "category": "drill",
        "abilities": ["Poison Point", "Rivalry"]
    },
    "attributes": {
        "types": ["Poison", "Ground"],
        "weaknesses": ["Water", "Psychic", "Ice", "Ground"]
    },
    "evolutions": [32, 33, 34],
    "base_stats": {
        "hp": 81,
        "attack": 102,
        "defense": 77,
        "special_attack": 85,
        "special_defense": 75,
        "speed": 85
    }
}, {
    "name": "Clefairy",
    "number": 35,
    "red_description": "Its adorable behavior and cry make it highly popular. However, this cute Pok\u00e9mon is rarely found.",
    "blue_description": "It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"],
    "stats": {
        "height": "2' 00\"",
        "weight": "16.5 lbs",
        "gender": "M/F",
        "category": "fairy",
        "abilities": ["Cute Charm", "Magic Guard"]
    },
    "attributes": {
        "types": ["Fairy"],
        "weaknesses": ["Steel", "Poison"]
    },
    "evolutions": [35, 36],
    "base_stats": {
        "hp": 70,
        "attack": 45,
        "defense": 48,
        "special_attack": 60,
        "special_defense": 65,
        "speed": 35
    }
}, {
    "name": "Clefable",
    "number": 36,
    "red_description": "Their ears are sensitive enough to hear a pin drop from over a mile away, so they\u2019re usually found in quiet places.",
    "blue_description": "A timid fairy Pok\u00e9mon that is rarely seen, it will run and hide the moment it senses people.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png"],
    "stats": {
        "height": "4' 03\"",
        "weight": "88.2 lbs",
        "gender": "M/F",
        "category": "fairy",
        "abilities": ["Cute Charm", "Magic Guard"]
    },
    "attributes": {
        "types": ["Fairy"],
        "weaknesses": ["Steel", "Poison"]
    },
    "evolutions": [35, 36],
    "base_stats": {
        "hp": 95,
        "attack": 70,
        "defense": 73,
        "special_attack": 95,
        "special_defense": 90,
        "speed": 60
    }
}, {
    "name": "Vulpix",
    "number": 37,
    "red_description": "As each tail grows, its fur becomes more lustrous. When held, it feels slightly warm.",
    "blue_description": "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037_f2.png"],
    "stats": {
        "height": "2' 00\"",
        "weight": "21.8 lbs",
        "gender": "M/F",
        "category": "fox",
        "abilities": ["Flash Fire"]
    },
    "attributes": {
        "types": ["Fire"],
        "weaknesses": ["Water", "Ground", "Rock"]
    },
    "evolutions": [37, 38],
    "base_stats": {
        "hp": 38,
        "attack": 41,
        "defense": 40,
        "special_attack": 50,
        "special_defense": 65,
        "speed": 65
    }
}, {
    "name": "Ninetales",
    "number": 38,
    "red_description": "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.",
    "blue_description": "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038_f2.png"],
    "stats": {
        "height": "3' 07\"",
        "weight": "43.9 lbs",
        "gender": "M/F",
        "category": "fox",
        "abilities": ["Flash Fire"]
    },
    "attributes": {
        "types": ["Fire"],
        "weaknesses": ["Water", "Ground", "Rock"]
    },
    "evolutions": [37, 38],
    "base_stats": {
        "hp": 73,
        "attack": 76,
        "defense": 75,
        "special_attack": 81,
        "special_defense": 100,
        "speed": 100
    }
}, {
    "name": "Jigglypuff",
    "number": 39,
    "red_description": "By freely changing the wavelength of its voice, Jigglypuff sings a mysterious melody sure to make any listener sleepy.",
    "blue_description": "Jigglypuff has top-notch lung capacity, even by comparison to other Pok\u00e9mon. It won\u2019t stop singing its lullabies until its foes fall asleep.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png"],
    "stats": {
        "height": "1' 08\"",
        "weight": "12.1 lbs",
        "gender": "M/F",
        "category": "balloon",
        "abilities": ["Cute Charm", "Competitive"]
    },
    "attributes": {
        "types": ["Normal", "Fairy"],
        "weaknesses": ["Steel", "Poison"]
    },
    "evolutions": [39, 40],
    "base_stats": {
        "hp": 115,
        "attack": 45,
        "defense": 20,
        "special_attack": 45,
        "special_defense": 25,
        "speed": 20
    }
}, {
    "name": "Wigglytuff",
    "number": 40,
    "red_description": "It\u2019s proud of its fur, which is fine and delicate. In particular, the curl on its forehead has a texture that\u2019s perfectly heavenly.",
    "blue_description": "The more air it takes in, the more it inflates. If opponents catch it in a bad mood, it will inflate itself to an enormous size to intimidate them.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "26.5 lbs",
        "gender": "M/F",
        "category": "balloon",
        "abilities": ["Cute Charm", "Competitive"]
    },
    "attributes": {
        "types": ["Normal", "Fairy"],
        "weaknesses": ["Steel", "Poison"]
    },
    "evolutions": [39, 40],
    "base_stats": {
        "hp": 140,
        "attack": 70,
        "defense": 45,
        "special_attack": 85,
        "special_defense": 50,
        "speed": 45
    }
}, {
    "name": "Zubat",
    "number": 41,
    "red_description": "Zubat live in caves, down where the sun\u2019s light won\u2019t reach. In the morning, they gather together to keep each other warm as they sleep.",
    "blue_description": "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png"],
    "stats": {
        "height": "2' 07\"",
        "weight": "16.5 lbs",
        "gender": "M/F",
        "category": "bat",
        "abilities": ["Inner Focus"]
    },
    "attributes": {
        "types": ["Poison", "Flying"],
        "weaknesses": ["Psychic", "Electric", "Ice", "Rock"]
    },
    "evolutions": [41, 42],
    "base_stats": {
        "hp": 40,
        "attack": 45,
        "defense": 35,
        "special_attack": 30,
        "special_defense": 40,
        "speed": 55
    }
}, {
    "name": "Golbat",
    "number": 42,
    "red_description": "Its feet are tiny, but this Pok\u00e9mon walks skillfully. It sneaks up on sleeping prey before sinking in its fangs and slurping up blood.",
    "blue_description": "It loves to drink other creatures\u2019 blood. It\u2019s said that if it finds others of its kind going hungry, it sometimes shares the blood it\u2019s gathered.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png"],
    "stats": {
        "height": "5' 03\"",
        "weight": "121.3 lbs",
        "gender": "M/F",
        "category": "bat",
        "abilities": ["Inner Focus"]
    },
    "attributes": {
        "types": ["Poison", "Flying"],
        "weaknesses": ["Psychic", "Electric", "Ice", "Rock"]
    },
    "evolutions": [41, 42],
    "base_stats": {
        "hp": 75,
        "attack": 80,
        "defense": 70,
        "special_attack": 65,
        "special_defense": 75,
        "speed": 90
    }
}, {
    "name": "Oddish",
    "number": 43,
    "red_description": "During the day, it stays in the cold underground to avoid the sun. It grows by bathing in moonlight.",
    "blue_description": "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png"],
    "stats": {
        "height": "1' 08\"",
        "weight": "11.9 lbs",
        "gender": "M/F",
        "category": "weed",
        "abilities": ["Chlorophyll"]
    },
    "attributes": {
        "types": ["Grass", "Poison"],
        "weaknesses": ["Fire", "Psychic", "Flying", "Ice"]
    },
    "evolutions": [43, 44, 45],
    "base_stats": {
        "hp": 45,
        "attack": 50,
        "defense": 55,
        "special_attack": 75,
        "special_defense": 65,
        "speed": 30
    }
}, {
    "name": "Gloom",
    "number": 44,
    "red_description": "What appears to be drool is actually sweet honey. It is very sticky and clings stubbornly if touched.",
    "blue_description": "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png"],
    "stats": {
        "height": "2' 07\"",
        "weight": "19.0 lbs",
        "gender": "M/F",
        "category": "weed",
        "abilities": ["Chlorophyll"]
    },
    "attributes": {
        "types": ["Grass", "Poison"],
        "weaknesses": ["Fire", "Psychic", "Flying", "Ice"]
    },
    "evolutions": [43, 44, 45],
    "base_stats": {
        "hp": 60,
        "attack": 65,
        "defense": 70,
        "special_attack": 85,
        "special_defense": 75,
        "speed": 40
    }
}, {
    "name": "Vileplume",
    "number": 45,
    "red_description": "The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.",
    "blue_description": "It has the world\u2019s largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png"],
    "stats": {
        "height": "3' 11\"",
        "weight": "41.0 lbs",
        "gender": "M/F",
        "category": "flower",
        "abilities": ["Chlorophyll"]
    },
    "attributes": {
        "types": ["Grass", "Poison"],
        "weaknesses": ["Fire", "Psychic", "Flying", "Ice"]
    },
    "evolutions": [43, 44, 45],
    "base_stats": {
        "hp": 75,
        "attack": 80,
        "defense": 85,
        "special_attack": 110,
        "special_defense": 90,
        "speed": 50
    }
}, {
    "name": "Paras",
    "number": 46,
    "red_description": "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.",
    "blue_description": "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png"],
    "stats": {
        "height": "1' 00\"",
        "weight": "11.9 lbs",
        "gender": "M/F",
        "category": "mushroom",
        "abilities": ["Effect Spore", "Dry Skin"]
    },
    "attributes": {
        "types": ["Bug", "Grass"],
        "weaknesses": ["Fire", "Flying", "Ice", "Poison", "Rock", "Bug"]
    },
    "evolutions": [46, 47],
    "base_stats": {
        "hp": 35,
        "attack": 70,
        "defense": 55,
        "special_attack": 45,
        "special_defense": 55,
        "speed": 25
    }
}, {
    "name": "Parasect",
    "number": 47,
    "red_description": "The bug host is drained of energy by the mushroom on its back. The mushroom appears to do all the thinking.",
    "blue_description": "The bug host is drained of energy by the mushroom on its back. The mushroom appears to do all the thinking.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "65.0 lbs",
        "gender": "M/F",
        "category": "mushroom",
        "abilities": ["Effect Spore", "Dry Skin"]
    },
    "attributes": {
        "types": ["Bug", "Grass"],
        "weaknesses": ["Fire", "Flying", "Ice", "Poison", "Rock", "Bug"]
    },
    "evolutions": [46, 47],
    "base_stats": {
        "hp": 60,
        "attack": 95,
        "defense": 80,
        "special_attack": 60,
        "special_defense": 80,
        "speed": 30
    }
}, {
    "name": "Venonat",
    "number": 48,
    "red_description": "Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.",
    "blue_description": "Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "66.1 lbs",
        "gender": "M/F",
        "category": "insect",
        "abilities": ["Compound Eyes", "Tinted Lens"]
    },
    "attributes": {
        "types": ["Bug", "Poison"],
        "weaknesses": ["Fire", "Psychic", "Flying", "Rock"]
    },
    "evolutions": [48, 49],
    "base_stats": {
        "hp": 60,
        "attack": 55,
        "defense": 50,
        "special_attack": 40,
        "special_defense": 55,
        "speed": 45
    }
}, {
    "name": "Venomoth",
    "number": 49,
    "red_description": "The powdery scales on its wings are hard to remove from skin. They also contain poison that leaks out on contact.",
    "blue_description": "The powdery scales on its wings are hard to remove from skin. They also contain poison that leaks out on contact.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png"],
    "stats": {
        "height": "4' 11\"",
        "weight": "27.6 lbs",
        "gender": "M/F",
        "category": "poison moth",
        "abilities": ["Shield Dust", "Tinted Lens"]
    },
    "attributes": {
        "types": ["Bug", "Poison"],
        "weaknesses": ["Fire", "Psychic", "Flying", "Rock"]
    },
    "evolutions": [48, 49],
    "base_stats": {
        "hp": 70,
        "attack": 65,
        "defense": 60,
        "special_attack": 90,
        "special_defense": 75,
        "speed": 90
    }
}, {
    "name": "Diglett",
    "number": 50,
    "red_description": "It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot.",
    "blue_description": "If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050_f2.png"],
    "stats": {
        "height": "0' 08\"",
        "weight": "1.8 lbs",
        "gender": "M/F",
        "category": "mole",
        "abilities": ["Sand Veil", "Arena Trap"]
    },
    "attributes": {
        "types": ["Ground"],
        "weaknesses": ["Water", "Grass", "Ice"]
    },
    "evolutions": [50, 51],
    "base_stats": {
        "hp": 10,
        "attack": 55,
        "defense": 25,
        "special_attack": 35,
        "special_defense": 45,
        "speed": 95
    }
}, {
    "name": "Dugtrio",
    "number": 51,
    "red_description": "These Diglett triplets dig over 60 miles below sea level. No one knows what it\u2019s like underground.",
    "blue_description": "A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051_f2.png"],
    "stats": {
        "height": "2' 04\"",
        "weight": "73.4 lbs",
        "gender": "M/F",
        "category": "mole",
        "abilities": ["Sand Veil", "Arena Trap"]
    },
    "attributes": {
        "types": ["Ground"],
        "weaknesses": ["Water", "Grass", "Ice"]
    },
    "evolutions": [50, 51],
    "base_stats": {
        "hp": 35,
        "attack": 100,
        "defense": 50,
        "special_attack": 50,
        "special_defense": 70,
        "speed": 120
    }
}, {
    "name": "Meowth",
    "number": 52,
    "red_description": "It washes its face regularly to keep the coin on its forehead spotless. It doesn\u2019t get along with Galarian Meowth.",
    "blue_description": "It loves to collect shiny things. If it\u2019s in a good mood, it might even let its Trainer have a look at its hoard of treasures.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052_f2.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052_f3.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052_f4.png"],
    "stats": {
        "height": "1' 04\"",
        "weight": "9.3 lbs",
        "gender": "M/F",
        "category": "scratch cat",
        "abilities": ["Pickup", "Technician"]
    },
    "attributes": {
        "types": ["Normal"],
        "weaknesses": ["Fighting"]
    },
    "evolutions": [52, 53],
    "base_stats": {
        "hp": 40,
        "attack": 45,
        "defense": 35,
        "special_attack": 40,
        "special_defense": 40,
        "speed": 90
    }
}, {
    "name": "Persian",
    "number": 53,
    "red_description": "Its elegant and refined behavior clashes with that of the barbaric Perrserker. The relationship between the two is one of mutual disdain.",
    "blue_description": "Getting this prideful Pok\u00e9mon to warm up to you takes a lot of effort, and it will claw at you the moment it gets annoyed.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/053_f2.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "70.5 lbs",
        "gender": "M/F",
        "category": "classy cat",
        "abilities": ["Technician", "Limber"]
    },
    "attributes": {
        "types": ["Normal"],
        "weaknesses": ["Fighting"]
    },
    "evolutions": [52, 53],
    "base_stats": {
        "hp": 65,
        "attack": 70,
        "defense": 60,
        "special_attack": 65,
        "special_defense": 65,
        "speed": 115
    }
}, {
    "name": "Psyduck",
    "number": 54,
    "red_description": "As Psyduck gets stressed out, its headache gets progressively worse. It uses intense psychic energy to overwhelm those around it.",
    "blue_description": "Psyduck is constantly beset by headaches. If the Pok\u00e9mon lets its strange power erupt, apparently the pain subsides for a while.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"],
    "stats": {
        "height": "2' 07\"",
        "weight": "43.2 lbs",
        "gender": "M/F",
        "category": "duck",
        "abilities": ["Damp", "Cloud Nine"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [54, 55],
    "base_stats": {
        "hp": 50,
        "attack": 52,
        "defense": 48,
        "special_attack": 65,
        "special_defense": 50,
        "speed": 55
    }
}, {
    "name": "Golduck",
    "number": 55,
    "red_description": "Old tales tell of Golduck punishing those that defiled its river. The guilty were dragged into the water and taken away.",
    "blue_description": "This Pok\u00e9mon lives in gently flowing rivers. It paddles through the water with its long limbs, putting its graceful swimming skills on display.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png"],
    "stats": {
        "height": "5' 07\"",
        "weight": "168.9 lbs",
        "gender": "M/F",
        "category": "duck",
        "abilities": ["Damp", "Cloud Nine"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [54, 55],
    "base_stats": {
        "hp": 80,
        "attack": 82,
        "defense": 78,
        "special_attack": 95,
        "special_defense": 80,
        "speed": 85
    }
}, {
    "name": "Mankey",
    "number": 56,
    "red_description": "An agile Pok\u00e9mon that lives in trees. It angers easily and will not hesitate to attack anything.",
    "blue_description": "An agile Pok\u00e9mon that lives in trees. It angers easily and will not hesitate to attack anything.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png"],
    "stats": {
        "height": "1' 08\"",
        "weight": "61.7 lbs",
        "gender": "M/F",
        "category": "pig monkey",
        "abilities": ["Vital Spirit", "Anger Point"]
    },
    "attributes": {
        "types": ["Fighting"],
        "weaknesses": ["Psychic", "Flying", "Fairy"]
    },
    "evolutions": [56, 57],
    "base_stats": {
        "hp": 40,
        "attack": 80,
        "defense": 35,
        "special_attack": 35,
        "special_defense": 45,
        "speed": 70
    }
}, {
    "name": "Primeape",
    "number": 57,
    "red_description": "It stops being angry only when nobody else is around. To view this moment is very difficult.",
    "blue_description": "It stops being angry only when nobody else is around. To view this moment is very difficult.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "70.5 lbs",
        "gender": "M/F",
        "category": "pig monkey",
        "abilities": ["Vital Spirit", "Anger Point"]
    },
    "attributes": {
        "types": ["Fighting"],
        "weaknesses": ["Psychic", "Flying", "Fairy"]
    },
    "evolutions": [56, 57],
    "base_stats": {
        "hp": 65,
        "attack": 105,
        "defense": 60,
        "special_attack": 60,
        "special_defense": 70,
        "speed": 95
    }
}, {
    "name": "Growlithe",
    "number": 58,
    "red_description": "Extremely loyal, it will fearlessly bark at any opponent to protect its own Trainer from harm.",
    "blue_description": "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png"],
    "stats": {
        "height": "2' 04\"",
        "weight": "41.9 lbs",
        "gender": "M/F",
        "category": "puppy",
        "abilities": ["Intimidate", "Flash Fire"]
    },
    "attributes": {
        "types": ["Fire"],
        "weaknesses": ["Water", "Ground", "Rock"]
    },
    "evolutions": [58, 59],
    "base_stats": {
        "hp": 55,
        "attack": 70,
        "defense": 45,
        "special_attack": 70,
        "special_defense": 50,
        "speed": 60
    }
}, {
    "name": "Arcanine",
    "number": 59,
    "red_description": "A Pok\u00e9mon that has long been admired for its beauty. It runs agilely as if on wings.",
    "blue_description": "The sight of it running over 6,200 miles in a single day and night has captivated many people.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png"],
    "stats": {
        "height": "6' 03\"",
        "weight": "341.7 lbs",
        "gender": "M/F",
        "category": "legendary",
        "abilities": ["Intimidate", "Flash Fire"]
    },
    "attributes": {
        "types": ["Fire"],
        "weaknesses": ["Water", "Ground", "Rock"]
    },
    "evolutions": [58, 59],
    "base_stats": {
        "hp": 90,
        "attack": 110,
        "defense": 80,
        "special_attack": 100,
        "special_defense": 80,
        "speed": 95
    }
}, {
    "name": "Poliwag",
    "number": 60,
    "red_description": "In rivers with fast-flowing water, this Pok\u00e9mon will cling to a rock by using its thick lips, which act like a suction cup.",
    "blue_description": "For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pok\u00e9mon\u2019s innards showing through the skin.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png"],
    "stats": {
        "height": "2' 00\"",
        "weight": "27.3 lbs",
        "gender": "M/F",
        "category": "tadpole",
        "abilities": ["Damp", "Water Absorb"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [60, 61, 62],
    "base_stats": {
        "hp": 40,
        "attack": 50,
        "defense": 40,
        "special_attack": 40,
        "special_defense": 40,
        "speed": 90
    }
}, {
    "name": "Poliwhirl",
    "number": 61,
    "red_description": "This Pok\u00e9mon\u2019s sweat is a slimy mucus. When captured, Poliwhirl can slither from its enemies\u2019 grasp and escape.",
    "blue_description": "Staring at the swirl on its belly causes drowsiness. This trait of Poliwhirl\u2019s has been used in place of lullabies to get children to go to sleep.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "44.1 lbs",
        "gender": "M/F",
        "category": "tadpole",
        "abilities": ["Damp", "Water Absorb"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [60, 61, 62],
    "base_stats": {
        "hp": 65,
        "attack": 65,
        "defense": 65,
        "special_attack": 50,
        "special_defense": 50,
        "speed": 90
    }
}, {
    "name": "Poliwrath",
    "number": 62,
    "red_description": "Poliwrath is skilled at both swimming and martial arts. It uses its well-trained arms to dish out powerful punches.",
    "blue_description": "Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png"],
    "stats": {
        "height": "4' 03\"",
        "weight": "119.0 lbs",
        "gender": "M/F",
        "category": "tadpole",
        "abilities": ["Damp", "Water Absorb"]
    },
    "attributes": {
        "types": ["Water", "Fighting"],
        "weaknesses": ["Fairy", "Grass", "Flying", "Psychic", "Electric"]
    },
    "evolutions": [60, 61, 62],
    "base_stats": {
        "hp": 90,
        "attack": 95,
        "defense": 95,
        "special_attack": 70,
        "special_defense": 90,
        "speed": 70
    }
}, {
    "name": "Abra",
    "number": 63,
    "red_description": "Abra can teleport in its sleep. Apparently the more deeply Abra sleeps, the farther its teleportations go.",
    "blue_description": "This Pok\u00e9mon uses its psychic powers while it sleeps. The contents of Abra\u2019s dreams affect the powers that the Pok\u00e9mon wields.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png"],
    "stats": {
        "height": "2' 11\"",
        "weight": "43.0 lbs",
        "gender": "M/F",
        "category": "psi",
        "abilities": ["Inner Focus", "Synchronize"]
    },
    "attributes": {
        "types": ["Psychic"],
        "weaknesses": ["Ghost", "Dark", "Bug"]
    },
    "evolutions": [63, 64, 65],
    "base_stats": {
        "hp": 25,
        "attack": 20,
        "defense": 15,
        "special_attack": 105,
        "special_defense": 55,
        "speed": 90
    }
}, {
    "name": "Kadabra",
    "number": 64,
    "red_description": "This Pok\u00e9mon\u2019s telekinesis is immensely powerful. To prepare for evolution, Kadabra stores up psychic energy in the star on its forehead.",
    "blue_description": "Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png"],
    "stats": {
        "height": "4' 03\"",
        "weight": "124.6 lbs",
        "gender": "M/F",
        "category": "psi",
        "abilities": ["Inner Focus", "Synchronize"]
    },
    "attributes": {
        "types": ["Psychic"],
        "weaknesses": ["Ghost", "Dark", "Bug"]
    },
    "evolutions": [63, 64, 65],
    "base_stats": {
        "hp": 40,
        "attack": 35,
        "defense": 30,
        "special_attack": 120,
        "special_defense": 70,
        "speed": 105
    }
}, {
    "name": "Alakazam",
    "number": 65,
    "red_description": "Alakazam wields potent psychic powers. It\u2019s said that this Pok\u00e9mon used these powers to create the spoons it holds.",
    "blue_description": "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065_f2.png"],
    "stats": {
        "height": "4' 11\"",
        "weight": "105.8 lbs",
        "gender": "M/F",
        "category": "psi",
        "abilities": ["Inner Focus", "Synchronize"]
    },
    "attributes": {
        "types": ["Psychic"],
        "weaknesses": ["Ghost", "Dark", "Bug"]
    },
    "evolutions": [63, 64, 65],
    "base_stats": {
        "hp": 55,
        "attack": 50,
        "defense": 45,
        "special_attack": 135,
        "special_defense": 95,
        "speed": 120
    }
}, {
    "name": "Machop",
    "number": 66,
    "red_description": "Always brimming with power, it passes time by lifting boulders. Doing so makes it even stronger.",
    "blue_description": "Its whole body is composed of muscles. Even though it\u2019s the size of a human child, it can hurl 100 grown-ups.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png"],
    "stats": {
        "height": "2' 07\"",
        "weight": "43.0 lbs",
        "gender": "M/F",
        "category": "superpower",
        "abilities": ["Guts", "No Guard"]
    },
    "attributes": {
        "types": ["Fighting"],
        "weaknesses": ["Psychic", "Flying", "Fairy"]
    },
    "evolutions": [66, 67, 68],
    "base_stats": {
        "hp": 70,
        "attack": 80,
        "defense": 50,
        "special_attack": 35,
        "special_defense": 35,
        "speed": 35
    }
}, {
    "name": "Machoke",
    "number": 67,
    "red_description": "Its formidable body never gets tired. It helps people by doing work such as the moving of heavy goods.",
    "blue_description": "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png"],
    "stats": {
        "height": "4' 11\"",
        "weight": "155.4 lbs",
        "gender": "M/F",
        "category": "superpower",
        "abilities": ["Guts", "No Guard"]
    },
    "attributes": {
        "types": ["Fighting"],
        "weaknesses": ["Psychic", "Flying", "Fairy"]
    },
    "evolutions": [66, 67, 68],
    "base_stats": {
        "hp": 80,
        "attack": 100,
        "defense": 70,
        "special_attack": 50,
        "special_defense": 60,
        "speed": 45
    }
}, {
    "name": "Machamp",
    "number": 68,
    "red_description": "With four arms that react more quickly than it can think, it can execute many punches at once.",
    "blue_description": "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068_f2.png"],
    "stats": {
        "height": "5' 03\"",
        "weight": "286.6 lbs",
        "gender": "M/F",
        "category": "superpower",
        "abilities": ["Guts", "No Guard"]
    },
    "attributes": {
        "types": ["Fighting"],
        "weaknesses": ["Psychic", "Flying", "Fairy"]
    },
    "evolutions": [66, 67, 68],
    "base_stats": {
        "hp": 90,
        "attack": 130,
        "defense": 80,
        "special_attack": 65,
        "special_defense": 85,
        "speed": 55
    }
}, {
    "name": "Bellsprout",
    "number": 69,
    "red_description": "Prefers hot and humid places. It ensnares tiny bugs with its vines and devours them.",
    "blue_description": "Prefers hot and humid places. It ensnares tiny bugs with its vines and devours them.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png"],
    "stats": {
        "height": "2' 04\"",
        "weight": "8.8 lbs",
        "gender": "M/F",
        "category": "flower",
        "abilities": ["Chlorophyll"]
    },
    "attributes": {
        "types": ["Grass", "Poison"],
        "weaknesses": ["Fire", "Psychic", "Flying", "Ice"]
    },
    "evolutions": [69, 70, 71],
    "base_stats": {
        "hp": 50,
        "attack": 75,
        "defense": 35,
        "special_attack": 70,
        "special_defense": 30,
        "speed": 40
    }
}, {
    "name": "Weepinbell",
    "number": 70,
    "red_description": "When hungry, it swallows anything that moves. Its hapless prey is dissolved by strong acids.",
    "blue_description": "When hungry, it swallows anything that moves. Its hapless prey is dissolved by strong acids.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "14.1 lbs",
        "gender": "M/F",
        "category": "flycatcher",
        "abilities": ["Chlorophyll"]
    },
    "attributes": {
        "types": ["Grass", "Poison"],
        "weaknesses": ["Fire", "Psychic", "Flying", "Ice"]
    },
    "evolutions": [69, 70, 71],
    "base_stats": {
        "hp": 65,
        "attack": 90,
        "defense": 50,
        "special_attack": 85,
        "special_defense": 45,
        "speed": 55
    }
}, {
    "name": "Victreebel",
    "number": 71,
    "red_description": "Lures prey with the sweet aroma of honey. Swallowed whole, the prey is dissolved in a day, bones and all.",
    "blue_description": "Lures prey with the sweet aroma of honey. Swallowed whole, the prey is dissolved in a day, bones and all.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png"],
    "stats": {
        "height": "5' 07\"",
        "weight": "34.2 lbs",
        "gender": "M/F",
        "category": "flycatcher",
        "abilities": ["Chlorophyll"]
    },
    "attributes": {
        "types": ["Grass", "Poison"],
        "weaknesses": ["Fire", "Psychic", "Flying", "Ice"]
    },
    "evolutions": [69, 70, 71],
    "base_stats": {
        "hp": 80,
        "attack": 105,
        "defense": 65,
        "special_attack": 100,
        "special_defense": 70,
        "speed": 70
    }
}, {
    "name": "Tentacool",
    "number": 72,
    "red_description": "This Pok\u00e9mon is mostly made of water. A Tentacool out in the ocean is very hard to spot, because its body blends in with the sea.",
    "blue_description": "Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png"],
    "stats": {
        "height": "2' 11\"",
        "weight": "100.3 lbs",
        "gender": "M/F",
        "category": "jellyfish",
        "abilities": ["Clear Body", "Liquid Ooze"]
    },
    "attributes": {
        "types": ["Water", "Poison"],
        "weaknesses": ["Psychic", "Electric", "Ground"]
    },
    "evolutions": [72, 73],
    "base_stats": {
        "hp": 40,
        "attack": 40,
        "defense": 35,
        "special_attack": 50,
        "special_defense": 100,
        "speed": 70
    }
}, {
    "name": "Tentacruel",
    "number": 73,
    "red_description": "Its 80 tentacles can stretch and shrink freely. Tentacruel ensnares prey in a net of spread-out tentacles, delivering venomous stings to its catch.",
    "blue_description": "When the red orbs on Tentacruel\u2019s head glow brightly, watch out. The Pok\u00e9mon is about to fire off a burst of ultrasonic waves.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png"],
    "stats": {
        "height": "5' 03\"",
        "weight": "121.3 lbs",
        "gender": "M/F",
        "category": "jellyfish",
        "abilities": ["Clear Body", "Liquid Ooze"]
    },
    "attributes": {
        "types": ["Water", "Poison"],
        "weaknesses": ["Psychic", "Electric", "Ground"]
    },
    "evolutions": [72, 73],
    "base_stats": {
        "hp": 80,
        "attack": 70,
        "defense": 65,
        "special_attack": 80,
        "special_defense": 120,
        "speed": 100
    }
}, {
    "name": "Geodude",
    "number": 74,
    "red_description": "Commonly found near mountain trails and the like. If you step on one by accident, it gets angry.",
    "blue_description": "Commonly found near mountain trails and the like. If you step on one by accident, it gets angry.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074_f2.png"],
    "stats": {
        "height": "1' 04\"",
        "weight": "44.1 lbs",
        "gender": "M/F",
        "category": "rock",
        "abilities": ["Rock Head", "Sturdy"]
    },
    "attributes": {
        "types": ["Rock", "Ground"],
        "weaknesses": ["Steel", "Fighting", "Water", "Ice", "Grass", "Ground"]
    },
    "evolutions": [74, 75, 76],
    "base_stats": {
        "hp": 40,
        "attack": 80,
        "defense": 100,
        "special_attack": 30,
        "special_defense": 30,
        "speed": 20
    }
}, {
    "name": "Graveler",
    "number": 75,
    "red_description": "Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid.",
    "blue_description": "Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075_f2.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "231.5 lbs",
        "gender": "M/F",
        "category": "rock",
        "abilities": ["Rock Head", "Sturdy"]
    },
    "attributes": {
        "types": ["Rock", "Ground"],
        "weaknesses": ["Steel", "Fighting", "Water", "Ice", "Grass", "Ground"]
    },
    "evolutions": [74, 75, 76],
    "base_stats": {
        "hp": 55,
        "attack": 95,
        "defense": 115,
        "special_attack": 45,
        "special_defense": 45,
        "speed": 35
    }
}, {
    "name": "Golem",
    "number": 76,
    "red_description": "Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it\u2019s exposed to air.",
    "blue_description": "Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it\u2019s exposed to air.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076_f2.png"],
    "stats": {
        "height": "4' 07\"",
        "weight": "661.4 lbs",
        "gender": "M/F",
        "category": "megaton",
        "abilities": ["Rock Head", "Sturdy"]
    },
    "attributes": {
        "types": ["Rock", "Ground"],
        "weaknesses": ["Steel", "Fighting", "Water", "Ice", "Grass", "Ground"]
    },
    "evolutions": [74, 75, 76],
    "base_stats": {
        "hp": 80,
        "attack": 120,
        "defense": 130,
        "special_attack": 55,
        "special_defense": 65,
        "speed": 45
    }
}, {
    "name": "Ponyta",
    "number": 77,
    "red_description": "If you\u2019ve been accepted by Ponyta, its burning mane is mysteriously no longer hot to the touch.",
    "blue_description": "It can\u2019t run properly when it\u2019s newly born. As it races around with others of its kind, its legs grow stronger.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077_f2.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "66.1 lbs",
        "gender": "M/F",
        "category": "fire horse",
        "abilities": ["Run Away", "Flash Fire"]
    },
    "attributes": {
        "types": ["Fire"],
        "weaknesses": ["Water", "Ground", "Rock"]
    },
    "evolutions": [77, 78],
    "base_stats": {
        "hp": 50,
        "attack": 85,
        "defense": 55,
        "special_attack": 65,
        "special_defense": 65,
        "speed": 90
    }
}, {
    "name": "Rapidash",
    "number": 78,
    "red_description": "The fastest runner becomes the leader, and it decides the herd\u2019s pace and direction of travel.",
    "blue_description": "This Pok\u00e9mon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078_f2.png"],
    "stats": {
        "height": "5' 07\"",
        "weight": "209.4 lbs",
        "gender": "M/F",
        "category": "fire horse",
        "abilities": ["Run Away", "Flash Fire"]
    },
    "attributes": {
        "types": ["Fire"],
        "weaknesses": ["Water", "Ground", "Rock"]
    },
    "evolutions": [77, 78],
    "base_stats": {
        "hp": 65,
        "attack": 100,
        "defense": 70,
        "special_attack": 80,
        "special_defense": 80,
        "speed": 105
    }
}, {
    "name": "Slowpoke",
    "number": 79,
    "red_description": "When this Pok\u00e9mon\u2019s tail is soaked in water, sweetness seeps from it. Slowpoke uses this trait to lure in and fish up other Pok\u00e9mon.",
    "blue_description": "Slow-witted and oblivious, this Pok\u00e9mon won\u2019t feel any pain if its tail gets eaten. It won\u2019t notice when its tail grows back, either.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079_f2.png"],
    "stats": {
        "height": "3' 11\"",
        "weight": "79.4 lbs",
        "gender": "M/F",
        "category": "dopey",
        "abilities": ["Oblivious", "Own Tempo"]
    },
    "attributes": {
        "types": ["Water", "Psychic"],
        "weaknesses": ["Ghost", "Dark", "Grass", "Electric", "Bug"]
    },
    "evolutions": [79, 80],
    "base_stats": {
        "hp": 90,
        "attack": 65,
        "defense": 65,
        "special_attack": 40,
        "special_defense": 40,
        "speed": 15
    }
}, {
    "name": "Slowbro",
    "number": 80,
    "red_description": "Being bitten by a Shellder shocked this Pok\u00e9mon into standing on two legs. If the Shellder lets go, it seems Slowbro will turn back into a Slowpoke.",
    "blue_description": "Slowpoke became Slowbro when a Shellder bit on to its tail. Sweet flavors seeping from the tail make the Shellder feel as if its life is a dream.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080_f2.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080_f3.png"],
    "stats": {
        "height": "5' 03\"",
        "weight": "173.1 lbs",
        "gender": "M/F",
        "category": "hermit crab",
        "abilities": ["Oblivious", "Own Tempo"]
    },
    "attributes": {
        "types": ["Water", "Psychic"],
        "weaknesses": ["Ghost", "Dark", "Grass", "Electric", "Bug"]
    },
    "evolutions": [79, 80],
    "base_stats": {
        "hp": 95,
        "attack": 75,
        "defense": 110,
        "special_attack": 100,
        "special_defense": 80,
        "speed": 30
    }
}, {
    "name": "Magnemite",
    "number": 81,
    "red_description": "It subsists on electricity. As Magnemite flies, it emits electromagnetic waves from the units on each side of its body.",
    "blue_description": "At times, Magnemite runs out of electricity and ends up on the ground. If you give batteries to a grounded Magnemite, it\u2019ll start moving again.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png"],
    "stats": {
        "height": "1' 00\"",
        "weight": "13.2 lbs",
        "gender": "Unknown",
        "category": "magnet",
        "abilities": ["Sturdy", "Magnet Pull"]
    },
    "attributes": {
        "types": ["Electric", "Steel"],
        "weaknesses": ["Fire", "Fighting", "Ground"]
    },
    "evolutions": [81, 82],
    "base_stats": {
        "hp": 25,
        "attack": 35,
        "defense": 70,
        "special_attack": 95,
        "special_defense": 55,
        "speed": 45
    }
}, {
    "name": "Magneton",
    "number": 82,
    "red_description": "This Pok\u00e9mon is constantly putting out a powerful magnetic force. Most computers go haywire when a Magneton approaches.",
    "blue_description": "This Pok\u00e9mon is three Magnemite that have linked together. Magneton sends out powerful radio waves to study its surroundings.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "132.3 lbs",
        "gender": "Unknown",
        "category": "magnet",
        "abilities": ["Sturdy", "Magnet Pull"]
    },
    "attributes": {
        "types": ["Electric", "Steel"],
        "weaknesses": ["Fire", "Fighting", "Ground"]
    },
    "evolutions": [81, 82],
    "base_stats": {
        "hp": 50,
        "attack": 60,
        "defense": 95,
        "special_attack": 120,
        "special_defense": 70,
        "speed": 70
    }
}, {
    "name": "Farfetch\u2019d",
    "number": 83,
    "red_description": "They use a plant stalk as a weapon, but not all of them use it in the same way. Several distinct styles of stalk fighting have been observed.",
    "blue_description": "The stalk this Pok\u00e9mon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083_f2.png"],
    "stats": {
        "height": "2' 07\"",
        "weight": "33.1 lbs",
        "gender": "M/F",
        "category": "wild duck",
        "abilities": ["Keen Eye", "Inner Focus"]
    },
    "attributes": {
        "types": ["Normal", "Flying"],
        "weaknesses": ["Electric", "Ice", "Rock"]
    },
    "evolutions": [83],
    "base_stats": {
        "hp": 52,
        "attack": 90,
        "defense": 55,
        "special_attack": 58,
        "special_defense": 62,
        "speed": 60
    }
}, {
    "name": "Doduo",
    "number": 84,
    "red_description": "Its short wings make flying difficult. Instead, this Pok\u00e9mon runs at high speed on developed legs.",
    "blue_description": "Its short wings make flying difficult. Instead, this Pok\u00e9mon runs at high speed on developed legs.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png"],
    "stats": {
        "height": "4' 07\"",
        "weight": "86.4 lbs",
        "gender": "M/F",
        "category": "twin bird",
        "abilities": ["Run Away", "Early Bird"]
    },
    "attributes": {
        "types": ["Normal", "Flying"],
        "weaknesses": ["Electric", "Ice", "Rock"]
    },
    "evolutions": [84, 85],
    "base_stats": {
        "hp": 35,
        "attack": 85,
        "defense": 45,
        "special_attack": 35,
        "special_defense": 35,
        "speed": 75
    }
}, {
    "name": "Dodrio",
    "number": 85,
    "red_description": "One of Doduo\u2019s two heads splits to form a unique species. It runs close to 40 mph in prairies.",
    "blue_description": "One of Doduo\u2019s two heads splits to form a unique species. It runs close to 40 mph in prairies.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png"],
    "stats": {
        "height": "5' 11\"",
        "weight": "187.8 lbs",
        "gender": "M/F",
        "category": "triple bird",
        "abilities": ["Run Away", "Early Bird"]
    },
    "attributes": {
        "types": ["Normal", "Flying"],
        "weaknesses": ["Electric", "Ice", "Rock"]
    },
    "evolutions": [84, 85],
    "base_stats": {
        "hp": 60,
        "attack": 110,
        "defense": 70,
        "special_attack": 60,
        "special_defense": 60,
        "speed": 110
    }
}, {
    "name": "Seel",
    "number": 86,
    "red_description": "Loves freezing-cold conditions. Relishes swimming in a frigid climate of around 14 degrees Fahrenheit.",
    "blue_description": "Loves freezing-cold conditions. Relishes swimming in a frigid climate of around 14 degrees Fahrenheit.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png"],
    "stats": {
        "height": "3' 07\"",
        "weight": "198.4 lbs",
        "gender": "M/F",
        "category": "sea lion",
        "abilities": ["Thick Fat", "Hydration"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [86, 87],
    "base_stats": {
        "hp": 65,
        "attack": 45,
        "defense": 55,
        "special_attack": 45,
        "special_defense": 70,
        "speed": 45
    }
}, {
    "name": "Dewgong",
    "number": 87,
    "red_description": "Its entire body is a snowy white. Unharmed by even intense cold, it swims powerfully in icy waters.",
    "blue_description": "Its entire body is a snowy white. Unharmed by even intense cold, it swims powerfully in icy waters.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png"],
    "stats": {
        "height": "5' 07\"",
        "weight": "264.6 lbs",
        "gender": "M/F",
        "category": "sea lion",
        "abilities": ["Thick Fat", "Hydration"]
    },
    "attributes": {
        "types": ["Water", "Ice"],
        "weaknesses": ["Grass", "Electric", "Fighting", "Rock"]
    },
    "evolutions": [86, 87],
    "base_stats": {
        "hp": 90,
        "attack": 70,
        "defense": 80,
        "special_attack": 70,
        "special_defense": 95,
        "speed": 70
    }
}, {
    "name": "Grimer",
    "number": 88,
    "red_description": "Made of congealed sludge. It smells too putrid to touch. Even weeds won\u2019t grow in its path.",
    "blue_description": "Made of congealed sludge. It smells too putrid to touch. Even weeds won\u2019t grow in its path.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088_f2.png"],
    "stats": {
        "height": "2' 11\"",
        "weight": "66.1 lbs",
        "gender": "M/F",
        "category": "sludge",
        "abilities": ["Stench", "Sticky Hold"]
    },
    "attributes": {
        "types": ["Poison"],
        "weaknesses": ["Psychic", "Ground"]
    },
    "evolutions": [88, 89],
    "base_stats": {
        "hp": 80,
        "attack": 80,
        "defense": 50,
        "special_attack": 40,
        "special_defense": 50,
        "speed": 25
    }
}, {
    "name": "Muk",
    "number": 89,
    "red_description": "Smells so awful, it can cause fainting. Through degeneration of its nose, it lost its sense of smell.",
    "blue_description": "Smells so awful, it can cause fainting. Through degeneration of its nose, it lost its sense of smell.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089_f2.png"],
    "stats": {
        "height": "3' 11\"",
        "weight": "66.1 lbs",
        "gender": "M/F",
        "category": "sludge",
        "abilities": ["Stench", "Sticky Hold"]
    },
    "attributes": {
        "types": ["Poison"],
        "weaknesses": ["Psychic", "Ground"]
    },
    "evolutions": [88, 89],
    "base_stats": {
        "hp": 105,
        "attack": 105,
        "defense": 75,
        "special_attack": 65,
        "special_defense": 100,
        "speed": 50
    }
}, {
    "name": "Shellder",
    "number": 90,
    "red_description": "Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.",
    "blue_description": "It swims facing backward by opening and closing its two-piece shell. It is surprisingly fast.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png"],
    "stats": {
        "height": "1' 00\"",
        "weight": "8.8 lbs",
        "gender": "M/F",
        "category": "bivalve",
        "abilities": ["Shell Armor", "Skill Link"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [90, 91],
    "base_stats": {
        "hp": 30,
        "attack": 65,
        "defense": 100,
        "special_attack": 45,
        "special_defense": 25,
        "speed": 40
    }
}, {
    "name": "Cloyster",
    "number": 91,
    "red_description": "Once it slams its shell shut, it is impossible to open, even by those with superior strength.",
    "blue_description": "Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png"],
    "stats": {
        "height": "4' 11\"",
        "weight": "292.1 lbs",
        "gender": "M/F",
        "category": "bivalve",
        "abilities": ["Shell Armor", "Skill Link"]
    },
    "attributes": {
        "types": ["Water", "Ice"],
        "weaknesses": ["Grass", "Electric", "Fighting", "Rock"]
    },
    "evolutions": [90, 91],
    "base_stats": {
        "hp": 50,
        "attack": 95,
        "defense": 180,
        "special_attack": 85,
        "special_defense": 45,
        "speed": 70
    }
}, {
    "name": "Gastly",
    "number": 92,
    "red_description": "With its gas-like body, it can sneak into any place it desires. However, it can be blown away by wind.",
    "blue_description": "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png"],
    "stats": {
        "height": "4' 03\"",
        "weight": "0.2 lbs",
        "gender": "M/F",
        "category": "gas",
        "abilities": ["Levitate"]
    },
    "attributes": {
        "types": ["Ghost", "Poison"],
        "weaknesses": ["Ghost", "Dark", "Psychic", "Ground"]
    },
    "evolutions": [92, 93, 94],
    "base_stats": {
        "hp": 30,
        "attack": 35,
        "defense": 30,
        "special_attack": 100,
        "special_defense": 35,
        "speed": 80
    }
}, {
    "name": "Haunter",
    "number": 93,
    "red_description": "If you get the feeling of being watched in darkness when nobody is around, Haunter is there.",
    "blue_description": "Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png"],
    "stats": {
        "height": "5' 03\"",
        "weight": "0.2 lbs",
        "gender": "M/F",
        "category": "gas",
        "abilities": ["Levitate"]
    },
    "attributes": {
        "types": ["Ghost", "Poison"],
        "weaknesses": ["Ghost", "Dark", "Psychic", "Ground"]
    },
    "evolutions": [92, 93, 94],
    "base_stats": {
        "hp": 45,
        "attack": 50,
        "defense": 45,
        "special_attack": 115,
        "special_defense": 55,
        "speed": 95
    }
}, {
    "name": "Gengar",
    "number": 94,
    "red_description": "It is said to emerge from darkness to steal the lives of those who become lost in mountains.",
    "blue_description": "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar\u2019s doing.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094_f2.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094_f3.png"],
    "stats": {
        "height": "4' 11\"",
        "weight": "89.3 lbs",
        "gender": "M/F",
        "category": "shadow",
        "abilities": ["Cursed Body"]
    },
    "attributes": {
        "types": ["Ghost", "Poison"],
        "weaknesses": ["Ghost", "Dark", "Psychic", "Ground"]
    },
    "evolutions": [92, 93, 94],
    "base_stats": {
        "hp": 60,
        "attack": 65,
        "defense": 60,
        "special_attack": 130,
        "special_defense": 75,
        "speed": 110
    }
}, {
    "name": "Onix",
    "number": 95,
    "red_description": "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body.",
    "blue_description": "As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png"],
    "stats": {
        "height": "28' 10\"",
        "weight": "463.0 lbs",
        "gender": "M/F",
        "category": "rock snake",
        "abilities": ["Rock Head", "Sturdy"]
    },
    "attributes": {
        "types": ["Rock", "Ground"],
        "weaknesses": ["Steel", "Fighting", "Water", "Ice", "Grass", "Ground"]
    },
    "evolutions": [95],
    "base_stats": {
        "hp": 35,
        "attack": 45,
        "defense": 160,
        "special_attack": 30,
        "special_defense": 45,
        "speed": 70
    }
}, {
    "name": "Drowzee",
    "number": 96,
    "red_description": "If you sleep by it all the time, it will sometimes show you dreams it had eaten in the past.",
    "blue_description": "If you sleep by it all the time, it will sometimes show you dreams it had eaten in the past.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "71.4 lbs",
        "gender": "M/F",
        "category": "hypnosis",
        "abilities": ["Insomnia", "Forewarn"]
    },
    "attributes": {
        "types": ["Psychic"],
        "weaknesses": ["Ghost", "Dark", "Bug"]
    },
    "evolutions": [96, 97],
    "base_stats": {
        "hp": 60,
        "attack": 48,
        "defense": 45,
        "special_attack": 43,
        "special_defense": 90,
        "speed": 42
    }
}, {
    "name": "Hypno",
    "number": 97,
    "red_description": "Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum.",
    "blue_description": "Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png"],
    "stats": {
        "height": "5' 03\"",
        "weight": "166.7 lbs",
        "gender": "M/F",
        "category": "hypnosis",
        "abilities": ["Insomnia", "Forewarn"]
    },
    "attributes": {
        "types": ["Psychic"],
        "weaknesses": ["Ghost", "Dark", "Bug"]
    },
    "evolutions": [96, 97],
    "base_stats": {
        "hp": 85,
        "attack": 73,
        "defense": 70,
        "special_attack": 73,
        "special_defense": 115,
        "speed": 67
    }
}, {
    "name": "Krabby",
    "number": 98,
    "red_description": "If it senses danger approaching, it cloaks itself with bubbles from its mouth so it will look bigger.",
    "blue_description": "It can be found near the sea. The large pincers grow back if they are torn out of their sockets.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png"],
    "stats": {
        "height": "1' 04\"",
        "weight": "14.3 lbs",
        "gender": "M/F",
        "category": "river crab",
        "abilities": ["Shell Armor", "Hyper Cutter"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [98, 99],
    "base_stats": {
        "hp": 30,
        "attack": 105,
        "defense": 90,
        "special_attack": 25,
        "special_defense": 25,
        "speed": 50
    }
}, {
    "name": "Kingler",
    "number": 99,
    "red_description": "Its oversized claw is very powerful, but when it\u2019s not in battle, the claw just gets in the way.",
    "blue_description": "Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/099_f2.png"],
    "stats": {
        "height": "4' 03\"",
        "weight": "132.3 lbs",
        "gender": "M/F",
        "category": "pincer",
        "abilities": ["Shell Armor", "Hyper Cutter"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [98, 99],
    "base_stats": {
        "hp": 55,
        "attack": 130,
        "defense": 115,
        "special_attack": 50,
        "special_defense": 50,
        "speed": 75
    }
}, {
    "name": "Voltorb",
    "number": 100,
    "red_description": "It is said to camouflage itself as a Pok\u00e9 Ball. It will self-destruct with very little stimulus.",
    "blue_description": "It is said to camouflage itself as a Pok\u00e9 Ball. It will self-destruct with very little stimulus.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png"],
    "stats": {
        "height": "1' 08\"",
        "weight": "22.9 lbs",
        "gender": "Unknown",
        "category": "ball",
        "abilities": ["Static", "Soundproof"]
    },
    "attributes": {
        "types": ["Electric"],
        "weaknesses": ["Ground"]
    },
    "evolutions": [100, 101],
    "base_stats": {
        "hp": 40,
        "attack": 30,
        "defense": 50,
        "special_attack": 55,
        "special_defense": 55,
        "speed": 100
    }
}, {
    "name": "Electrode",
    "number": 101,
    "red_description": "Stores electrical energy inside its body. Even the slightest shock could trigger a huge explosion.",
    "blue_description": "Stores electrical energy inside its body. Even the slightest shock could trigger a huge explosion.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png"],
    "stats": {
        "height": "3' 11\"",
        "weight": "146.8 lbs",
        "gender": "Unknown",
        "category": "ball",
        "abilities": ["Static", "Soundproof"]
    },
    "attributes": {
        "types": ["Electric"],
        "weaknesses": ["Ground"]
    },
    "evolutions": [100, 101],
    "base_stats": {
        "hp": 60,
        "attack": 50,
        "defense": 70,
        "special_attack": 80,
        "special_defense": 80,
        "speed": 150
    }
}, {
    "name": "Exeggcute",
    "number": 102,
    "red_description": "These Pok\u00e9mon get nervous when they\u2019re not in a group of six. The minute even one member of the group goes missing, Exeggcute become cowardly.",
    "blue_description": "Though it may look like it\u2019s just a bunch of eggs, it\u2019s a proper Pok\u00e9mon. Exeggcute communicates with others of its kind via telepathy, apparently.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png"],
    "stats": {
        "height": "1' 04\"",
        "weight": "5.5 lbs",
        "gender": "M/F",
        "category": "egg",
        "abilities": ["Chlorophyll"]
    },
    "attributes": {
        "types": ["Grass", "Psychic"],
        "weaknesses": ["Ghost", "Fire", "Flying", "Ice", "Dark", "Poison", "Bug"]
    },
    "evolutions": [102, 103],
    "base_stats": {
        "hp": 60,
        "attack": 40,
        "defense": 80,
        "special_attack": 60,
        "special_defense": 45,
        "speed": 40
    }
}, {
    "name": "Exeggutor",
    "number": 103,
    "red_description": "When they work together, Exeggutor\u2019s three heads can put out powerful psychic energy. Cloudy days make this Pok\u00e9mon sluggish.",
    "blue_description": "Each of Exeggutor\u2019s three heads is thinking different thoughts. The three don\u2019t seem to be very interested in one another.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103_f2.png"],
    "stats": {
        "height": "6' 07\"",
        "weight": "264.6 lbs",
        "gender": "M/F",
        "category": "coconut",
        "abilities": ["Chlorophyll"]
    },
    "attributes": {
        "types": ["Grass", "Psychic"],
        "weaknesses": ["Ghost", "Fire", "Flying", "Ice", "Dark", "Poison", "Bug"]
    },
    "evolutions": [102, 103],
    "base_stats": {
        "hp": 95,
        "attack": 95,
        "defense": 85,
        "special_attack": 125,
        "special_defense": 75,
        "speed": 55
    }
}, {
    "name": "Cubone",
    "number": 104,
    "red_description": "This Pok\u00e9mon wears the skull of its deceased mother. Sometimes Cubone\u2019s dreams make it cry, but each tear Cubone sheds makes it stronger.",
    "blue_description": "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png"],
    "stats": {
        "height": "1' 04\"",
        "weight": "14.3 lbs",
        "gender": "M/F",
        "category": "lonely",
        "abilities": ["Rock Head", "Lightning Rod"]
    },
    "attributes": {
        "types": ["Ground"],
        "weaknesses": ["Water", "Grass", "Ice"]
    },
    "evolutions": [104, 105],
    "base_stats": {
        "hp": 50,
        "attack": 50,
        "defense": 95,
        "special_attack": 40,
        "special_defense": 50,
        "speed": 35
    }
}, {
    "name": "Marowak",
    "number": 105,
    "red_description": "When this Pok\u00e9mon evolved, the skull of its mother fused to it. Marowak\u2019s temperament also turned vicious at the same time.",
    "blue_description": "This Pok\u00e9mon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/105_f2.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "99.2 lbs",
        "gender": "M/F",
        "category": "bone keeper",
        "abilities": ["Rock Head", "Lightning Rod"]
    },
    "attributes": {
        "types": ["Ground"],
        "weaknesses": ["Water", "Grass", "Ice"]
    },
    "evolutions": [104, 105],
    "base_stats": {
        "hp": 60,
        "attack": 80,
        "defense": 110,
        "special_attack": 50,
        "special_defense": 80,
        "speed": 45
    }
}, {
    "name": "Hitmonlee",
    "number": 106,
    "red_description": "The legs freely contract and stretch. The stretchy legs allow it to hit a distant foe with a rising kick.",
    "blue_description": "This amazing Pok\u00e9mon has an awesome sense of balance. It can kick in succession from any position.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png"],
    "stats": {
        "height": "4' 11\"",
        "weight": "109.8 lbs",
        "gender": "M",
        "category": "kicking",
        "abilities": ["Limber", "Reckless"]
    },
    "attributes": {
        "types": ["Fighting"],
        "weaknesses": ["Psychic", "Flying", "Fairy"]
    },
    "evolutions": [106],
    "base_stats": {
        "hp": 50,
        "attack": 120,
        "defense": 53,
        "special_attack": 35,
        "special_defense": 110,
        "speed": 87
    }
}, {
    "name": "Hitmonchan",
    "number": 107,
    "red_description": "Its punches slice the air. However, it seems to need a short break after fighting for three minutes.",
    "blue_description": "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png"],
    "stats": {
        "height": "4' 07\"",
        "weight": "110.7 lbs",
        "gender": "M",
        "category": "punching",
        "abilities": ["Keen Eye", "Iron Fist"]
    },
    "attributes": {
        "types": ["Fighting"],
        "weaknesses": ["Psychic", "Flying", "Fairy"]
    },
    "evolutions": [106],
    "base_stats": {
        "hp": 50,
        "attack": 105,
        "defense": 79,
        "special_attack": 35,
        "special_defense": 110,
        "speed": 76
    }
}, {
    "name": "Lickitung",
    "number": 108,
    "red_description": "Bug Pok\u00e9mon are Lickitung\u2019s main food source. This Pok\u00e9mon paralyzes its prey with a lick from its long tongue, then swallows the prey whole.",
    "blue_description": "If this Pok\u00e9mon\u2019s sticky saliva gets on you and you don\u2019t clean it off, an intense itch will set in. The itch won\u2019t go away, either.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png"],
    "stats": {
        "height": "3' 11\"",
        "weight": "144.4 lbs",
        "gender": "M/F",
        "category": "licking",
        "abilities": ["Oblivious", "Own Tempo"]
    },
    "attributes": {
        "types": ["Normal"],
        "weaknesses": ["Fighting"]
    },
    "evolutions": [108],
    "base_stats": {
        "hp": 90,
        "attack": 55,
        "defense": 75,
        "special_attack": 60,
        "special_defense": 75,
        "speed": 30
    }
}, {
    "name": "Koffing",
    "number": 109,
    "red_description": "It adores polluted air. Some claim that Koffing used to be more plentiful in the Galar region than they are now.",
    "blue_description": "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png"],
    "stats": {
        "height": "2' 00\"",
        "weight": "2.2 lbs",
        "gender": "M/F",
        "category": "poison gas",
        "abilities": ["Levitate", "Neutralizing Gas"]
    },
    "attributes": {
        "types": ["Poison"],
        "weaknesses": ["Psychic", "Ground"]
    },
    "evolutions": [109, 110],
    "base_stats": {
        "hp": 40,
        "attack": 65,
        "defense": 95,
        "special_attack": 60,
        "special_defense": 45,
        "speed": 35
    }
}, {
    "name": "Weezing",
    "number": 110,
    "red_description": "It can\u2019t suck in air quite as well as a Galarian Weezing, but the toxins it creates are more potent than those of its counterpart.",
    "blue_description": "It mixes gases between its two bodies. It\u2019s said that these Pok\u00e9mon were seen all over the Galar region back in the day.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/110_f2.png"],
    "stats": {
        "height": "3' 11\"",
        "weight": "20.9 lbs",
        "gender": "M/F",
        "category": "poison gas",
        "abilities": ["Levitate", "Neutralizing Gas"]
    },
    "attributes": {
        "types": ["Poison"],
        "weaknesses": ["Psychic", "Ground"]
    },
    "evolutions": [109, 110],
    "base_stats": {
        "hp": 65,
        "attack": 90,
        "defense": 120,
        "special_attack": 85,
        "special_defense": 70,
        "speed": 60
    }
}, {
    "name": "Rhyhorn",
    "number": 111,
    "red_description": "It can remember only one thing at a time. Once it starts rushing, it forgets why it started.",
    "blue_description": "Strong, but not too bright, this Pok\u00e9mon can shatter even a skyscraper with its charging tackles.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "253.5 lbs",
        "gender": "M/F",
        "category": "spikes",
        "abilities": ["Rock Head", "Lightning Rod"]
    },
    "attributes": {
        "types": ["Ground", "Rock"],
        "weaknesses": ["Steel", "Ice", "Water", "Fighting", "Grass", "Ground"]
    },
    "evolutions": [111, 112],
    "base_stats": {
        "hp": 80,
        "attack": 85,
        "defense": 95,
        "special_attack": 30,
        "special_defense": 30,
        "speed": 25
    }
}, {
    "name": "Rhydon",
    "number": 112,
    "red_description": "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees Fahrenheit.",
    "blue_description": "It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png"],
    "stats": {
        "height": "6' 03\"",
        "weight": "264.6 lbs",
        "gender": "M/F",
        "category": "drill",
        "abilities": ["Rock Head", "Lightning Rod"]
    },
    "attributes": {
        "types": ["Ground", "Rock"],
        "weaknesses": ["Steel", "Ice", "Water", "Fighting", "Grass", "Ground"]
    },
    "evolutions": [111, 112],
    "base_stats": {
        "hp": 105,
        "attack": 130,
        "defense": 120,
        "special_attack": 45,
        "special_defense": 45,
        "speed": 40
    }
}, {
    "name": "Chansey",
    "number": 113,
    "red_description": "This species was once very slow. To protect their eggs from other creatures, these Pok\u00e9mon became able to flee quickly.",
    "blue_description": "The egg Chansey carries is not only delicious but also packed with nutrition. It\u2019s used as a high-class cooking ingredient.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png"],
    "stats": {
        "height": "3' 07\"",
        "weight": "76.3 lbs",
        "gender": "F",
        "category": "egg",
        "abilities": ["Natural Cure", "Serene Grace"]
    },
    "attributes": {
        "types": ["Normal"],
        "weaknesses": ["Fighting"]
    },
    "evolutions": [113],
    "base_stats": {
        "hp": 250,
        "attack": 5,
        "defense": 5,
        "special_attack": 35,
        "special_defense": 105,
        "speed": 50
    }
}, {
    "name": "Tangela",
    "number": 114,
    "red_description": "The vines of a Tangela have a distinct scent. In some parts of Galar, Tangela vines are used as herbs.",
    "blue_description": "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pok\u00e9mon\u2019s true appearance remains a mystery.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "77.2 lbs",
        "gender": "M/F",
        "category": "vine",
        "abilities": ["Chlorophyll", "Leaf Guard"]
    },
    "attributes": {
        "types": ["Grass"],
        "weaknesses": ["Fire", "Flying", "Ice", "Poison", "Bug"]
    },
    "evolutions": [114],
    "base_stats": {
        "hp": 65,
        "attack": 55,
        "defense": 115,
        "special_attack": 100,
        "special_defense": 40,
        "speed": 60
    }
}, {
    "name": "Kangaskhan",
    "number": 115,
    "red_description": "There are records of a lost human child being raised by a childless Kangaskhan.",
    "blue_description": "Although it\u2019s carrying its baby in a pouch on its belly, Kangaskhan is swift on its feet. It intimidates its opponents with quick jabs.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/115_f2.png"],
    "stats": {
        "height": "7' 03\"",
        "weight": "176.4 lbs",
        "gender": "F",
        "category": "parent",
        "abilities": ["Early Bird", "Scrappy"]
    },
    "attributes": {
        "types": ["Normal"],
        "weaknesses": ["Fighting"]
    },
    "evolutions": [115],
    "base_stats": {
        "hp": 105,
        "attack": 95,
        "defense": 80,
        "special_attack": 40,
        "special_defense": 80,
        "speed": 90
    }
}, {
    "name": "Horsea",
    "number": 116,
    "red_description": "They swim with dance-like motions and cause whirlpools to form. Horsea compete to see which of them can generate the biggest whirlpool.",
    "blue_description": "Horsea makes its home in oceans with gentle currents. If this Pok\u00e9mon is under attack, it spits out pitch-black ink and escapes.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png"],
    "stats": {
        "height": "1' 04\"",
        "weight": "17.6 lbs",
        "gender": "M/F",
        "category": "dragon",
        "abilities": ["Swift Swim", "Sniper"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [116, 117],
    "base_stats": {
        "hp": 30,
        "attack": 40,
        "defense": 70,
        "special_attack": 70,
        "special_defense": 25,
        "speed": 60
    }
}, {
    "name": "Seadra",
    "number": 117,
    "red_description": "Seadra\u2019s mouth is slender, but its suction power is strong. In an instant, Seadra can suck in food that\u2019s larger than the opening of its mouth.",
    "blue_description": "It\u2019s the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png"],
    "stats": {
        "height": "3' 11\"",
        "weight": "55.1 lbs",
        "gender": "M/F",
        "category": "dragon",
        "abilities": ["Poison Point", "Sniper"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [116, 117],
    "base_stats": {
        "hp": 55,
        "attack": 65,
        "defense": 95,
        "special_attack": 95,
        "special_defense": 45,
        "speed": 85
    }
}, {
    "name": "Goldeen",
    "number": 118,
    "red_description": "Its dorsal and pectoral fins are strongly developed like muscles. It can swim at a speed of five knots.",
    "blue_description": "Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png"],
    "stats": {
        "height": "2' 00\"",
        "weight": "33.1 lbs",
        "gender": "M/F",
        "category": "goldfish",
        "abilities": ["Swift Swim", "Water Veil"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [118, 119],
    "base_stats": {
        "hp": 45,
        "attack": 67,
        "defense": 60,
        "special_attack": 35,
        "special_defense": 50,
        "speed": 63
    }
}, {
    "name": "Seaking",
    "number": 119,
    "red_description": "Using its horn, it bores holes in riverbed boulders, making nests to prevent its eggs from washing away.",
    "blue_description": "In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png"],
    "stats": {
        "height": "4' 03\"",
        "weight": "86.0 lbs",
        "gender": "M/F",
        "category": "goldfish",
        "abilities": ["Swift Swim", "Water Veil"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [118, 119],
    "base_stats": {
        "hp": 80,
        "attack": 92,
        "defense": 65,
        "special_attack": 65,
        "special_defense": 80,
        "speed": 68
    }
}, {
    "name": "Staryu",
    "number": 120,
    "red_description": "Fish Pok\u00e9mon nibble at it, but Staryu isn\u2019t bothered. Its body regenerates quickly, even if part of it is completely torn off.",
    "blue_description": "If you visit a beach at the end of summer, you\u2019ll be able to see groups of Staryu lighting up in a steady rhythm.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png"],
    "stats": {
        "height": "2' 07\"",
        "weight": "76.1 lbs",
        "gender": "Unknown",
        "category": "star shape",
        "abilities": ["Natural Cure", "Illuminate"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [120, 121],
    "base_stats": {
        "hp": 30,
        "attack": 45,
        "defense": 55,
        "special_attack": 70,
        "special_defense": 55,
        "speed": 85
    }
}, {
    "name": "Starmie",
    "number": 121,
    "red_description": "Starmie swims by spinning its body at high speed. As this Pok\u00e9mon cruises through the ocean, it absorbs tiny plankton.",
    "blue_description": "This Pok\u00e9mon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png"],
    "stats": {
        "height": "3' 07\"",
        "weight": "176.4 lbs",
        "gender": "Unknown",
        "category": "mysterious",
        "abilities": ["Natural Cure", "Illuminate"]
    },
    "attributes": {
        "types": ["Water", "Psychic"],
        "weaknesses": ["Ghost", "Dark", "Grass", "Electric", "Bug"]
    },
    "evolutions": [120, 121],
    "base_stats": {
        "hp": 60,
        "attack": 75,
        "defense": 85,
        "special_attack": 100,
        "special_defense": 85,
        "speed": 115
    }
}, {
    "name": "Mr. Mime",
    "number": 122,
    "red_description": "It\u2019s known for its top-notch pantomime skills. It protects itself from all sorts of attacks by emitting auras from its fingers to create walls.",
    "blue_description": "The broadness of its hands may be no coincidence\u2014many scientists believe its palms became enlarged specifically for pantomiming.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122_f2.png"],
    "stats": {
        "height": "4' 03\"",
        "weight": "120.2 lbs",
        "gender": "M/F",
        "category": "barrier",
        "abilities": ["Soundproof", "Filter"]
    },
    "attributes": {
        "types": ["Psychic", "Fairy"],
        "weaknesses": ["Ghost", "Steel", "Poison"]
    },
    "evolutions": [122],
    "base_stats": {
        "hp": 40,
        "attack": 45,
        "defense": 65,
        "special_attack": 100,
        "special_defense": 120,
        "speed": 90
    }
}, {
    "name": "Scyther",
    "number": 123,
    "red_description": "If you come across an area in a forest where a lot of the trees have been cut down, what you\u2019ve found is a Scyther\u2019s territory.",
    "blue_description": "As Scyther fights more and more battles, its scythes become sharper and sharper. With a single slice, Scyther can fell a massive tree.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png"],
    "stats": {
        "height": "4' 11\"",
        "weight": "123.5 lbs",
        "gender": "M/F",
        "category": "mantis",
        "abilities": ["Swarm", "Technician"]
    },
    "attributes": {
        "types": ["Bug", "Flying"],
        "weaknesses": ["Fire", "Flying", "Electric", "Ice", "Rock"]
    },
    "evolutions": [123],
    "base_stats": {
        "hp": 70,
        "attack": 110,
        "defense": 80,
        "special_attack": 55,
        "special_defense": 80,
        "speed": 105
    }
}, {
    "name": "Jynx",
    "number": 124,
    "red_description": "The Jynx of Galar often have beautiful and delicate voices. Some of these Pok\u00e9mon have even gathered a fan base.",
    "blue_description": "In certain parts of Galar, Jynx was once feared and worshiped as the Queen of Ice.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png"],
    "stats": {
        "height": "4' 07\"",
        "weight": "89.5 lbs",
        "gender": "F",
        "category": "human shape",
        "abilities": ["Oblivious", "Forewarn"]
    },
    "attributes": {
        "types": ["Ice", "Psychic"],
        "weaknesses": ["Steel", "Ghost", "Fire", "Dark", "Rock", "Bug"]
    },
    "evolutions": [124],
    "base_stats": {
        "hp": 65,
        "attack": 50,
        "defense": 35,
        "special_attack": 115,
        "special_defense": 95,
        "speed": 95
    }
}, {
    "name": "Electabuzz",
    "number": 125,
    "red_description": "With the coming of a storm, many of these Pok\u00e9mon will gather under tall trees and sit there waiting for lightning to strike.",
    "blue_description": "Many power plants keep Ground-type Pok\u00e9mon around as a defense against Electabuzz that come seeking electricity.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png"],
    "stats": {
        "height": "3' 07\"",
        "weight": "66.1 lbs",
        "gender": "M/F",
        "category": "electric",
        "abilities": ["Static"]
    },
    "attributes": {
        "types": ["Electric"],
        "weaknesses": ["Ground"]
    },
    "evolutions": [125],
    "base_stats": {
        "hp": 65,
        "attack": 83,
        "defense": 57,
        "special_attack": 95,
        "special_defense": 85,
        "speed": 105
    }
}, {
    "name": "Magmar",
    "number": 126,
    "red_description": "These Pok\u00e9mon\u2019s bodies are constantly burning. Magmar are feared as one of the causes behind fires.",
    "blue_description": "Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png"],
    "stats": {
        "height": "4' 03\"",
        "weight": "98.1 lbs",
        "gender": "M/F",
        "category": "spitfire",
        "abilities": ["Flame Body"]
    },
    "attributes": {
        "types": ["Fire"],
        "weaknesses": ["Water", "Ground", "Rock"]
    },
    "evolutions": [126],
    "base_stats": {
        "hp": 65,
        "attack": 95,
        "defense": 57,
        "special_attack": 100,
        "special_defense": 85,
        "speed": 93
    }
}, {
    "name": "Pinsir",
    "number": 127,
    "red_description": "This Pok\u00e9mon clamps its pincers down on its prey and then either splits the prey in half or flings it away.",
    "blue_description": "These Pok\u00e9mon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/127_f2.png"],
    "stats": {
        "height": "4' 11\"",
        "weight": "121.3 lbs",
        "gender": "M/F",
        "category": "stag beetle",
        "abilities": ["Hyper Cutter", "Mold Breaker"]
    },
    "attributes": {
        "types": ["Bug"],
        "weaknesses": ["Fire", "Flying", "Rock"]
    },
    "evolutions": [127],
    "base_stats": {
        "hp": 65,
        "attack": 125,
        "defense": 100,
        "special_attack": 55,
        "special_defense": 70,
        "speed": 85
    }
}, {
    "name": "Tauros",
    "number": 128,
    "red_description": "The Tauros of the Galar region are volatile in nature, and they won\u2019t allow people to ride on their backs.",
    "blue_description": "When Tauros begins whipping itself with its tails, it\u2019s a warning that the Pok\u00e9mon is about to charge with astounding speed.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png"],
    "stats": {
        "height": "4' 07\"",
        "weight": "194.9 lbs",
        "gender": "M",
        "category": "wild bull",
        "abilities": ["Intimidate", "Anger Point"]
    },
    "attributes": {
        "types": ["Normal"],
        "weaknesses": ["Fighting"]
    },
    "evolutions": [128],
    "base_stats": {
        "hp": 75,
        "attack": 100,
        "defense": 95,
        "special_attack": 40,
        "special_defense": 70,
        "speed": 110
    }
}, {
    "name": "Magikarp",
    "number": 129,
    "red_description": "This weak and pathetic Pok\u00e9mon gets easily pushed along rivers when there are strong currents.",
    "blue_description": "It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pok\u00e9mon in the world.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png"],
    "stats": {
        "height": "2' 11\"",
        "weight": "22.0 lbs",
        "gender": "M/F",
        "category": "fish",
        "abilities": ["Swift Swim"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [129, 130],
    "base_stats": {
        "hp": 20,
        "attack": 10,
        "defense": 55,
        "special_attack": 15,
        "special_defense": 20,
        "speed": 80
    }
}, {
    "name": "Gyarados",
    "number": 130,
    "red_description": "Once it begins to rampage, a Gyarados will burn everything down, even in a harsh storm.",
    "blue_description": "It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally incinerates all targets.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130_f2.png"],
    "stats": {
        "height": "21' 04\"",
        "weight": "518.1 lbs",
        "gender": "M/F",
        "category": "atrocious",
        "abilities": ["Intimidate"]
    },
    "attributes": {
        "types": ["Water", "Flying"],
        "weaknesses": ["Electric", "Rock"]
    },
    "evolutions": [129, 130],
    "base_stats": {
        "hp": 95,
        "attack": 125,
        "defense": 79,
        "special_attack": 60,
        "special_defense": 100,
        "speed": 81
    }
}, {
    "name": "Lapras",
    "number": 131,
    "red_description": "Crossing icy seas is no issue for this cold-resistant Pok\u00e9mon. Its smooth skin is a little cool to the touch.",
    "blue_description": "A smart and kindhearted Pok\u00e9mon, it glides across the surface of the sea while its beautiful song echoes around it.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131_f2.png"],
    "stats": {
        "height": "8' 02\"",
        "weight": "485.0 lbs",
        "gender": "M/F",
        "category": "transport",
        "abilities": ["Water Absorb", "Shell Armor"]
    },
    "attributes": {
        "types": ["Water", "Ice"],
        "weaknesses": ["Grass", "Electric", "Fighting", "Rock"]
    },
    "evolutions": [131],
    "base_stats": {
        "hp": 130,
        "attack": 85,
        "defense": 80,
        "special_attack": 85,
        "special_defense": 95,
        "speed": 60
    }
}, {
    "name": "Ditto",
    "number": 132,
    "red_description": "When it encounters another Ditto, it will move faster than normal to duplicate that opponent exactly.",
    "blue_description": "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png"],
    "stats": {
        "height": "1' 00\"",
        "weight": "8.8 lbs",
        "gender": "Unknown",
        "category": "transform",
        "abilities": ["Limber"]
    },
    "attributes": {
        "types": ["Normal"],
        "weaknesses": ["Fighting"]
    },
    "evolutions": [132],
    "base_stats": {
        "hp": 48,
        "attack": 48,
        "defense": 48,
        "special_attack": 48,
        "special_defense": 48,
        "speed": 48
    }
}, {
    "name": "Eevee",
    "number": 133,
    "red_description": "Thanks to its unstable genetic makeup, this special Pok\u00e9mon conceals many different possible evolutions.",
    "blue_description": "It has the ability to alter the composition of its body to suit its surrounding environment.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133_f2.png"],
    "stats": {
        "height": "1' 00\"",
        "weight": "14.3 lbs",
        "gender": "M/F",
        "category": "evolution",
        "abilities": ["Run Away", "Adaptability"]
    },
    "attributes": {
        "types": ["Normal"],
        "weaknesses": ["Fighting"]
    },
    "evolutions": [133, 134],
    "base_stats": {
        "hp": 55,
        "attack": 55,
        "defense": 50,
        "special_attack": 45,
        "special_defense": 65,
        "speed": 55
    }
}, {
    "name": "Vaporeon",
    "number": 134,
    "red_description": "Its body\u2019s cellular structure is similar to the molecular composition of water. It can melt invisibly in water.",
    "blue_description": "When Vaporeon\u2019s fins begin to vibrate, it is a sign that rain will come within a few hours.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "63.9 lbs",
        "gender": "M/F",
        "category": "bubble jet",
        "abilities": ["Water Absorb"]
    },
    "attributes": {
        "types": ["Water"],
        "weaknesses": ["Grass", "Electric"]
    },
    "evolutions": [133, 134],
    "base_stats": {
        "hp": 130,
        "attack": 65,
        "defense": 60,
        "special_attack": 110,
        "special_defense": 95,
        "speed": 65
    }
}, {
    "name": "Jolteon",
    "number": 135,
    "red_description": "It accumulates negative ions in the atmosphere to blast out 10,000-volt lightning bolts.",
    "blue_description": "If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png"],
    "stats": {
        "height": "2' 07\"",
        "weight": "54.0 lbs",
        "gender": "M/F",
        "category": "lightning",
        "abilities": ["Volt Absorb"]
    },
    "attributes": {
        "types": ["Electric"],
        "weaknesses": ["Ground"]
    },
    "evolutions": [133, 134],
    "base_stats": {
        "hp": 65,
        "attack": 65,
        "defense": 60,
        "special_attack": 110,
        "special_defense": 95,
        "speed": 130
    }
}, {
    "name": "Flareon",
    "number": 136,
    "red_description": "It stores some of the air it inhales in its internal flame pouch, which heats it to over 3,000 degrees Fahrenheit.",
    "blue_description": "Once it has stored up enough heat, this Pok\u00e9mon\u2019s body temperature can reach up to 1,700 degrees Fahrenheit.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png"],
    "stats": {
        "height": "2' 11\"",
        "weight": "55.1 lbs",
        "gender": "M/F",
        "category": "flame",
        "abilities": ["Flash Fire"]
    },
    "attributes": {
        "types": ["Fire"],
        "weaknesses": ["Water", "Ground", "Rock"]
    },
    "evolutions": [133, 134],
    "base_stats": {
        "hp": 65,
        "attack": 130,
        "defense": 60,
        "special_attack": 95,
        "special_defense": 110,
        "speed": 65
    }
}, {
    "name": "Porygon",
    "number": 137,
    "red_description": "In recent years, this species has been very helpful in cyberspace. These Pok\u00e9mon will go around checking to make sure no suspicious data exists.",
    "blue_description": "State-of-the-art technology was used to create Porygon. It was the first artificial Pok\u00e9mon to be created via computer programming.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png"],
    "stats": {
        "height": "2' 07\"",
        "weight": "80.5 lbs",
        "gender": "Unknown",
        "category": "virtual",
        "abilities": ["Trace", "Download"]
    },
    "attributes": {
        "types": ["Normal"],
        "weaknesses": ["Fighting"]
    },
    "evolutions": [137],
    "base_stats": {
        "hp": 65,
        "attack": 60,
        "defense": 70,
        "special_attack": 85,
        "special_defense": 75,
        "speed": 40
    }
}, {
    "name": "Omanyte",
    "number": 138,
    "red_description": "This Pok\u00e9mon is a member of an ancient, extinct species. Omanyte paddles through water with its 10 tentacles, looking like it\u2019s just drifting along.",
    "blue_description": "Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png"],
    "stats": {
        "height": "1' 04\"",
        "weight": "16.5 lbs",
        "gender": "M/F",
        "category": "spiral",
        "abilities": ["Shell Armor", "Swift Swim"]
    },
    "attributes": {
        "types": ["Rock", "Water"],
        "weaknesses": ["Grass", "Electric", "Fighting", "Ground"]
    },
    "evolutions": [138, 139],
    "base_stats": {
        "hp": 35,
        "attack": 40,
        "defense": 100,
        "special_attack": 90,
        "special_defense": 55,
        "speed": 35
    }
}, {
    "name": "Omastar",
    "number": 139,
    "red_description": "Omastar\u2019s sharp fangs could crush rock, but the Pok\u00e9mon can attack only the prey that come within reach of its tentacles.",
    "blue_description": "Weighed down by a large and heavy shell, Omastar couldn\u2019t move very fast. Some say it went extinct because it was unable to catch food.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png"],
    "stats": {
        "height": "3' 03\"",
        "weight": "77.2 lbs",
        "gender": "M/F",
        "category": "spiral",
        "abilities": ["Shell Armor", "Swift Swim"]
    },
    "attributes": {
        "types": ["Rock", "Water"],
        "weaknesses": ["Grass", "Electric", "Fighting", "Ground"]
    },
    "evolutions": [138, 139],
    "base_stats": {
        "hp": 70,
        "attack": 60,
        "defense": 125,
        "special_attack": 115,
        "special_defense": 70,
        "speed": 55
    }
}, {
    "name": "Kabuto",
    "number": 140,
    "red_description": "While some say this species has gone extinct, Kabuto sightings are apparently fairly common in some places.",
    "blue_description": "This species is almost entirely extinct. Kabuto molt every three days, making their shells harder and harder.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png"],
    "stats": {
        "height": "1' 08\"",
        "weight": "25.4 lbs",
        "gender": "M/F",
        "category": "shellfish",
        "abilities": ["Swift Swim", "Battle Armor"]
    },
    "attributes": {
        "types": ["Rock", "Water"],
        "weaknesses": ["Grass", "Electric", "Fighting", "Ground"]
    },
    "evolutions": [140, 141],
    "base_stats": {
        "hp": 30,
        "attack": 80,
        "defense": 90,
        "special_attack": 55,
        "special_defense": 45,
        "speed": 55
    }
}, {
    "name": "Kabutops",
    "number": 141,
    "red_description": "The cause behind the extinction of this species is unknown. Kabutops were aggressive Pok\u00e9mon that inhabited warm seas.",
    "blue_description": "Kabutops slices its prey apart and sucks out the fluids. The discarded body parts become food for other Pok\u00e9mon.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png"],
    "stats": {
        "height": "4' 03\"",
        "weight": "89.3 lbs",
        "gender": "M/F",
        "category": "shellfish",
        "abilities": ["Swift Swim", "Battle Armor"]
    },
    "attributes": {
        "types": ["Rock", "Water"],
        "weaknesses": ["Grass", "Electric", "Fighting", "Ground"]
    },
    "evolutions": [140, 141],
    "base_stats": {
        "hp": 60,
        "attack": 115,
        "defense": 105,
        "special_attack": 65,
        "special_defense": 70,
        "speed": 80
    }
}, {
    "name": "Aerodactyl",
    "number": 142,
    "red_description": "Aerodactyl\u2019s sawlike fangs can shred skin to tatters\u2014even the skin of Steel-type Pok\u00e9mon.",
    "blue_description": "This is a ferocious Pok\u00e9mon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142_f2.png"],
    "stats": {
        "height": "5' 11\"",
        "weight": "130.1 lbs",
        "gender": "M/F",
        "category": "fossil",
        "abilities": ["Rock Head", "Pressure"]
    },
    "attributes": {
        "types": ["Rock", "Flying"],
        "weaknesses": ["Steel", "Water", "Electric", "Ice", "Rock"]
    },
    "evolutions": [142],
    "base_stats": {
        "hp": 80,
        "attack": 105,
        "defense": 65,
        "special_attack": 60,
        "special_defense": 75,
        "speed": 130
    }
}, {
    "name": "Snorlax",
    "number": 143,
    "red_description": "This Pok\u00e9mon\u2019s stomach is so strong, even eating moldy or rotten food will not affect it.",
    "blue_description": "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143_f2.png"],
    "stats": {
        "height": "6' 11\"",
        "weight": "1014.1 lbs",
        "gender": "M/F",
        "category": "sleeping",
        "abilities": ["Thick Fat", "Immunity"]
    },
    "attributes": {
        "types": ["Normal"],
        "weaknesses": ["Fighting"]
    },
    "evolutions": [143],
    "base_stats": {
        "hp": 160,
        "attack": 110,
        "defense": 65,
        "special_attack": 65,
        "special_defense": 110,
        "speed": 30
    }
}, {
    "name": "Articuno",
    "number": 144,
    "red_description": "This Pok\u00e9mon can control ice at will. Articuno is said to live in snowy mountains riddled with permafrost.",
    "blue_description": "It\u2019s said that this Pok\u00e9mon\u2019s beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144_f2.png"],
    "stats": {
        "height": "5' 07\"",
        "weight": "122.1 lbs",
        "gender": "Unknown",
        "category": "freeze",
        "abilities": ["Pressure"]
    },
    "attributes": {
        "types": ["Ice", "Flying"],
        "weaknesses": ["Steel", "Fire", "Electric", "Rock"]
    },
    "evolutions": [144],
    "base_stats": {
        "hp": 90,
        "attack": 85,
        "defense": 100,
        "special_attack": 95,
        "special_defense": 125,
        "speed": 85
    }
}, {
    "name": "Zapdos",
    "number": 145,
    "red_description": "Zapdos is a legendary bird Pok\u00e9mon. It\u2019s said that when Zapdos rubs its feathers together, lightning will fall immediately after.",
    "blue_description": "This Pok\u00e9mon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145_f2.png"],
    "stats": {
        "height": "5' 03\"",
        "weight": "116.0 lbs",
        "gender": "Unknown",
        "category": "electric",
        "abilities": ["Pressure"]
    },
    "attributes": {
        "types": ["Electric", "Flying"],
        "weaknesses": ["Ice", "Rock"]
    },
    "evolutions": [145],
    "base_stats": {
        "hp": 90,
        "attack": 90,
        "defense": 85,
        "special_attack": 125,
        "special_defense": 90,
        "speed": 100
    }
}, {
    "name": "Moltres",
    "number": 146,
    "red_description": "There are stories of this Pok\u00e9mon using its radiant, flame-cloaked wings to light up paths for those lost in the mountains.",
    "blue_description": "It\u2019s one of the legendary bird Pok\u00e9mon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146_f2.png"],
    "stats": {
        "height": "6' 07\"",
        "weight": "132.3 lbs",
        "gender": "Unknown",
        "category": "flame",
        "abilities": ["Pressure"]
    },
    "attributes": {
        "types": ["Fire", "Flying"],
        "weaknesses": ["Water", "Electric", "Rock"]
    },
    "evolutions": [146],
    "base_stats": {
        "hp": 90,
        "attack": 100,
        "defense": 90,
        "special_attack": 125,
        "special_defense": 85,
        "speed": 90
    }
}, {
    "name": "Dratini",
    "number": 147,
    "red_description": "This Pok\u00e9mon was long considered to be no more than a myth. The small lump on a Dratini\u2019s forehead is actually a horn that\u2019s still coming in.",
    "blue_description": "Dratini dwells near bodies of rapidly flowing water, such as the plunge pools of waterfalls. As it grows, Dratini will shed its skin many times.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png"],
    "stats": {
        "height": "5' 11\"",
        "weight": "7.3 lbs",
        "gender": "M/F",
        "category": "dragon",
        "abilities": ["Shed Skin"]
    },
    "attributes": {
        "types": ["Dragon"],
        "weaknesses": ["Fairy", "Ice", "Dragon"]
    },
    "evolutions": [147, 148, 149],
    "base_stats": {
        "hp": 41,
        "attack": 64,
        "defense": 45,
        "special_attack": 50,
        "special_defense": 50,
        "speed": 50
    }
}, {
    "name": "Dragonair",
    "number": 148,
    "red_description": "This Pok\u00e9mon gathers power in the orbs on its tail and controls the weather. When enshrouded by an aura, Dragonair has a mystical appearance.",
    "blue_description": "This Pok\u00e9mon lives in pristine oceans and lakes. It can control the weather, and it uses this power to fly into the sky, riding on the wind.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png"],
    "stats": {
        "height": "13' 01\"",
        "weight": "36.4 lbs",
        "gender": "M/F",
        "category": "dragon",
        "abilities": ["Shed Skin"]
    },
    "attributes": {
        "types": ["Dragon"],
        "weaknesses": ["Fairy", "Ice", "Dragon"]
    },
    "evolutions": [147, 148, 149],
    "base_stats": {
        "hp": 61,
        "attack": 84,
        "defense": 65,
        "special_attack": 70,
        "special_defense": 70,
        "speed": 70
    }
}, {
    "name": "Dragonite",
    "number": 149,
    "red_description": "This Pok\u00e9mon is known as the Sea Incarnate. Figureheads that resemble Dragonite decorate the bows of many ships.",
    "blue_description": "It\u2019s a kindhearted Pok\u00e9mon. If it spots a drowning person or Pok\u00e9mon, Dragonite simply must help them.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"],
    "stats": {
        "height": "7' 03\"",
        "weight": "463.0 lbs",
        "gender": "M/F",
        "category": "dragon",
        "abilities": ["Inner Focus"]
    },
    "attributes": {
        "types": ["Dragon", "Flying"],
        "weaknesses": ["Fairy", "Dragon", "Ice", "Rock"]
    },
    "evolutions": [147, 148, 149],
    "base_stats": {
        "hp": 91,
        "attack": 134,
        "defense": 95,
        "special_attack": 100,
        "special_defense": 100,
        "speed": 80
    }
}, {
    "name": "Mewtwo",
    "number": 150,
    "red_description": "Its DNA is almost the same as Mew\u2019s. However, its size and disposition are vastly different.",
    "blue_description": "Its DNA is almost the same as Mew\u2019s. However, its size and disposition are vastly different.",
    "images": ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150_f2.png", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150_f3.png"],
    "stats": {
        "height": "6' 07\"",
        "weight": "269.0 lbs",
        "gender": "Unknown",
        "category": "genetic",
        "abilities": ["Pressure"]
    },
    "attributes": {
        "types": ["Psychic"],
        "weaknesses": ["Ghost", "Dark", "Bug"]
    },
    "evolutions": [150],
    "base_stats": {
        "hp": 106,
        "attack": 110,
        "defense": 90,
        "special_attack": 154,
        "special_defense": 90,
        "speed": 130
    }
}];

const POKEMON_BY_ID = {};
POKEMON.forEach((pokemon) => {
    POKEMON_BY_ID[pokemon.number] = pokemon
});

module.exports =  {
    POKEMON,
    POKEMON_BY_ID,
};