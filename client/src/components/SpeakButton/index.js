import React from 'react';
import { SayButton } from 'react-say';

export default props =>
  <SayButton
    onClick={ event => console.log(event) }
    speak={props.speech}
    text={props.text}
  >
    Click Here to Listen
  </SayButton>