import React from "react";
import "./style.css";

function Recent() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 recent"><h3>Recent activity:</h3>You haven't done anything because this app only has one lesson! Sorry!
        <br/><a href="/play">Start the First Lesson</a></div>
      </div>
    </div>
  );
}

export default Recent;
