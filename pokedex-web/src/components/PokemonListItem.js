import React from "react";
import {
  Link,
} from "react-router-dom";

import { toReadableNumber } from "../js/utils";
import { STATES } from "../js/constants";


const PokemonListItem = ({pokemon, state}) => {
    const stateClass = state === STATES.ACTIVE ? 'active' : '';
    return (
        <Link to={`/pokemon/${pokemon.number}`}>
            <div className={`pokemon-item ${stateClass}`}>
                <div>{toReadableNumber(pokemon.number)} <b>{pokemon.name}</b></div>
            </div>
        </Link>
    )
}

export default PokemonListItem;