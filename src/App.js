import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import React, { Component } from "react";
// import Header from ".components/Header.js";
const App = () => {
  return (
    <div className="App">
      <Welcome />
    </div>
  );
};

export default App;
