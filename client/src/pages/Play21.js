import React from "react";
import Game from "../components/Game";
import Progress from "../components/Progress";

function Play21() {
    return( 
        <div className="container-fluid">
        <div className="row">
          <Game next="/play2" round="2.1" choice1="X" choice1written="letter X" choice2="K" choice2written="letter K" choice3="B" choice3written="Letter B" choice4="D" choice4written="letter D" speak="Kay"  />

        </div>
  
        <div className="row">
          <Progress value="5" />
        </div>
  
      </div>
    )
}

export default Play21;