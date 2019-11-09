import React from "react";
import "./style.css";
import { ldBar } from "@loadingio/loading-bar";

function Progress() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 prog">
          Lesson Progress
          <div className="progress-div">
            <div
              data-preset="fan"
              class="ldBar label-center"
              data-value="0"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
