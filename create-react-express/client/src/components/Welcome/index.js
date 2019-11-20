import React from "react";
import "./style.css";
import logo from "../../img/logo1.png";

function Welcome() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>

        <div className="col-3 greeting">
          <div className="logoDiv">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </div>
        <div className="col-7 greeting2">
          <h3>ListenUp</h3>
          <h4 className="welcomeBack">
            Welcome Back Dear Precious User, whom I would die for and relinquish
            all of my worldy goods to protect from the bad influences of the
            world, including but not limited to: muggers, knives, guns,
            assassins, badgers, honey badgers, lions, olives, Jake Paul, and low
            quality memes. Nice to see you again.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
