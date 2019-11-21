import React from "react";
import { Navbar, NavbarNav, NavbarToggler, Collapse, NavItem } from "mdbreact";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <Navbar color="blue lighten-3" dark expand="md" scrolling>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
        <Collapse isOpen={this.state.collapse} navbar>
          
          <NavbarNav left>
          {/* <NavItem className="nav-item">
          <Link to="/"  className={
                  window.location.pathname === "/create"
                    ? "nav-link active"
                    : "nav-link"
                }> */}
            <h1 style={{color:"#fff"}}>ListenUp!</h1>
            {/* </Link>
            </NavItem> */}
            <NavItem className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link
                to="/lessons"
                className={
                  window.location.pathname === "/lessons"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Lessons
              </Link>
            </NavItem>
          </NavbarNav>
    
            
          <NavbarNav right>
            <NavItem className="nav-item" active>
              <Link
                to="/login"
                className={
                  window.location.pathname === "/login"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Sign-in
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link
                to="/create"
                className={
                  window.location.pathname === "/create"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Sign-up
              </Link>
            </NavItem>
       
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Nav;
