import React, { Component } from "react";
import Typewriter from "typewriter-effect";
class Heading extends Component {
  state = {};
  render() {
    return (
      <div className="Heading">
        <span className="visualsorting">
          <Typewriter
            options={{
              strings: ["Visual Sorting ..."],
              autoStart: true,
              loop: true,
              delay: 200
            }}
          />
        </span>
      </div>
    );
  }
}

export default Heading;
