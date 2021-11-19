import React from "react";
import { Redirect, useLocation, useHistory } from "react-router-dom";

import '../css/pokemon-list.css';


const ListPage = ({ListComponent, items, pageSize}) => {
    console.log(items)
    const history = useHistory();
    const path = useLocation()['pathname'];
    const pageNumber = Number(path.split("/")[2]);
    const maxPage = (items.length / pageSize) - 1;

    if (pageNumber < 0) {
        return <Redirect to="/list/0/0" />
    } else if (pageNumber > maxPage) {
        return <Redirect to={`/list/${maxPage}/0`} />
    }
    const activeIndex = Number(path.split("/")[3]);
    if (activeIndex < 0) {
        return <Redirect to={`/list/${pageNumber}/0`} />
    } else if (activeIndex > (pageSize - 1)) {
        return <Redirect to={`/list/${pageNumber}/${pageSize - 1}`} />
    }

    const lowIndex = pageNumber * pageSize;
    const pokemonBatch = items.slice(lowIndex, lowIndex + pageSize);
    window.pi_pokedex.keyboardManager.onArrowLeft(() => {
        if (pageNumber > 0) {
            history.push(`/list/${pageNumber - 1}/${activeIndex}`);
        }
    });

    window.pi_pokedex.keyboardManager.onArrowRight(() => {
        if (pageNumber < maxPage) {
            history.push(`/list/${pageNumber + 1}/${activeIndex}`);
        }
    });

    window.pi_pokedex.keyboardManager.onArrowDown(() => {
        if (activeIndex < pageSize - 1) {
            history.push(`/list/${pageNumber}/${activeIndex + 1}`);
        } else if (activeIndex === pageSize - 1 && pageNumber < maxPage) {
            history.push(`/list/${pageNumber + 1}/0`);
        }
    });

    window.pi_pokedex.keyboardManager.onArrowUp(() => {
        if (activeIndex === 0 && pageNumber > 0) {
            history.push(`/list/${pageNumber - 1}/${pageSize - 1}`);
        } else {
            history.push(`/list/${pageNumber}/${activeIndex - 1}`);
        }
    });

    window.pi_pokedex.keyboardManager.onEnter(() => {
        window.pi_pokedex.keyboardManager.clear();
        history.push(`/pokemon/${(pageNumber * pageSize) + activeIndex + 1}`);
    });

    window.pi_pokedex.keyboardManager.onBack(() => {
        window.pi_pokedex.keyboardManager.clear();
        history.push("/home/0");
    });

    return (
        <div className="application-container">
            <ListComponent items={pokemonBatch} activeIndex={activeIndex} />
        </div>
    )
}

export default ListPage;