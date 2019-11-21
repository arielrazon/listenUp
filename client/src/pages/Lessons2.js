import React from "react";
import LessonDiv2 from "../components/LessonDiv2";
import Preview from "../components/Preview";

function Lessons2() {
    return( 
        <div className="container-fluid">
        <div className="row">
          <LessonDiv2 />
        </div>
  
        <div className="row">
          <Preview />
        </div>
  
      </div>
    )
}

export default Lessons2;