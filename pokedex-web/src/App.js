import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Home from "./views/Home";

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
          <Route path="/users">
            <Users name={query.get("name")} />
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

function Users({ name }) {
  return <h2>Users {name} </h2>;
}