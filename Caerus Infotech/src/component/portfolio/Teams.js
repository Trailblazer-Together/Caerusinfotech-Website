import React from "react";
// import SocialMedia from "../../layout/HomePage/socialMedia";
import Header from "../Header";
import Footer from "../Footer";
import TeamCard from "../../layout/TeamCard";
// import Team from "../../layout/HomePage/Team";
// import Card from "../../layout/HomePage/cards";
import TeamLead from "../../layout/TeamLead";
import Vartika from "../../images/Vartika.jpg";
import Ayush from "../../images/Ayush.jpg";
import Shriya from "../../images/Shriya.jpg";

function Teams() {
  return (
    <div>
      <Header />

      <div className="container" style={{ paddingTop: "5rem" }}>
        <div
          className="alert alert-secondary"
          role="alert"
          style={{
            marginTop: "50px",
            width: "80%",
            marginLeft: "2.2rem",
            borderRadius: "10px"
          }}
        >
          <h4>Team Leads</h4>
        </div>
        <div className="row  mb-5">
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamLead
              Name="Umang Sharma"
              About="Android  Development"
              github=""
              twitter=""
              instagram=""
              linkedin=""
            />
          </div>

          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamLead
              Name="Vartika Dadheech"
              About="Content Lead"
              dp={Vartika}
              linkedin="https://www.linkedin.com/in/vartika-dadheech-505514191/"
              instagram="https://www.instagram.com/ms_lovegood1411/"
              github="https://github.com/dadheech-vartika"
              twitter="https://mobile.twitter.com/DadheechVartika"
            />
          </div>

          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamLead
              Name="Vijay Narayan Meena"
              About="Design Lead"
              github=""
              twitter=""
              instagram=""
              linkedin=""
            />
          </div>
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamLead
              Name="Pranav Verma"
              About="Machine Learning"
              github=""
              twitter=""
              instagram=""
              linkedin=""
            />
          </div>
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamLead
              Name="Ravi singh"
              About="Social Media Manager"
              github=""
              twitter=""
              instagram=""
              linkedin=""
            />
          </div>
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamLead
              Name="Ayush Srivastava"
              About="Web Development"
              dp={Ayush}
              linkedin="https://www.linkedin.com/in/ayush-srivastava-0b7156191/"
              instagram="https://www.instagram.com/ayush.sri/"
              github="https://github.com/ayush015"
              twitter="https://twitter.com/smackYeeeh"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="alert alert-secondary"
          role="alert"
          style={{
            // marginTop: "50px",
            width: "80%",
            marginLeft: "2.2rem",
            borderRadius: "10px"
          }}
        >
          <h4>Top Contributers</h4>
        </div>
        <div className="row  mb-5">
          <div className="col-lg-4  col-sm-12 mt-5 ">
            <TeamCard
              Name="Gaurav"
              img="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
              position="Web developer"
            />
          </div>
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamCard
              Name="Garima"
              img="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
              position="GitHub Team Maintainer"
            />
          </div>
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamCard
              Name="Satyam Singh Virat"
              img="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
              position="Content Writer"
            />
          </div>
        </div>
        <div className="row  mb-5">
          <div className="col-lg-4  col-sm-12 mt-5 ">
            <TeamCard
              Name="Rhythm Varshney"
              img="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
              position="Graphic Designing"
            />
          </div>
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamCard
              Name="Shriya Singh"
              img={Shriya}
              position="Graphic Designing"
            />
          </div>
          <div className="col-lg-4  col-sm-12 mt-5">
            <TeamCard
              Name="GurLeen Kaur"
              img="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
              position="BlockChain Developer"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Teams;
