import React, { Fragment } from "react";

import Home from "./Home/Home";
import About from "./About/About";
import Service from "./Service/Service";
import Carousel from "./Carousel/carousel";
import Facts from "./Facts/Facts";
import Contact from "./Contact/Contact";
import Footer from "../UI/Footer/Footer";
import Librairie from "../Layout/Librairie";

const sections = () => {
  return (
    <Fragment>
      <Home />
      <About />
      <Service />
      <Carousel />
      <Librairie />
      <Facts />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default sections;
