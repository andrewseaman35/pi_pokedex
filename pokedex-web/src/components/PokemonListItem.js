import React from "react";
import {
  Link,
} from "react-router-dom";

import {
    toReadableNumber
} from "../js/utils";


const PokemonListItem = ({pokemon}) => (
    <Link to={`/pokemon/${pokemon.number}`}>
        <div className="pokemon-item">
            <div>{toReadableNumber(pokemon.number)} <b>{pokemon.name}</b></div>
        </div>
    </Link>
);

export default PokemonListItem;