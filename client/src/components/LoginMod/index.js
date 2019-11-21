import "./style.css";

import React, { Component } from "react";

class LoginMod extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handlePageChange() {
    window.location = "/";
  }

  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 loginTitle">
            <h3>Enter Your Information</h3>
            <div className="userLogin">
              <form>
                <input
                  type="text"
                  placeholder="   Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  className="uNameInput"
                />
                <br />
                <input
                  type="password"
                  placeholder="   Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  className="pWordInput"
                />
                <br />
                <button
                  type="button"
                  className="btn btn-success submit"
                  onClick={this.handlePageChange}
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-7"></div>
          <div className="col-3 signUp">
            <h6>Don't have an account?</h6>

            <button
              type="button"
              className="btn btn-link createAccBtnLogin"
              onClick={this.handleFormSubmit}
            >
              Create Account
            </button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default LoginMod;
