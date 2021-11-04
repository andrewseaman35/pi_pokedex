import React from "react";
import {
  Link,
} from "react-router-dom";


const Home = () => (
    <div class="application-container">
        <div class="home-main-menu">
            <Link to="/list?page=0">
                <div class="home-menu-item">
                    <img alt="" src={process.env.PUBLIC_URL + '/img/home/icon_pokeball.png'}></img>
                    <div>Pokémon</div>
                </div>
            </Link>
            <Link to="/users">
                <div class="home-menu-item">
                    <img alt="" src={process.env.PUBLIC_URL + '/img/home/icon_camera.png'}></img>
                    <div>Camera</div>
                </div>
            </Link>
        </div>
        <div class="home-settings-container">
            <Link to="/settings">
                <div class="home-settings-link">Settings</div>
            </Link>
        </div>
    </div>
);

export default Home;