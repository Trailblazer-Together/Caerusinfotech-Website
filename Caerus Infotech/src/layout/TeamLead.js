import React from "react";

function TeamLead(props) {
  return (
    <div>
      <div className="Teamleadcard">
        <div className="image">
          <img src={props.dp} />
        </div>
        <div className="details">
          <div className="center">
            <h1>
              {props.Name}
              <br />
              <span>Team lead</span>
            </h1>
            <p>{props.About}</p>
            <ul>
              <li>
                <a href={props.github}>
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={props.twitter}>
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={props.linkedin}>
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={props.instagram}>
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamLead;
