import React from "react";

const PokemonImage = ({pokemonNumber}) => (
    <img
        className="pokemon-image" 
        src={`${process.env.PUBLIC_URL}/img/pokemon/${pokemonNumber}.png`}
        alt=""
    ></img>
);

export default PokemonImage;