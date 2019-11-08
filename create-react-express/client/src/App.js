import React, { Component } from "react";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Lessons from "./pages/Lessons";
import Game from "./pages/Play";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Game />
        <Footer />
      </div>
    );
  }
}

export default App;
