import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          className="f2 pa1 black topnav-centered"
          style={{
            fontFamily: "SEGA LOGO FONT",
            fontWeight: "normal",
            FontSize: "42px",
            color:"whitesmoke"
          }}
        >
          Face - Detection
        </p>
        <p
          onClick={() => onRouteChange("signout")}
          style={{fontWeight:"bold"}}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          className="f2 pa1 black topnav-centered"
          style={{
            fontFamily: "SEGA LOGO FONT",
            fontWeight: "normal",
            FontSize: "42px",
            display:"flex",justifyContent:"center",
            color:"whitesmoke"
            }}
        >
          Face - Detection
        </p>
        <div style={{ display: "flex" }}>
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f3 link dim black underline pa3 pointer"
          >
            Register
          </p>
        </div>
      </nav>
    );
  }
};

export default Navigation;
