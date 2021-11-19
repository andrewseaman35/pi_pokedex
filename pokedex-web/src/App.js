import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";

import Home from "./views/Home";
import PokemonListPage from "./views/PokemonListPage";
import PokemonInfoPage from "./views/PokemonInfoPage";

import KeyboardManager from "./js/keyboardManager";


export default function App() {
    window.pi_pokedex = {
        keyboardManager: new KeyboardManager(),
    };
    return (
        <Router>
            <Switch>
                <Route path="/list">
                    <PokemonListPage />
                </Route>
                <Route path="/pokemon">
                    <PokemonInfoPage />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/">
                    <Redirect to="/home/0" />
                </Route>
            </Switch>
        </Router>
    );
}
