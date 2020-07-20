import React from "react";
// import SocialMedia from "../../layout/HomePage/socialMedia";
import Header from "../Header";
import Footer from "../Footer";
import Modals from "../../layout/HomePage/modals";
import icons from "../../layout/HomePage/picture.png";
// import TeamCard from "../../layout/TeamCard";
// import Team from "../../layout/HomePage/Team";
// import Card from "../../layout/HomePage/cards";

function Projects() {
  return (
    <div>
      <Header />
      <div className="container">
        <div
          className="alert alert-secondary"
          role="alert"
          style={{
            marginTop: "7rem",
            width: "80%",
            marginLeft: "14px",
            borderRadius: "10px"
          }}
        >
          <h4>Projects</h4>
        </div>
        <div className="row mt-5 mb-5 ">
          <div className="col-lg-4  col-sm-12 ">
            <div className="card " style={{ margin: "1rem" }}>
              <img
                src="https://lh3.googleusercontent.com/proxy/jjpculHiPUNNuwN3FRSfVx6cA56XzJUhtyxQIw__Lr3RLXguP1KMzQTlv53lNtW2SIOT4cAhzbaMYzE13USTK48Oc2ofLrf9Jec"
                className="card-img-top"
                alt="..."
                height="300px"
                width="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Helmet detection</h5>

                <Modals
                  title="Helmet detection"
                  content="A customized project which detects traffic rules violation by
                  tracking & checking that a helmet is worn by every two-wheeler
                  rider."
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-sm-12 ">
            <div className="card " style={{ margin: "1rem" }}>
              <img
                src="https://www.bluerange.io/images/top5healthcare.png"
                className="card-img-top"
                alt="..."
                height="300px"
                width="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Tracking hospital beds</h5>
                <Modals
                  title="Tracking hospital beds"
                  content="  A customized android & web application using Maps to track the
                nearby hospitals which & provide information about the
                availability of beds and facilities in that particular hospital."
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-sm-12 ">
            <div className="card " style={{ margin: "1rem" }}>
              <img
                src="https://socialimages.sakalmediagroup.com/sakaltimes-prod/s3fs-public/styles/generic_md_75/public/news-story/cover-images/3Pune_DESs_SNFL_college_onli.jpg"
                className="card-img-top"
                alt="..."
                height="300px"
                width="300px"
              />
              <div className="card-body">
                <h5 className="card-title">Educational App</h5>
                {/* <p className="card-text">
                  (with short description detailed will be when user clicks over
                  Read More )
                </p> */}

                <Modals
                  title="Educational App"
                  content="This app is a free suite of productivity tools that includes email, documents, and storage. This help teachers save time, keep classes organized, take virtual classes and improve communication with students."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-5 ">
          {/* <div className="col-lg-4  col-sm-12 ">
            <div className="card " style={{ margin: "1rem" }}>
              <img src={icons} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Project title</h5>
                <p className="card-text">
                  (with short description detailed will be when user clicks over
                  Read More )
                </p>

                <Modals
                  title="Ayush"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-4  col-sm-12 ">
            <div className="card " style={{ margin: "1rem" }}>
              <img src={icons} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Project title</h5>
                <p className="card-text">
                  (with short description detailed will be when user clicks over
                  Read More )
                </p>

                <Modals
                  title="Lorem"
                  content="Pulvinar pellentesque habitant morbi tristique senectus et netus et. 
                In tellus integer feugiat scelerisque. 
                Vulputate ut pharetra sit amet aliquam id diam. 
                Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. 
                Ac orci phasellus egestas tellus rutrum. 
                Suscipit tellus mauris a diam maecenas. 
                Amet consectetur adipiscing elit duis tristique. 
                Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. 
                Nibh tortor id aliquet lectus proin nibh nisl condimentum id. 
                Consequat semper viverra nam libero justo laoreet sit amet. 
                Lobortis mattis aliquam faucibus purus in massa. 
                Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. 
                Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. 
                Id consectetur purus ut faucibus pulvinar elementum integer enim neque. 
                Sed vulputate mi sit amet mauris. A cras semper auctor neque vitae tempus quam."
                />
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-4  col-sm-12 ">
            <div className="card " style={{ margin: "1rem" }}>
              <img src={icons} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Project title</h5>
                <p className="card-text">
                  (with short description detailed will be when user clicks over
                  Read More )
                </p>

                <Modals
                  title="Ipsum"
                  content="Massa tincidunt dui ut ornare lectus sit amet est placerat. 
                Sed faucibus turpis in eu mi bibendum neque egestas. Mauris ultrices eros in cursus. 
                Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Lobortis mattis aliquam faucibus purus in. 
                Parturient montes nascetur ridiculus mus. Euismod elementum nisi quis eleifend quam. Aliquam etiam erat velit scelerisque in dictum non. Et tortor at risus viverra adipiscing at. 
                Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Mi bibendum neque egestas congue quisque egestas. Id volutpat lacus laoreet non curabitur gravida. 
                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. 
                Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Vitae congue eu consequat ac felis donec."
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
