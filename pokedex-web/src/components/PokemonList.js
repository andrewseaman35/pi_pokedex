import React from "react";
import { STATES } from "../js/constants";

import PokemonListItem from './PokemonListItem';


const PokemonList = ({items, activeIndex}) => {
    console.log(window)
    return (
        <div className="pokemon-list">
            {
                items.map((item, i) => (
                    <PokemonListItem 
                        key={item.number}
                        pokemon={item}
                        state={i === activeIndex ? STATES.ACTIVE : null}
                    />
                ))
            }
        </div>
    )
}

export default PokemonList;