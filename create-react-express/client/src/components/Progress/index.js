import React from "react";
import "./style.css";

function Progress() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 prog">Lesson Progress
        <div className="progress-div">progress will go here</div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
