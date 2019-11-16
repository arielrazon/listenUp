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
          <div className="col-10 loginTitle">
            Create an Account
            <div className="userLogin">
              <form>
                <p>Username: {this.state.username}</p>
                <p>Password: {this.state.password}</p>
                <p>Email: {this.state.email}</p>
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
                <input
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={this.handInputChange}
                />
                <button onClick={this.handleFormSubmit}>Submit</button>

                <h6>Already Have an Account?</h6>
                <button className="createAccBtn">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAcc;
