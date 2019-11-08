import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <a className="navbar-brand mr-auto" href="/lessons">
          Lessons
        </a>
        <a className="navbar-brand ml-auto" href="/">
          Sign-in
        </a>
      </nav>
    );
  }
}

export default Navbar;
