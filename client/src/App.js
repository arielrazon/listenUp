import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import FooterPage from "./components/Footer";
import Lessons from "./pages/Lessons";
import Game from "./pages/Play";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <FooterPage />
      </div>
    );
  }
}

export default App;
