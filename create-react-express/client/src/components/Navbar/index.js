import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <h4>Home</h4>
        </a>
        <a className="navbar-brand mr-auto" href="/lessons">
          <h4>Lessons</h4>
        </a>
        <a className="navbar-brand ml-auto" href="/">
          <h4>Login</h4>
        </a>
      </nav>
    );
  }
}

export default Navbar;
