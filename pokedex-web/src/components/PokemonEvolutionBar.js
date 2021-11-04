import React from "react";
import {
  Link,
} from "react-router-dom";

import { POKEMON_BY_ID  } from "../js/pokemon";


const PokemonEvolutionBar = ({pokemon}) => (
    <div className="pokemon-info-evolution">
        {
            pokemon.evolutions.map((pokemonNumber, i) => (
                <React.Fragment>
                    <React.Fragment>
                        {
                            pokemonNumber === pokemon.number ? (
                                <div className='evolution-selected'>{POKEMON_BY_ID[pokemonNumber].name}</div>
                            ) : (
                                <Link to={`/pokemon?id=${pokemonNumber}`}>
                                    <div className='evolution'>{POKEMON_BY_ID[pokemonNumber].name}</div>
                                </Link>
                            )
                        }
                    </React.Fragment>
                    {
                        i < pokemon.evolutions.length - 1 ? (
                            <div><b>{">"}</b></div>
                        ) : null
                    }
                </React.Fragment>
            ))
        }
    </div>
);

export default PokemonEvolutionBar;