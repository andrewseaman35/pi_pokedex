import React from "react";

import { POKEMON } from "../js/pokemon";
import PokemonList from "../components/PokemonList";

import '../css/pokemon-list.css';

const PokemonListPage = ({page}) => {
    // const [page, setPage] = useState(0);

    return (
        <div className="application-container">
            <PokemonList items={POKEMON} />
            page: {page}
        </div>
    )
}

export default PokemonListPage;