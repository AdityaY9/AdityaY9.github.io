import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Machine Learning Engineer",
          "Web Developer",
          "Graphic Designer",
          "GenAI Intern",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        // make animation smooth
        delay: 50,
        // make animation fast
        speed: 50,
      }}
    />
  );
}

export default Type;
