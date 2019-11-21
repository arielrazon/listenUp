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
import Lessons2 from "./pages/Lessons2";
import Home2 from "./pages/Home2";
import Play from "./pages/Play";
import Play2 from "./pages/Play2";
import Play3 from "./pages/Play3";
import Play4 from "./pages/Play4";
import Play21 from "./pages/Play21";
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
      <Route exact path="/home2" component={Home2} />
      <Route exact path="/about" component={About} />
      <Route exact path="/lessons" component={Lessons} />
      <Route exact path="/lessons2" component={Lessons2} />
      <Route exact path="/play" component={Play} />
      <Route exact path="/play2" component={Play2} />
      <Route exact path="/play3" component={Play3} />
      <Route exact path="/play4" component={Play4} />
      <Route exact path="/play21" component={Play21} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/create" component={Create} />

      <FooterPage />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
registerServiceWorker();
