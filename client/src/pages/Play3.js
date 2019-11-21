import React from "react";
import Game from "../components/Game";
import Progress from "../components/Progress";

function Play3() {
    return( 
        <div className="container-fluid">
        <div className="row">
          <Game next="/play4" round="1.3" choice1="ahhh" choice1written="ahhh" choice2="oooo" choice2written="oooo" choice3="eeee" choice3written="eeee" choice4="ayyy" choice4written="ayyy" speak="ah"  />

        </div>
  
        <div className="row">
          <Progress value="50" />
        </div>
  
      </div>
    )
}

export default Play3;