import React from "react";
import Game from "../components/Game";
import Progress from "../components/Progress";


function Play() {
    return( 
        <div className="container-fluid">
        <div className="row">
          <Game />
        </div>
  
        <div className="row">
          <Progress />
        </div>
  
      </div>
    )
}

export default Play;