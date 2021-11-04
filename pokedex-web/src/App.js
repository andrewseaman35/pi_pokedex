import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./views/Home";
import PokemonListPage from "./views/PokemonListPage";
import PokemonInfoPage from "./views/PokemonInfoPage";


export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/list">
            <PokemonListPage />
          </Route>
          <Route path="/pokemon">
            <PokemonInfoPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}
