import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import { POKEMON } from "../js/pokemon";
import PokemonList from "../components/PokemonList";

import '../css/pokemon-list.css';

const PAGE_SIZE = 10;
const MAX_PAGE = 14;

const PokemonListPage = () => {
    const history = useHistory();
    const pageNumber = Number(useLocation()['pathname'].split("/")[2]);
    if (pageNumber < 0) {
        history.push("/list/0");
    } else if (pageNumber > MAX_PAGE) {
        history.push(`/list/${MAX_PAGE}`);
    }
    const lowIndex = pageNumber * PAGE_SIZE;
    const pokemonBatch = POKEMON.slice(lowIndex, lowIndex + PAGE_SIZE);

    window.pi_pokedex.keyboardManager.onArrowLeft(() => {
        if (pageNumber > 0) {
            history.push(`/list/${pageNumber - 1}`);
        }
    });

    window.pi_pokedex.keyboardManager.onArrowRight(() => {
        if (pageNumber < MAX_PAGE) {
            history.push(`/list/${pageNumber + 1}`);
        }
    });

    return (
        <div className="application-container">
            <PokemonList items={pokemonBatch} />
        </div>
    )
}

export default PokemonListPage;