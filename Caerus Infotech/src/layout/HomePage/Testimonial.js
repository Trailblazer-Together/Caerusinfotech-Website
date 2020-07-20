import React from "react";
// import { Link } from "react-router-dom";
// import skillenza from ."./../images/SKILLENZA.png";
import skillenza from "../../images/SKILLENZA.png";
import brainstorming from "../../images/brainstorming.png";
import github from "../../images/github.png";

function Testimonial() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <div
        className="alert alert-secondary"
        role="alert"
        style={{
          marginTop: "50px",
          width: "80%",
          marginLeft: "1px",
          borderRadius: "10px",
          zIndex: "100"
        }}
      >
        <h2>Events</h2>
      </div>
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleCaptions" data-slide-to="1" />
        <li data-target="#carouselExampleCaptions" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item home-carousel active">
          <img src={github} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Mastering Git & GitHub</h5>
            <p>
              Quintessential community organized a webinar to teach whole
              caboodle of Git & GitHub giving attendees practical experience of
              working with version control system.
            </p>
          </div>
        </div>
        <div className="carousel-item home-carousel">
          <img src={skillenza} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Skillenza</h5>
            <p>
              We organize weekend fun quizzes on vast variety of topics ranging
              from recent covid-19 to tech-topics like data structures for
              broadening the knowledge horizon of our members.{" "}
            </p>
          </div>
        </div>
        <div className="carousel-item home-carousel">
          <img src={brainstorming} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>BrainStorming</h5>
            <p>
              We organize weekly fun competitive coding contests to assist
              participants enhance their coding skills in a supportive
              environment encouraging winners with certificates & badges.
            </p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Testimonial;
