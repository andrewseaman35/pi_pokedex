import React from "react";
import {
  Link,
} from "react-router-dom";

import { POKEMON_BY_ID  } from "../js/pokemon";


const PokemonEvolutionBar = ({pokemon, activeIndex}) => (
    <div className="pokemon-info-evolution">
        {
            pokemon.evolutions.length > 1 ? (
                pokemon.evolutions.map((pokemonNumber, i) => (
                    <React.Fragment key={i}>
                        <React.Fragment>
                            {
                                pokemonNumber === pokemon.number ? (
                                    <div className={`evolution-selected ${i === activeIndex ? 'active' : ''}`}>
                                        {POKEMON_BY_ID[pokemonNumber].name}
                                    </div>
                                ) : (
                                    <Link to={`/pokemon/${pokemonNumber}`}>
                                        <div className={`evolution ${i === activeIndex ? 'active' : ''}`}>
                                            {POKEMON_BY_ID[pokemonNumber].name}
                                        </div>
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
            ) : (
                <div className="no-evolutions">
                    No evolutions
                </div>
            )
        }
    </div>
);

export default PokemonEvolutionBar;