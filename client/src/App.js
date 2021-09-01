import React from "react";

import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <header>
          <h1>Password Manager </h1>
          <nav>
            <li>Dashboard</li>
          </nav>
        </header>
      </Router>
    </main>
  );
}

export default App;
