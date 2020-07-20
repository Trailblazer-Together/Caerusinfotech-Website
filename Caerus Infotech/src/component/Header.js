import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import caerus from "../images/updatedlogo.png";

function Header(props) {
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
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top mb-5"
        style={{
          backgroundColor: top === false ? "#1f5f8b" : "#eee",
          boxShadow:
            top === false ? "" : "0px 6px 17px -9px rgba(0, 0, 0, 0.43)",
          height: top === false ? "" : "80px",
          transition: top === false ? "" : "all 0.3s ease 0s"
        }}
      >
        <div className="container">
          <Link className="animate__animated animate__lightSpeedInLeft" to="/">
            <img
              src={caerus}
              height="60px"
              width="200px"
              //  style={{padding:"0 auto"}}
            />
            {/* CI */}
          </Link>

          <button
            className="navbar-toggler collapsed "
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top " />
            <span className="middle-icon-bars middle " />
            <span className="icon-bar lower " />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            style={{
              backgroundColor: top === false ? "#1f5f8b" : "#eee",
              padding: top === false ? "" : "16px"
            }}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link" to="/Events">
                  Events
                </Link>
              </li>

              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Portfolio
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{
                    backgroundColor: top === false ? "#1f5f8b" : "#eee",
                    boxShadow: "0px 6px 17px -9px rgba(0, 0, 0, 0.43)"
                  }}
                >
                  <li className="nav-item ">
                    <Link className="nav-link" to="/Projects">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/Teams">
                      Teams
                    </Link>
                  </li>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Media
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{
                    backgroundColor: top === false ? "#1f5f8b" : "#eee",
                    boxShadow: "0px 6px 17px -9px rgba(0, 0, 0, 0.43)"
                  }}
                >
                  <li className="nav-item ">
                    <Link className="nav-link" to="/Gallery">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/Pressrelease">
                      Press Release
                    </Link>
                  </li>
                </div>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/contact">
                  Contacts
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link btn btn-outline-info"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe2MkVjOWPAviz3WKi03La1aDM2VUTObsLmwfCkfwy3MlTw2Q/viewform"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
