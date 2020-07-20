import React from "react";

function TeamCard(props) {
  return (
    <div className="Teamcard">
      <div className="card-front">
        <img src={props.img} height="300px" width="300" />
      </div>

      <div className="card-back">
        <h2>
          {props.Name}
          <br />
          <span>{props.position}</span>
        </h2>

        <div className="social-icons">
          {/* <a href="#" className="fa fa-facebook" aria-hidden="true" />
          <a href="#" className="fa fa-twitter" aria-hidden="true" />
          <a href="#" className="fa fa-google-plus" aria-hidden="true" />
          <a href="#" className="fa fa-linkedin" aria-hidden="true" />
          <a href="#" className="fa fa-instagram" aria-hidden="true" /> */}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
