import React from "react";
import Welcome from "../components/Welcome";
import Recent2 from "../components/Recent2";
import Progress2 from "../components/Progress2";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Welcome />
      </div>

      <div className="row">
        <Recent2 />
      </div>

      <div className="row">
        <Progress2 />
      </div>
    </div>
  );
}

export default Home;
