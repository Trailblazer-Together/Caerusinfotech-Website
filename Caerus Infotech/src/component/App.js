import React from "react";
import Home from "./Home";
import Contact from "./contact";
import Event from "./Events";
import Teams from "./portfolio/Teams";
import Projects from "./portfolio/Projects";
import Gallery from "./media/Gallery";
import Press from "./media/PressRelease";
import About from "./About";

// import Header from "./Header";
// import Footer from "./Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Events" exact component={Event} />
          <Route path="/Teams" exact component={Teams} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/Gallery" exact component={Gallery} />
          <Route path="/PressRelease" exact component={Press} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}
