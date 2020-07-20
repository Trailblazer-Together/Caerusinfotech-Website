import React from "react";
// import icons from "./iconss.png";
import Particles from "react-particles-js";
import Box from "./Box";

const particlesoptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#b6b2b2"
      }
    },
    opacity: {
      value: 0.5211089197812949,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 8.017060304327615,
      random: true,
      anim: {
        enable: true,
        speed: 12.181158184520175,
        size_min: 0.1,
        sync: true
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#808080",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 1
      }
    }
  },
  retina_detect: true
};

function Welcome() {
  return (
    <div>
      <div class="hero1 text-center " style={{ position: "relative" }}>
        <div>
          <Particles className="particles" params={particlesoptions} />
          <div className="typewriter">
            <h1
              className="lead"
              style={{
                fontFamily: "'Krona One', sans-serif",
                // letterSpacing: "0px",
                fontWeight: "400"
              }}
            >
              {" "}
              Your Vision, Our Future
            </h1>
            <br />
            {/* <h2>Community</h2> */}
          </div>
          {/* <h1 className="lead "> WELCOME TO TRAILBLAZER COMMUNITY</h1> */}

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2MkVjOWPAviz3WKi03La1aDM2VUTObsLmwfCkfwy3MlTw2Q/viewform"
            class="btn btn-outline-info"
          >
            JOIN US ON TELEGRAM
          </a>
        </div>
      </div>

      {/* used boxes */}
      <Box />
    </div>
  );
}

export default Welcome;
