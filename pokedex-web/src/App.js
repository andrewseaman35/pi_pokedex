import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";

import Home from "./views/Home";
import ListPage from "./views/ListPage";
import PokemonInfoPage from "./views/PokemonInfoPage";
import PokemonList from "./components/PokemonList";
import SettingsList from "./components/SettingsList";

import KeyboardManager from "./js/keyboardManager";
import { POKEMON } from "./js/pokemon";
import { PAGE_SIZE, SETTINGS_ITEMS } from "./js/constants";


export default function App() {
    window.pi_pokedex = {
        keyboardManager: new KeyboardManager(),
    };
    return (
        <Router>
            <Switch>
                <Route path="/list">
                    <ListPage
                        ListComponent={PokemonList}
                        items={POKEMON}
                        pageSize={PAGE_SIZE}
                        selectBasePage="pokemon"
                    />
                </Route>
                <Route path="/pokemon">
                    <PokemonInfoPage />
                </Route>
                <Route path="/settings">
                    <ListPage
                        ListComponent={SettingsList}
                        items={SETTINGS_ITEMS}
                        pageSize={PAGE_SIZE}
                        selectBasePage={null}
                    />
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
