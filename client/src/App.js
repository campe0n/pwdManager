import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/Login";

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
        </div>
      </Router>
    </main>
  );
}

export default App;
