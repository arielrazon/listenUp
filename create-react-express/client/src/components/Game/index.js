import React from "react";
import "./style.css";
import SpeakButton from "../SpeakButton"

function Game() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 Game">
          Game
          <div className="Game-div">
      
          <h6>Single-Letter Sounds 1/15</h6>

       <SpeakButton speech="some shit"/>
        <form>
        <input type="radio" name="ayyy" value="y" id="y" /><label for="y"> yyy</label><br/>
        <input type="radio" name="ayyy" value="ehh" id="ehh" /><label for="ehh"> ehh</label><br/>
        <input type="radio" name="ayyy" value="ooo" id="ooo" /><label for="ooo"> ooo</label><br/>
        <input type="radio" name="ayyy" value="ay" id="ay" /><label for="ay"> ay</label><br/>
        <input type="submit" />
        </form> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
