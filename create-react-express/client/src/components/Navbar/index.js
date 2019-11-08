import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Home</a>
        <a className="navbar-brand mr-auto" href="/">Lessons</a>
        <a className="navbar-brand ml-auto" href="/">Sign-in</a>

      </nav>
    );
  }
}

// function Navbar() {
//   return (
// <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
//   <a classNameName="navbar-brand" href="#">Navbar</a>

//   <div classNameName="collapse navbar-collapse" id="navbarNav">
//     <ul classNameName="navbar-nav">
//       <li classNameName="nav-item active">
//         <a classNameName="nav-link" href="#">Home <span classNameName="sr-only">(current)</span></a>
//       </li>
//       <li classNameName="nav-item">
//         <a classNameName="nav-link" href="#">Features</a>
//       </li>
//       <li classNameName="nav-item">
//         <a classNameName="nav-link" href="#">Pricing</a>
//       </li>
//       <li classNameName="nav-item">
//         <a classNameName="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//       </li>
//     </ul>
//   </div>
// </nav>
//   );
// }

export default Navbar;
