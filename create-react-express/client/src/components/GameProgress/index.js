import React from "react";
import "./style.css";

function GameProgress() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 gameProg">
          Progress
          <div className="gameProg-div">Game progress will go here</div>
        </div>
      </div>
    </div>
  );
}

export default GameProgress;
