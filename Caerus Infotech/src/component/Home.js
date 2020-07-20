import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Project from "../layout/HomePage/projectsDisplay";
import Image2 from "../layout/HomePage/img2";
import Testimonial from "../layout/HomePage/Testimonial";
import Welcome from "../layout/HomePage/Welcome";
import Services from "../layout/HomePage/Services";
import Team from "../layout/HomePage/Team";

function Home() {
  const [top, setTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        setTop(true);
      } else {
        setTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [top]);

  return (
    <div>
      <Header color={top} />
      <Welcome />
      <div className="container">
        <Project />
        <Testimonial />
        <Services />
        <Image2 />
        <Team />
      </div>

      <Footer />
    </div>
  );
}
export default Home;
