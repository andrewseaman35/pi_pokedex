import React from "react";
import { useLocation } from "react-router-dom";

import { POKEMON } from "../js/pokemon";
import PokemonList from "../components/PokemonList";

import '../css/pokemon-list.css';

const PAGE_SIZE = 10;

const PokemonListPage = () => {
    const pageNumber = useLocation()['pathname'].split("/")[2];
    const lowIndex = pageNumber * PAGE_SIZE;
    const pokemonBatch = POKEMON.slice(lowIndex, lowIndex + PAGE_SIZE);
    return (
        <div className="application-container">
            <PokemonList items={pokemonBatch} />
        </div>
    )
}

export default PokemonListPage;