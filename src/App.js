import React, { Component } from "react";
import Particles from "react-tsparticles";
import Clarifai from "clarifai";
import FaceDetection from "./Components/FaceDetection/FaceDetection";
import Navigation from "./Components/Navigation/Navigation";
import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import "./App.css";
import "tachyons";

const app = new Clarifai.App({
  apiKey: "af7a12a32d1740e4a2f8a3920d3c026c",
});

const particlesOptions = {
  fpsLimit: 40,
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: [],
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      },
    };
  }

  calculateFaceLocation = (data) => {
    const regions = data.outputs[0].data.regions;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    const allBoxes = [];
    let boxLoc;
    for (let i = 0; i < regions.length; i += 1) {
      boxLoc = regions[i].region_info.bounding_box;
      allBoxes.push({
        leftCol: boxLoc.left_col * width,
        rightCol: width - boxLoc.right_col * width,
        topRow: boxLoc.top_row * height,
        bottomRow: height - boxLoc.bottom_row * height,
      });
    }
    return allBoxes;
  };

  // No. of Faces
  // console.log(data.outputs[0].data.regions.length);

  displayFaceBox = (boxObj) => {
    this.setState({ box: boxObj });
  };

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
      imageUrl: event.target.value,
      box: [],
    });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        console.log("hi", response);
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <div>
            <Logo />

            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceDetection box={box} imageUrl={imageUrl} />
            {this.state.imageUrl && (
              <div
                className="ImageCount"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "30%",
                }}
              >
                <h2
                  style={{
                    transition: "all 0.3s",
                    margin: "2px",
                    fontSize: "2rem",
                  }}
                >
                  Face Count
                </h2>
                <h1
                  style={{
                    fontSize: "8rem",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    margin: 0,
                  }}
                >
                  {this.state.box.length}
                </h1>
              </div>
            )}
          </div>
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
