import React from "react";
import {
  Link,
  useLocation, 
  useHistory,
} from "react-router-dom";

import HomeMenuItem from '../components/HomeMenuItem';
import { STATES } from "../js/constants";

const ITEM_KEYS = {
    LIST: 0,
    CAMERA: 1,
    SETTINGS: 2,
};

const Home = () => {
    const history = useHistory();
    const path = useLocation()['pathname'];
    const activeItem = Number(path.split("/")[2]);

    window.pi_pokedex.keyboardManager.onArrowLeft(() => {
        const newItem = activeItem === 0 ? 2 : (activeItem - 1);
        history.push(`/home/${newItem}`);
    });

    window.pi_pokedex.keyboardManager.onArrowRight(() => {
        const newItem = activeItem === 2 ? 0 : (activeItem + 1);
        history.push(`/home/${newItem}`);
    });

    window.pi_pokedex.keyboardManager.onEnter(() => {
        if (activeItem === 0) {
            window.pi_pokedex.keyboardManager.clear();
            history.push(`/list/0/0`);
        }
    })

    const settingsStateClass = activeItem === ITEM_KEYS.SETTINGS ? STATES.ACTIVE : null;
    return (
        <div className="application-container">
            <div className="home-main-menu">
                <HomeMenuItem 
                    href="/list/0/0"
                    icon="icon_pokeball"
                    label="Pokémon"
                    state={`${activeItem === ITEM_KEYS.LIST ? STATES.ACTIVE : null}`}
                ></HomeMenuItem>
                <HomeMenuItem 
                    href="/users"
                    icon="icon_camera"
                    label="Camera"
                    state={`${activeItem === ITEM_KEYS.CAMERA ? STATES.ACTIVE : null}`}
                ></HomeMenuItem>
            </div>
            <div className="home-settings-container">
                <Link to="/settings">
                    <div className={`home-settings-link ${settingsStateClass}`}>Settings</div>
                </Link>
            </div>
        </div>
    )
};

export default Home;