import React from 'react';
import { SayButton } from 'react-say';

export default props =>
  <SayButton
    onClick={ event => console.log(event) }
    speak={props.speech}
  >
    Click to Play Audio
  </SayButton>