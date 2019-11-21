import React from "react";
import "./style.css";
import logo from "../../img/logo2.png";

function Welcome() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>

        <div className="col-3 greeting">
          <div className="logoDiv">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </div>
        <div className="col-7 greeting2">
          <h1>ListenUp!</h1>
          <h4 className="welcomeBack">Welcome Back Ariel. Nice to see you again.</h4>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
