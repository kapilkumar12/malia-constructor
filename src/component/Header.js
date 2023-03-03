import React from "react";
import "./style.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

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
              Call Us:- <a href="tel:9811065679"> +91 9811065679</a>
            </li>
            <li>
              <span>
                <EmailIcon />
              </span>
              Email:-
              <a href="mailto:maliacontractorcivil@gmail.com">
                maliacontractorcivil@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg  navbar-light sticky-top py-0 pe-5">
        <a href="index.html" className="navbar-brand ps-5 me-0">
          <h1 className="text-white m-0">Industro</h1>
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
            <a href="index.html" className="nav-item nav-link ">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="service.html" className="nav-item nav-link">
              Services
            </a>

            <a href="service.html" className="nav-item nav-link">
              Our Project Gallery
            </a>
            <a href="contact.html" className="nav-item nav-link">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default Header;
