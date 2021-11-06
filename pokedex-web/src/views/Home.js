import React from "react";
import {
  Link,
  useLocation, 
  useHistory,
} from "react-router-dom";

import HomeMenuItem from '../components/HomeMenuItem';
import { STATES } from "../js/constants";

const Home = () => {
    const history = useHistory();
    const path = useLocation()['pathname'];
    const activeItem = Number(path.split("/")[2]);

    window.pi_pokedex.keyboardManager.onArrowLeft(() => {
        const newItem = activeItem === 0 ? 1 : (activeItem - 1);
        history.push(`/home/${newItem}`);
    });

    window.pi_pokedex.keyboardManager.onArrowRight(() => {
        const newItem = activeItem === 1 ? 0 : (activeItem + 1);
        history.push(`/home/${newItem}`);
    });

    return (
        <div className="application-container">
            <div className="home-main-menu">
                <HomeMenuItem 
                    href="/list/0"
                    icon="icon_pokeball"
                    label="Pokémon"
                    state={`${activeItem === 0 ? STATES.ACTIVE : null}`}
                ></HomeMenuItem>
                <HomeMenuItem 
                    href="/users"
                    icon="icon_camera"
                    label="Camera"
                    state={`${activeItem === 1 ? STATES.ACTIVE : null}`}
                ></HomeMenuItem>
            </div>
            <div className="home-settings-container">
                <Link to="/settings">
                    <div className="home-settings-link">Settings</div>
                </Link>
            </div>
        </div>
    )
};

export default Home;