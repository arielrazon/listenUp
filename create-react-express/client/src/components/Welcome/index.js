import React from "react";
import "./style.css";
import logo from "../../img/bigOlEar.png";

function Welcome() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 greeting"><h3>CochlearLearn</h3>
        <div>
          <img className="logo" src= {logo} alt="logo" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
