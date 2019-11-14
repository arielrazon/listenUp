import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import About from "./pages/About";
import Lessons from "./pages/Lessons";
import Play from "./pages/Play";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Create from "./pages/Create";

const routing = (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/lessons" component={Lessons} />
      <Route exact path="/play" component={Play} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/create" component={Create} />

      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
registerServiceWorker();
