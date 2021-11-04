import React, { useEffect, useState } from "react";

import { POKEMON_BY_ID } from "../js/pokemon";
import TypeBadge from "../components/TypeBadge";
import PokemonImage from "../components/PokemonImage";
import PokemonEvolutionBar from "../components/PokemonEvolutionBar";
import PokemonStatsTable from "../components/PokemonStatsTable";

import {
    toReadableNumber
} from "../js/utils";

import '../css/pokemon-info.css';

const STAT_KEYS = ['category', 'abilities', 'height', 'weight', 'gender'];
const BASE_STAT_KEYS = ['attack', 'defense', 'hp', 'special_attack', 'special_defense', 'speed'];


const PokemonInfoPage = ({id}) => {
    const [pokemonNumber, setPokemonNumber] = useState(id);

    useEffect(() => {
        console.log(id)
        setPokemonNumber(id);
      }, [id]);
    const pokemon = POKEMON_BY_ID[pokemonNumber];

    console.log(pokemon);
    console.log(pokemon.evolutions);
    return (
        <div className="application-container">
            <div className="pokemon-info">
                <div className="pokemon-info-header">
                    <div className="header-left">
                        <div className="info-number">{toReadableNumber(pokemon.number)}</div>
                        <div className="info-name">{pokemon.name}</div>
                    </div>
                    <TypeBadge type={pokemon.attributes.types[0].toLowerCase()}></TypeBadge>
                </div>
                <div className="pokemon-info-body">
                    <PokemonImage pokemonNumber={pokemon.number}></PokemonImage>
                    <PokemonStatsTable stats={pokemon.stats} keys={STAT_KEYS} extraClasses="main-stats"></PokemonStatsTable>
                    <PokemonStatsTable stats={pokemon.base_stats} keys={BASE_STAT_KEYS}></PokemonStatsTable>
                </div>
                <div className="pokemon-info-description">
                    {pokemon.red_description}
                </div>
                <PokemonEvolutionBar pokemon={pokemon} />
            </div>
        </div>
    )
}

export default PokemonInfoPage;