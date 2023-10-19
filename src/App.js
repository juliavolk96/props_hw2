import React from "react";
import "./App.css";
import Listing from "./components/Listing";
const items = require("./etsy.json");

function App() {
  return (
    <div>
      <Listing items={items} />
    </div>
  );
}

export default App;
