import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import registerServiceWorker from "./registerServiceWorker";
import About from "./pages/About";
import Lessons from "./pages/Lessons";
import Play from "./pages/Play";
import Nav from "./components/Nav";
import FooterPage from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Create from "./pages/Create";
import App from "./App";

const routing = (
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/lessons" component={Lessons} />
      <Route exact path="/play" component={Play} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/create" component={Create} />

      <FooterPage />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
registerServiceWorker();
