import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaTimes, FaBars } from "react-icons/fa";
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
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between w-100">
          <a className="navbar-brand" href="/">
            <img
              style={{ width: "30%", height: "auto" }}
              src={Logo}
              alt="Logo"
            />
            <span className="point align-middle">
              <i className="fas fa-circle fa-xs ml-1 text-danger px-1 mt-2" />
              re
            </span>
          </a>
          <button
            className={`navbar-toggler ${toggledNav ? "collapsed" : ""}`}
            type="button"
            onClick={toggleNav}
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded={toggledNav ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            {toggledNav ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`collapse navbar-collapse ${toggledNav ? "show" : ""}`}
          id="navbarCollapse"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a href="/Contact" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="/Bibliotheque" className="nav-link">
                Bibliotheque
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                À<span>propos</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="http://shop.mondistri.re" className="nav-link">
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
