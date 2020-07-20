import React from "react";

function SocialMedia(props) {
  return (
    <li style={{ listStyle: "none" }}>
      <a href={props.facebook}>
        <i className="social-icon fab fa-facebook-f icon" />
      </a>
      <a className="footer-link" href={props.instagram}>
        <i className="social-icon fab fa-instagram icon" />
      </a>
      <a className="footer-link" href={props.linkedin}>
        <i className="social-icon fab fa-linkedin icon" />
      </a>
      <a href={props.twitter}>
        <i className="social-icon fab fa-twitter icon" />
      </a>
      <a href={props.medium}>
        <i className="social-icon fab fa-medium icon" />
      </a>
      <a href={props.github}>
        <i className="social-icon fab fa-github icon" />
      </a>
      <a className="footer-link" href={props.youtube}>
        <i className="social-icon fab fa-youtube icon" />
      </a>
    </li>
  );
}
export default SocialMedia;
