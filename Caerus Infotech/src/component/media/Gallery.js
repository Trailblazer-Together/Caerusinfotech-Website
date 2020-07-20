import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import cover from "../../images/Cover.jpeg";

function Gallery() {
  return (
    <div>
      <Header />
      <div className="container mb-3">
        <div className="row">
          <div className="col">
            <div className="gallery-container" style={{ marginTop: "6rem" }}>
              <div className="gallery-box">
                <img src="https://source.unsplash.com/1920x1080" />
                <span>Name</span>
              </div>
              <div className="gallery-box">
                <img src="https://source.unsplash.com/1920x1000" />
                <span>Name</span>
              </div>
              <div className="gallery-box">
                <img src="https://source.unsplash.com/1920x1081" />
                <span>Name</span>
              </div>
              <div className="gallery-box">
                <img src="https://source.unsplash.com/1920x1086" />
                <span>Name</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax parallax-bg">
        {/* <div className="container"> */}
        {/* <button className="btn">Contact us</button> */}
        {/* </div> */}
      </div>

      <div className="container mb-3">
        <div className="row">
          <div className="col">
            <div className="gallery-container">
              <div className="gallery-box">
                <img src="https://source.unsplash.com/1920x1080" />
                <span>Name</span>
              </div>
              <div className="gallery-box">
                <img src="https://source.unsplash.com/1920x1000" />
                <span>Name</span>
              </div>
              <div className="gallery-box">
                <img src="https://source.unsplash.com/1920x1081" />
                <span>Name</span>
              </div>
              <div className="gallery-box">
                <img src="https://source.unsplash.com/1920x1086" />
                <span>Name</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
