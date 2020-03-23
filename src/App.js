import React from "react";
import Header from "./components/header/Header";
import Cards from "./components/cards/Cards";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="row mt-4">
        <Cards />
      </div>
    </div>
  );
}

export default App;
