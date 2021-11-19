import React from "react";
import { Redirect, useLocation, useHistory } from "react-router-dom";

import '../css/pokemon-list.css';


const ListPage = ({ListComponent, items, pageSize, selectBasePage}) => {
    console.log(items)
    const history = useHistory();
    const path = useLocation()['pathname'];
    const basePath = path.split("/")[1];
    const pageNumber = Number(path.split("/")[2]);
    const maxPage = Math.max(Math.floor(items.length / pageSize) - 1, 0);

    if (pageNumber < 0 || isNaN(pageNumber)) {
        return <Redirect to={`/${basePath}/0/0`} />
    } else if (pageNumber > maxPage) {
        return <Redirect to={`/${basePath}/${maxPage}/0`} />
    }

    const activeIndex = Number(path.split("/")[3]);
    if (activeIndex < 0 || isNaN(activeIndex)) {
        return <Redirect to={`/${basePath}/${pageNumber}/0`} />
    } else if (activeIndex > (pageSize - 1)) {
        return <Redirect to={`/${basePath}/${pageNumber}/${pageSize - 1}`} />
    }

    const lowIndex = pageNumber * pageSize;
    const itemBatch = items.slice(lowIndex, lowIndex + pageSize);
    window.pi_pokedex.keyboardManager.onArrowLeft(() => {
        if (pageNumber > 0) {
            history.push(`/${basePath}/${pageNumber - 1}/${activeIndex}`);
        }
    });

    window.pi_pokedex.keyboardManager.onArrowRight(() => {
        if (pageNumber < maxPage) {
            history.push(`/${basePath}/${pageNumber + 1}/${activeIndex}`);
        }
    });

    window.pi_pokedex.keyboardManager.onArrowDown(() => {
        if (activeIndex < itemBatch.length - 1) {
            history.push(`/${basePath}/${pageNumber}/${activeIndex + 1}`);
        } else if (activeIndex === pageSize - 1 && pageNumber < maxPage) {
            history.push(`/${basePath}/${pageNumber + 1}/0`);
        }
    });

    window.pi_pokedex.keyboardManager.onArrowUp(() => {
        if (activeIndex === 0 && pageNumber > 0) {
            history.push(`/${basePath}/${pageNumber - 1}/${pageSize - 1}`);
        } else {
            history.push(`/${basePath}/${pageNumber}/${activeIndex - 1}`);
        }
    });

    if (selectBasePage) {
        window.pi_pokedex.keyboardManager.onEnter(() => {
            window.pi_pokedex.keyboardManager.clear();
            history.push(`/${selectBasePage}/${(pageNumber * pageSize) + activeIndex + 1}`);
        });
    }

    window.pi_pokedex.keyboardManager.onBack(() => {
        window.pi_pokedex.keyboardManager.clear();
        history.push("/home/0");
    });

    return (
        <div className="application-container">
            <ListComponent items={itemBatch} activeIndex={activeIndex} />
        </div>
    )
}

export default ListPage;