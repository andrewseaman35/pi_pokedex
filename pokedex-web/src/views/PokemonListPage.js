import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import { MAX_PAGE, PAGE_SIZE } from "../js/constants";
import { POKEMON } from "../js/pokemon";
import PokemonList from "../components/PokemonList";

import '../css/pokemon-list.css';


const PokemonListPage = () => {
    const history = useHistory();
    const path = useLocation()['pathname'];
    const pageNumber = Number(path.split("/")[2]);
    if (pageNumber < 0) {
        history.push("/list/0/0");
    } else if (pageNumber > MAX_PAGE) {
        history.push(`/list/${MAX_PAGE}/0`);
    }
    const activeIndex = Number(path.split("/")[3]);
    if (activeIndex < 0) {
        history.push(`/list/${pageNumber}/0`);
    } else if (activeIndex > (PAGE_SIZE - 1)) {
        history.push(`/list/${pageNumber}/${PAGE_SIZE - 1}`);
    }

    const lowIndex = pageNumber * PAGE_SIZE;
    const pokemonBatch = POKEMON.slice(lowIndex, lowIndex + PAGE_SIZE);
    window.pi_pokedex.keyboardManager.onArrowLeft(() => {
        if (pageNumber > 0) {
            history.push(`/list/${pageNumber - 1}/${activeIndex}`);
        }
    });

    window.pi_pokedex.keyboardManager.onArrowRight(() => {
        if (pageNumber < MAX_PAGE) {
            history.push(`/list/${pageNumber + 1}/${activeIndex}`);
        }
    });

    window.pi_pokedex.keyboardManager.onArrowDown(() => {
        if (activeIndex < PAGE_SIZE - 1) {
            history.push(`/list/${pageNumber}/${activeIndex + 1}`);
        } else if (activeIndex === PAGE_SIZE - 1 && pageNumber < MAX_PAGE) {
            history.push(`/list/${pageNumber + 1}/0`);
        }
    });

    window.pi_pokedex.keyboardManager.onArrowUp(() => {
        if (activeIndex === 0 && pageNumber > 0) {
            history.push(`/list/${pageNumber - 1}/${PAGE_SIZE - 1}`);
        } else {
            history.push(`/list/${pageNumber}/${activeIndex - 1}`);
        }
    });

    window.pi_pokedex.keyboardManager.onEnter(() => {
        window.pi_pokedex.keyboardManager.clear();
        history.push(`/pokemon/${(pageNumber * PAGE_SIZE) + activeIndex + 1}`);
    });

    return (
        <div className="application-container">
            <PokemonList items={pokemonBatch} activeIndex={activeIndex} />
        </div>
    )
}

export default PokemonListPage;