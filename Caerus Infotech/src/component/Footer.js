import React from "react";
import SocialMedia from "../layout/HomePage/socialMedia";
import { Link } from "react-router-dom";
import caerus from "../images/updatedlogo.png";

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="row">
        <div
          className="col-lg-6 animate__animated animate__lightSpeedInRight"
          style={{ textAlign: "left" }}
        >
          <h2>Caerus Infotech</h2>
          <p style={{ fontSize: "15px" }}>
            With a team of innovators, we work on project and ideas that needs
            to be implemented in society, by society to make society a better
            place. Not only that, we work in a fun filled environment with joy
            and games all the time to keep the community interactive and
            engaging. Our aim? To grow with the community for a better future,
            together, and to be the best we can.
          </p>
        </div>
        <div className="col-lg-6 footerColumn animate__animated animate__lightSpeedInLeft">
          {/* <h4>TrailBlazer</h4> */}
          <ul>
            <li>Quick Link :-</li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <SocialMedia
              facebook="https://www.facebook.com/caerusinfotech/"
              linkedin="https://www.linkedin.com/company/caerusinfotech/"
              instagram="https://www.instagram.com/caerusinfotech"
              medium="https://medium.com/@caerusinfotech"
              twitter="https://twitter.com/CaerusInfotech"
              youtube="https://www.youtube.com/channel/UCaWmYob43P1S463-fWAQZHw?view_as=subscriber"
              github="https://github.com/Trailblazer-Together"
            />
          </ul>
        </div>
      </div>
      <hr />

      <p className="copyRight">
        Copyright © {currentYear} All rights reserved by Caerus Infotech
        <Link className="" to="/">
          <h5
            style={{
              fontFamily: " 'Dr Sugiyama', cursive",
              fontSize: "35px",
              textDecoration: "none"
            }}
          >
            <img src={caerus} height="60px" width="200px" />
          </h5>
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
