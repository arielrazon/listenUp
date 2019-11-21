import React from "react";
import "./style.css";

function LessonDiv2() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 lessons">
          <h3>Module 2: Consonants</h3>
         
          
          <div className="lessons-div">
            <h4>
          <p><a href="/play">Lesson 1</a></p>
          <p><a href="/play21">Lesson 2</a></p>
          <p style={{'color':'#8f9194'}}>Lesson 3</p>
          <p style={{'color':'#8f9194'}}>Lesson 4</p>
          <p style={{'color':'#8f9194'}}>Lesson 5</p>
          </h4>
        </div>
        </div>
      </div>
    </div>
  );
}

export default LessonDiv2;
