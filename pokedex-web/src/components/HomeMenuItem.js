import React from "react";
import {
    Link,
} from "react-router-dom";

import {
    STATES
} from "../js/constants";

const HomeMenuItem = ({ icon, href, label, state }) => {
    const stateClass = state === STATES.ACTIVE ? 'active' : '';
    
    return (
        <Link to={href}>
            <div className={`home-menu-item ${stateClass}`}>
                <img alt="" src={process.env.PUBLIC_URL + `/img/home/${icon}.png`}></img>
                <div>{label}</div>
            </div>
        </Link>
    )
}

export default HomeMenuItem;