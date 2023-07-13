import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import Logo from "../../../assets/img/Logo.png";

const Navbar = () => {
  const [navClass, setNavClass] = useState("");
  const [toggledNav, setToggledNav] = useState(false);

  const toggleNav = () => {
    setToggledNav(!toggledNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      let newNavClass = "";
      if (window.scrollY >= 200) {
        newNavClass = "scrolled";
      }
      setNavClass(newNavClass);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navigation navbar navbar-expand-md bg-light ${navClass}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img style={{ width: "20%", height: "auto" }} src={Logo} alt="Logo" />
          < faCircle/>
          <span>re</span>
        </a>
        <div
          className={`navbar-toggler nav-icon ${toggledNav ? "open" : ""}`}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </div>
        <div className={`collapse navbar-collapse ${toggledNav ? "show" : ""}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" offset={-120} classes="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" offset={-120} classes="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link target="about" classes="nav-link">
                À<span>propos</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link target="services" classes="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link target="carousel" classes="nav-link">
                Images
              </Link>
            </li>
            <li className="nav-item">
              <Link target="librairie" classes="nav-link">
                Librairie
              </Link>
            </li>
            <li className="nav-item">
              <a href="http://shop.mondistri.re" className="nav-link">
                <i className="facts-icon " />
                <FaShoppingCart />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
