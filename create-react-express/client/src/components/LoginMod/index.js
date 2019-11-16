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
            Log In
            <div className="userLogin">
              <form>
                <p>Username: {this.state.username}</p>
                <p>Password: {this.state.password}</p>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <button onClick={this.handleFormSubmit}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginMod;
