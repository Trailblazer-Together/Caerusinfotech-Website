import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import contact from "../images/contact.jpg";

function Contact() {
  return (
    <div>
      <Header />
      <div className="">
        <section id="contact-section">
          {/* <img src={contact} /> */}
          <div className="contact-container">
            <h2 style={{ padding: "7rem 0 2rem 0" }}>Contact Us</h2>
            <p>
              Want to discuss innovative ideas? Have queries? Need support? We
              are always here
            </p>

            <div className="contact-form">
              <div>
                <i className="fa fa-map-marker" />
                <span className="form-info"> Bengaluru</span>
                <br />
                <i className="fa fa-phone" />

                <span className="form-info">
                  <a
                    href="tel:+919456622845"
                    style={{ testDecoration: "none" }}
                  >
                    +91-9456622845
                  </a>
                </span>

                <br />
                <i className="fa fa-envelope" />
                <span className="form-info">
                  <a
                    href="mailto:info@caerusinfotech.tech"
                    style={{ testDecoration: "none" }}
                  >
                    info@caerusinfotech.tech
                  </a>
                </span>
                {/* info@caerusinfotech.tech */}
              </div>
              <div>
                <form method="POST" action="info@caerusinfotech.tech">
                  <input type="text" placeholder="Your Name" required />
                  <input type="text" placeholder="Last Name" />
                  <br />
                  <input type="Email" placeholder="Email" required />
                  <br />
                  <input type="text" placeholder="Subject of this message" />
                  <br />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    required
                  />
                  <br />
                  <button className="submit" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
