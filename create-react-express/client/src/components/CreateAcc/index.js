import "./style.css";

import React, { Component } from "react";

class CreateAcc extends Component {
  state = {
    username: "",
    password: "",
    email: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert(
      `Username: ${this.state.username}\nPassword: ${this.state.password}\nEmail: ${this.state.email}`
    );
    this.setState({ username: "", password: "", email: "" });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 createTitle">
            <h3>Create an Account</h3>
            <div className="userLoginCreate">
              <form>
                <input
                  type="text"
                  placeholder="   Create Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  className="uNameInput"
                />
                <br />
                <input
                  type="password"
                  placeholder="   Create Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  className="pWordInput"
                />
                <br />
                <input
                  type="password"
                  placeholder="   Confirm Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  className="pWordInput"
                />
                <br />
                <input
                  type="text"
                  placeholder="   Enter Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={this.handInputChange}
                  className="emailInput"
                />
                <br />
                <button
                  type="button"
                  className="btn btn-success submit"
                  onClick={this.handleFormSubmit}
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-7"></div>
          <div className="col-3 accountExists">
            <h6>Already have an account?</h6>

            <button
              type="button"
              className="btn btn-link LoginLink"
              onClick={this.handleFormSubmit}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAcc;
