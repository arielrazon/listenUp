import React from "react";
import Game from "../components/Game";
import GameProgress from "../components/GameProgress";


function Play() {
    return( 
        <div className="container-fluid">
        <div className="row">
          <Game />
        </div>
  
        <div className="row">
          <GameProgress />
        </div>
  
      </div>
    )
}

export default Play;