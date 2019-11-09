import React from "react";
import "./style.css";

function Welcome() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 greeting">
          <h3>CochlearLearn</h3>
          <div>
            <img src="../../img/bigOlEar.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
