import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Router>
        <header>
          <h1>Password Manager </h1>
        </header>
        <div>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </div>
      </Router>
    </main>
  );
}

export default App;
