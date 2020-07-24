import React from "react";
import "./App.css";
import NavBar from "./pages/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
