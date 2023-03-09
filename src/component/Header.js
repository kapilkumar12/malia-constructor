import React from "react";
import "./style.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="header">
          <ul className="header-first">
            <li>
              <span>
                <LocalPhoneIcon />
              </span>
              Call Us:- <Link to="tel:9811065679"> +919811065679</Link>
            </li>
            <li>
              <span>
                <EmailIcon />
              </span>
              Email:-
              <Link to="mailto:maliacontractorcivil@gmail.com">
                maliacontractorcivil@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg  navbar-light sticky-top py-0 pe-5">
        <a href="index.html" className="navbar-brand ps-5 me-0">
          <h1 className="text-white m-0">
            <img
              src="images/logo.png"
              alt="Malia Contructor"
              className="logo"
            />
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link ">
              Home
            </Link>
            <Link to="/about_us" className="nav-item nav-link">
              About
            </Link>
            <Link to="/service" className="nav-item nav-link">
              Services
            </Link>

            <Link to="/gallery" className="nav-item nav-link">
              Our Project Gallery
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default Header;
