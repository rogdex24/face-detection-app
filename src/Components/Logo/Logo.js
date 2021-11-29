import React from "react";
import Tilt from "react-parallax-tilt";
import face from "./Face.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="box ma4 mt0">
      <Tilt>
        <div
          className="Tilt-inner br2 shadow-2"
          style={{
            height: "200px",
            width: "200px",
            backgroundColor: "darkgreen",
          }}
        >
          <img src={face} alt="" />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
