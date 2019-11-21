import React from "react";
import "./style.css";
import SpeakButton from "../SpeakButton";

export default props =>
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 Game">
<h1>ListenUp! Round {props.round}</h1>
          <div className="Game-div">

          <h6>{props.lessonName}</h6>
        <SpeakButton text={props.speak} speak={props.speak} />
        <br /><br />
        <form action={props.next} method="get" target="_self">
        <input type="radio" name={props.answer1} value={props.choice1} id={props.choice1} /><label htmlFor={props.choice1}> {props.choice1written}</label><br/>
        <input type="radio" name={props.answer1} value={props.choice2} id={props.choice2} /><label htmlFor={props.choice2}> {props.choice2written}</label><br/> <input type="radio" name={props.answer1} value={props.choice3} id={props.choice3} /><label htmlFor={props.choice3}> {props.choice3written}</label><br/> <input type="radio" name={props.answer1} value={props.choice4} id={props.choice4} /><label htmlFor={props.choice4}> {props.choice4written}</label> <br /><br />
        <input type="submit" />
        </form> 
          </div>
        </div>
      </div>
    </div>
 


