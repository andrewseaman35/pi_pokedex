import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Home from "./views/Home";
import PokemonListPage from "./views/PokemonListPage";
import PokemonInfoPage from "./views/PokemonInfoPage";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function App() {
  let query = useQuery();
  return (
    <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/list">
            <PokemonListPage page={query.get("page")} />
          </Route>
          <Route path="/pokemon">
            <PokemonInfoPage id={Number(query.get("id"))} />
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
