import React from "react";

const PokemonImage = ({pokemonNumber}) => (
    <img
        className="pokemon-image" 
        src={`${process.env.PUBLIC_URL}/img/pokemon/${pokemonNumber}.png`}
    ></img>
);

export default PokemonImage;