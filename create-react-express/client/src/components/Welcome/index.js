import React from "react";
import "./style.css";
import logo from "../../img/logo1.png";

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
          <h3>CochlearLearn</h3>
          <h4 className="welcomeBack">Welcome Back "NoobPWN420@aol.con"</h4>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
