import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function About(props) {
  return (
    <>
      <Header />
      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4" style={{ color: "#000" }}>
                More About Us...
              </h1>
              <p className="lead text-muted mb-0">
                We are a team of thinkers, creators & developers who bring your
                ideas to reality for a better envisioned world. <br />
                Our team consists of people with a variety of skills, ranging
                from software development to, AI, Web development etc. <br />
                Putting the same skills to use we create pragmatic & futuristic
                solutions for modern world problems.
                <br />
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
              <h2 className="font-weight-light">Our Mission</h2>
              <p className="font-italic text-muted mb-4">
                Our team consists of people with a variety of skills, ranging
                from software development to, AI, Web development etc
              </p>
              {/* 4 */}
              {/* <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a> */}
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary" />
              <h2 className="font-weight-light">What We Do</h2>
              <p className="font-italic text-muted mb-4">
                We aim to empower people in technology by building community,
                organizing webinars & ideathons, contributing in open-source,
                and providing mentor support in all domains.
              </p>
              {/* <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container py-5">
          {/* <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our team</h2>
              <p className="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div> */}

          {/* <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="test bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Ayush Srivastava</h5>
                <span className="small text-uppercase text-muted">
                  Web Developer
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="test bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Tom Sunderland</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="test bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Tom Sunderland</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="test bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Tom Sunderland</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About;
