import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import { POKEMON_BY_ID } from "../js/pokemon";
import TypeBadge from "../components/TypeBadge";
import PokemonImage from "../components/PokemonImage";
import PokemonEvolutionBar from "../components/PokemonEvolutionBar";
import PokemonStatsTable from "../components/PokemonStatsTable";

import {
    toReadableNumber
} from "../js/utils";

import '../css/pokemon-info.css';
import { PAGE_SIZE } from "../js/constants";

const STAT_KEYS = ['category', 'abilities', 'height', 'weight', 'gender'];
const BASE_STAT_KEYS = ['attack', 'defense', 'hp', 'special_attack', 'special_defense', 'speed'];


const PokemonInfoPage = () => {
    const history = useHistory();
    const pokemonNumber = Number(useLocation()['pathname'].split("/")[2]);
    const activeEvolutionIndexStr = useLocation()['pathname'].split("/")[3];
    const activeEvolutionIndex = Number(activeEvolutionIndexStr);
    const pokemon = POKEMON_BY_ID[pokemonNumber];

    const validEvolutionIndexes = new Set([...Array(pokemon.evolutions.length).keys()]);
    const selectedPokemonIndex = pokemon.evolutions.indexOf(pokemonNumber);

    // TODO: eevee....
    if (activeEvolutionIndexStr === '' || !validEvolutionIndexes.has(activeEvolutionIndex)) {
        history.push(`/pokemon/${pokemonNumber}/${selectedPokemonIndex > 0 ? selectedPokemonIndex : 0}`);
    }

    window.pi_pokedex.keyboardManager.onBack(() => {
        const pageNumber = Math.floor(pokemon.number / PAGE_SIZE);
        const activeIndex = (pokemon.number % PAGE_SIZE) - 1;
        window.pi_pokedex.keyboardManager.clear();
        history.push(`/list/${pageNumber}/${activeIndex}`);
    });

    window.pi_pokedex.keyboardManager.onEnter(() => {
        const selectedPokemonNumber = pokemon.evolutions[activeEvolutionIndex];
        history.push(`/pokemon/${selectedPokemonNumber}/${activeEvolutionIndex}`);
    });

    window.pi_pokedex.keyboardManager.onArrowRight(() => {
        if (activeEvolutionIndex < (pokemon.evolutions.length - 1)) {
            history.push(`/pokemon/${pokemonNumber}/${activeEvolutionIndex + 1}`)
        }
    });

    window.pi_pokedex.keyboardManager.onArrowLeft(() => {
        if (activeEvolutionIndex > 0) {
            history.push(`/pokemon/${pokemonNumber}/${activeEvolutionIndex - 1}`)
        }
    });

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
                <PokemonEvolutionBar pokemon={pokemon} activeIndex={activeEvolutionIndex} />
            </div>
        </div>
    )
}

export default PokemonInfoPage;