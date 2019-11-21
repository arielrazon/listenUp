import React from "react";
import "./style.css";


function Preview() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 previewContainer">
          <h3>Your Progress in Current Module:</h3>
          <div className="preview-div">You just started, but you're doing a great job so far!
          <div
              data-preset="energy"
              class="ldBar label-center"
              data-value="5"

            ></div></div>
          
        </div>
      </div>
    </div>
  );
}

export default Preview;
