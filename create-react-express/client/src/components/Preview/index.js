import React from "react";
import "./style.css";

function Preview() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 previewContainer">
          Lesson Preview
          <div className="preview-div">preview will be shown here</div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
