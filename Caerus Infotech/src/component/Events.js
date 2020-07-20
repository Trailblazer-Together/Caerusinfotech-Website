import React from "react";
import Modals from "../layout/HomePage/modals";
import Header from "./Header";
import Footer from "./Footer";
import github from "../images/github.png";
import quiz from "../images/quiz.png";
import webinar from "../images/webinar.png";
import brainstroming from "../images/brainstorming.png";
import skillenza from "../images/SKILLENZA.png";
import webinar2 from "../images/webinar.gif";
// import heart from "../images/heart.png";
// import skillenza from "../images/SKILLENZA.png";
// import brainstroming from "../images/brainstroming.png";
// import github from "../images/github.png";

function Event() {
  return (
    <div>
      <Header />
      <div style={{ margin: "3rem 0 5rem 0", paddingTop: "2rem" }}>
        <h1 className="event" style={{ color: "#000" }}>
          Upcoming Events at Caerus Infotech
        </h1>

        <div className="event-container">
          <div className="row">
            <div className=" col-lg-4 col-md-12 col-sm-12">
              <div className="card mb-4 shadow-sm event-card">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Quiz</h4>
                </div>
                <div className="card-body">
                  <img className="event-img" src={quiz} />
                  <p>
                    We organize fun quizzes on vast variety of topics ranging
                    from recent covid-19 to tech-topics like data structures for
                    broadening the knowledge horizon of our members.
                    <Modals
                      title="Quiz"
                      content="This also
                      includes fun competitive coding contests to assist
                      participants enhance their coding skills in a supportive
                      environment encouraging winners with certificates & badges."
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card mb-4 shadow-sm event-card">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Ideathon</h4>
                </div>
                <div className="card-body">
                  <img className="event-img" src={webinar} />
                  <p>
                    Ideathon is an initiative to embark on with a motive of
                    encouraging people to think differently and innovatively to
                    solve real challenges.
                    <Modals
                      title="Ideathon"
                      content="This initiative also aims at igniting
                      passion among youth to build a better world around us by
                      creating solutions which could impact the way we live"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card mb-4 shadow-sm event-card">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Webinar</h4>
                </div>
                <div className="card-body">
                  <img className="event-img" src={webinar2} />
                  <p>
                    How to build a ROCK-SOLID LinkedIn Profile This webinar will
                    tell you how can you start building a ROCK SOLID profile no
                    matter if you are a student or an experienced professional.
                    <Modals
                      title="Webinar"
                      content=" The key ingredient to a great profile is
                      Branding through storytelling."
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="event" style={{ color: "#000" }}>
          Previous Events at Caerus Infotech
        </h1>

        <div
          id="carouselExampleIndicators"
          className="carousel slide pec"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item  event-carousel active">
              <div className="previous-events">
                <h2>Event 1</h2>
                <img
                  className="event-img-p"
                  style={{ maxWidth: "100%" }}
                  src={github}
                />
                <p className="event-para-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tristique dui libero, at molestie est dignissim id.
                  Phasellus eget consequat arcu. Vestibulum quis est hendrerit,
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tristique dui libero
                </p>
              </div>
            </div>
            <div className="carousel-item event-carousel">
              <div className="previous-events">
                <h2>Event 2</h2>
                <img className="event-img-p" src={brainstroming} />
                <p className="event-para-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tristique dui libero, at molestie est dignissim id.
                  Phasellus eget consequat arcu. Vestibulum quis est hendrerit,
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tristique dui libero
                </p>
              </div>
            </div>
            <div className="carousel-item  event-carousel">
              <div className="previous-events">
                <h2>Event 3</h2>
                <img className="event-img-p" src={skillenza} />
                <p className="event-para-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tristique dui libero, at molestie est dignissim id.
                  Phasellus eget consequat arcu. Vestibulum quis est hendrerit,
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum tristique dui libero
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Event;
