import React from "react";
import {
  Link,
} from "react-router-dom";

import HomeMenuItem from '../components/HomeMenuItem';

const Home = () => {
    return (
        <div className="application-container">
            <div className="home-main-menu">
                <HomeMenuItem 
                    href="/list/0"
                    icon="icon_pokeball"
                    label="Pokémon"
                    state="active"
                ></HomeMenuItem>
                <HomeMenuItem 
                    href="/users"
                    icon="icon_camera"
                    label="Camera"
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