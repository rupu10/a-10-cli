import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWrite = () => {
  return (
    <div>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        <span>
          <Typewriter
            words={["Good Food Good Life", "Good Food", "Good Life"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypeWrite;
