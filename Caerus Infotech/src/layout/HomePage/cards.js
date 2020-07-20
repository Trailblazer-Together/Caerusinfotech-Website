import React from "react";
import SocialMedia from "./socialMedia";
function Card(props) {
  return (
    <div className="bg">
      <div className="speaker-card box-height">
        <div className="media">
          <div className="img">
            <img className="circle-img mr-3" src={props.img} alt="avatar_img" />
          </div>
          <div className="media-body">
            <div className="info mb-3">
              <strong>
                <b>{props.name}</b>
              </strong>
              <span>{props.quote}</span>
            </div>
            {props.body}
          </div>
        </div>
      </div>
      <div className="overlay">
        <li style={{ listStyle: "none" }}>
          <a href={props.facebook}>
            <i className="social-icon fab fa-facebook-f icon" />
          </a>
          <a href={props.twitter}>
            <i className="social-icon fab fa-twitter icon" />
          </a>
          {/* <a href="#">
        <i className="social-icon fas fa-envelope icon" />
      </a> */}
          <a className="footer-link" href={props.linkedin}>
            <i className="social-icon fab fa-linkedin icon" />
          </a>
        </li>
      </div>
    </div>
  );
}

export default Card;
