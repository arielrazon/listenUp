import React from "react";
import LessonDiv from "../components/LessonDiv";
import Preview from "../components/Preview";

function Lessons() {
    return( 
        <div className="container-fluid">
        <div className="row">
          <LessonDiv />
        </div>
  
        <div className="row">
          <Preview />
        </div>
  
      </div>
    )
}

export default Lessons;