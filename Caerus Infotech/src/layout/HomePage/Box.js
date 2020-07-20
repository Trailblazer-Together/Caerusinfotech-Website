// import React from "react";
// import photo from "./photo.png";

// function Box(props) {
//   return (
//     <div className="container">
//       <div className="row big_box">
//         <div className="col-lg-6" style={{ width: "50%" }}>
//           <img
//             src={photo}
//             style={{ width: "30%", display: "block", margin: "auto" }}
//             alt="test"
//           />
//         </div>
//         <div className="col-lg-6" style={{ width: "50%" }}>
//           <div className="box">
//             <h5>IDEATE / DESIGN</h5>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
//               euismod molestie varius. Pellentesque tempor dictum dui aliquam
//               ultricies. Sed varius ex quis metus auctor, non varius nulla
//               mattis. Aenean a odio eu nunc rhoncus egestas quis laoreet neque.
//               Aenean ut sollicitudin leo, vitae viverra massa.
//             </p>
//           </div>
//         </div>

//         <div className="col-lg-6" style={{ width: "50%" }}>
//           <div className="box">
//             <h5>DEVELOP / DEPLOY</h5>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
//               euismod molestie varius. Pellentesque tempor dictum dui aliquam
//               ultricies. Sed varius ex quis metus auctor, non varius nulla
//               mattis. Aenean a odio eu nunc rhoncus egestas quis laoreet neque.
//               Aenean ut sollicitudin leo, vitae viverra massa.
//             </p>
//           </div>
//         </div>
//         <div className="col-lg-6" style={{ width: "50%" }}>
//           <img
//             src={photo}
//             style={{ width: "30%", display: "block", margin: "auto" }}
//             alt="test"
//           />
//         </div>
//       </div>
//       <div className="row small_box">
//         <div className="col-lg-3">
//           <div className="box">
//             <h5>IDEATE</h5>
//             <p>
//               At in tellus integer feugiat scelerisque varius morbi Malesuada
//               pellentesque elit eget gravida cum Semper feugiat nibh sed
//             </p>
//           </div>
//         </div>
//         <div className="col-lg-3">
//           <div className="box">
//             <h5>Design</h5>
//             <p>
//               At in tellus integer feugiat scelerisque varius morbi Malesuada
//               pellentesque elit eget gravida cum Semper feugiat nibh sed
//             </p>
//           </div>
//         </div>
//         <div className="col-lg-3">
//           <div className="box">
//             <h5>Develop</h5>
//             <p>
//               At in tellus integer feugiat scelerisque varius morbi Malesuada
//               pellentesque elit eget gravida cum Semper feugiat nibh sed
//             </p>
//           </div>
//         </div>
//         <div className="col-lg-3">
//           <div className="box">
//             <h5>Develop</h5>
//             <p>
//               At in tellus integer feugiat scelerisque varius morbi Malesuada
//               pellentesque elit eget gravida cum Semper feugiat nibh sed
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Box;

import React from "react";
// import photo from "./photo.png";

function Services(props) {
  return (
    <div>
      {/* <div
        className="alert alert-secondary"
        role="alert"
        style={{
          marginTop: "50px",
          width: "80%",
          marginLeft: "14px",
          borderRadius: "10px"
        }}
      >
     
      </div> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img
                    alt=".."
                    src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"
                  />
                  <h3>Innovate</h3>
                </div>
              </div>

              <div className="face face2">
                <div className="content">
                  <p>
                    We have a wide range of innovative plans to fit your vision
                    and goals. Whether you have an already existing idea or need
                    help thinking creatively, we ensure to fulfill all.
                  </p>
                  <a className="btn btn-outline-info" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img
                    alt=".."
                    src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"
                  />
                  <h3>Explore</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Not sure which domain suits you best? Confused among
                    multiple options and eager to explore all? With us you can
                    explore, learn & gain experience in multiple domains.
                  </p>
                  <a className="btn btn-outline-info" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img
                    alt=".."
                    src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"
                  />
                  <h3>Collaborate</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Join hundreds of students in our supportive online
                    community. They’re always available to lend you support and
                    nudge you in the right direction.
                  </p>
                  <a className="btn btn-outline-info" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <img
                    alt=".."
                    src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"
                  />
                  <h3>Support</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>
                    Stuck at some point and feeling yourself needing assistance
                    of an expert? With us, you can have experts reach to you in
                    no time and get all your queries solved.
                  </p>
                  <a className="btn btn-outline-info" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
