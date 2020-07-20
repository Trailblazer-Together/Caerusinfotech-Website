import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import yo from "../../images/Xenon.png";

const Press = () => {
  return (
    <>
      <Header />
      <div>
        {/* <img
          src={yo}
          width="800px"
          height="600px"
          style={{ margin: "10rem 40rem",maxWidth:"100%" ,padding:"0 2%" }}
        /> */}

        <h1
          style={{
            margin: "10rem 5rem",
            maxWidth: "100%",
            padding: "0 2%",
            color: "#000"
          }}
        >
          This Page is Under Maintenance
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Press;
