import React from "react";
import Card from "./cards";
import SocialMedia from "./socialMedia";
import shivam from "../../images/shivam.jpg";
import someOne from "../../images/someOne.jpg";
import Sanskar from "../../images/Sanskar.jpg";

function Image2() {
  return (
    <div>
      <div
        className="alert alert-secondary"
        role="alert"
        style={{
          marginTop: "50px",
          width: "80%",
          marginLeft: "1px",
          borderRadius: "10px"
        }}
      >
        <h4>Words from our Speaker</h4>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-lg-4  col-sm-12 ">
          <Card
            name="Shivam Agarwal"
            img={shivam}
            quote="SDE at CloudThing India"
            body="This community is doing a great job with all innovative minds clubbed together & it has been equally fulfilling experience to mentor them."
            facebook="https://www.facebook.com/shivam.0072"
            linkedin="https://www.linkedin.com/in/shivam-agarwal-0212"
          />
        </div>

        <div className="col-lg-4  col-sm-12 ">
          <div>
            <Card
              name="Shagun Varshney"
              img={someOne}
              quote="Database Developer at Capgemini"
              body="It's really great to mentor such exemplary projects, in a community full of young minds.Its not about work its about great work "
              facebook="https://www.facebook.com/shagun25"
              linkedin="hhttps://www.linkedin.com/in/shagun-varshney-265a2786"
            />
          </div>
        </div>

        <div className="col-lg-4  col-sm-12 ">
          <div>
            <Card
              name="Sanskar"
              img={Sanskar}
              quote="Junior Manager at Paytm"
              body="Looking at their dedication & skills I can vouch that these intellectual minds will go a long way."
              facebook="https://www.facebook.com/shagun25"
              linkedin="https://instagram.com/varshneysanskar?igshid=13oijp53r499o"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Image2;
