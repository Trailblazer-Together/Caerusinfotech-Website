// import React from "react";
// // import photo from "./photo.png";

// function Services(props) {
//   return (
//     <div>
//       <div
//         className="alert alert-secondary"
//         role="alert"
//         style={{
//           marginTop: "50px",
//           width: "80%",
//           marginLeft: "14px",
//           borderRadius: "10px"
//         }}
//       >
//         <h4>Our Services</h4>
//       </div>
//       <div className="row">
//         <div className="col-lg-4 col-md-12">
//           <div className="card">
//             <div className="face face1">
//               <div className="content">
//                 <img
//                   alt=".."
//                   src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"
//                 />
//                 <h3>Design</h3>
//               </div>
//             </div>

//             <div className="face face2">
//               <div className="content">
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
//                   cum cumque minus iste veritatis provident at.
//                 </p>
//                 <a className="btn btn-outline-info" href="#">
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-12">
//           <div className="card">
//             <div className="face face1">
//               <div className="content">
//                 <img
//                   alt=".."
//                   src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"
//                 />
//                 <h3>Code</h3>
//               </div>
//             </div>
//             <div className="face face2">
//               <div className="content">
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
//                   cum cumque minus iste veritatis provident at.
//                 </p>
//                 <a className="btn btn-outline-info" href="#">
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-12">
//           <div className="card">
//             <div className="face face1">
//               <div className="content">
//                 <img
//                   alt=".."
//                   src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"
//                 />
//                 <h3>Launch</h3>
//               </div>
//             </div>
//             <div className="face face2">
//               <div className="content">
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
//                   cum cumque minus iste veritatis provident at.
//                 </p>
//                 <a className="btn btn-outline-info" href="#">
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Services;

import React from "react";
import photo from "./photo.png";

function Box(props) {
  return (
    <div className="">
      {/* <div className="row big_box">
        <div className="col-lg-6" style={{ width: "50%" }}>
          <img
            src={photo}
            style={{ width: "30%", display: "block", margin: "auto" }}
            alt="test"
          />
        </div>
        <div className="col-lg-6" style={{ width: "50%" }}>
          <div className="box">
            <h5>IDEATE / DESIGN</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              euismod molestie varius. Pellentesque tempor dictum dui aliquam
              ultricies. Sed varius ex quis metus auctor, non varius nulla
              mattis. Aenean a odio eu nunc rhoncus egestas quis laoreet neque.
              Aenean ut sollicitudin leo, vitae viverra massa.
            </p>
          </div>
        </div>

        <div className="col-lg-6" style={{ width: "50%" }}>
          <div className="box">
            <h5>DEVELOP / DEPLOY</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              euismod molestie varius. Pellentesque tempor dictum dui aliquam
              ultricies. Sed varius ex quis metus auctor, non varius nulla
              mattis. Aenean a odio eu nunc rhoncus egestas quis laoreet neque.
              Aenean ut sollicitudin leo, vitae viverra massa.
            </p>
          </div>
        </div>
        <div className="col-lg-6" style={{ width: "50%" }}>
          <img
            src={photo}
            style={{ width: "30%", display: "block", margin: "auto" }}
            alt="test"
          />
        </div>
      </div> */}
      <div
        className="alert alert-secondary"
        role="alert"
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          width: "80%",
          marginLeft: "14px",
          borderRadius: "10px"
        }}
      >
        {/* <Link className="btn btn-outline-dark" to="/Projects"> */}
        <h3>Activities</h3>
        {/* </Link> */}
      </div>
      <div className="row small_box">
        <div className="col-lg-3">
          <div className="box">
            <h5>Open source projects</h5>
            <p>
              From sharpest minds across the country working towards a project
              join hands with us, contribute, grow your skillset and most
              importantly get recognition.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="box">
            <h5>Webinars</h5>
            <p>
              Extend your knowledge base with informative webinars from well
              known developers & tech leads for free and learn new skills.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="box">
            <h5>Hackathon</h5>
            <p>
              Hackathon is a journey that we embark encouraging young minds to
              think differently and innovatively and collaborate with fellow
              Teammates of similar or different domains to solve real world
              challenges.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="box">
            <h5>Fun-with-Code</h5>
            <p>
              Love coding? Come participate in the coding competitions organised
              regularly in Quintessential community with leading programming
              languages and sharpen your skillset.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
