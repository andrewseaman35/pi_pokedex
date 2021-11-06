import React from "react";

import PokemonListItem from './PokemonListItem';


const PokemonList = ({items}) => {
    console.log(window)
    return (
        <div className="pokemon-list">
            {
                items.map((item) => (
                    <PokemonListItem 
                        key={item.number}
                        pokemon={item}
                    />
                ))
            }
        </div>
    )
}

export default PokemonList;