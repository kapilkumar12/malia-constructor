import React, { useEffect, useState } from "react";
import "./style.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
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
          <ul className="header-first">
            <li>
              <span>
                <LocationOnIcon />
              </span>
              Address:-
              <Link to="https://g.co/kgs/NQggwA">
                235, Street Number 6, Palam Colony, Sadh Nagar, Palam, New
                Delhi, Delhi 110045
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Navbar Start --> */}
      <nav
        className={`navbar navbar-expand-lg  navbar-light  py-0 ${
          sticky ? "sticky" : ""
        }`}
      >
        <a href="index.html" className="navbar-brand  me-0">
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
            {/* <Link to="/" className="nav-item nav-link ">
              Home
            </Link> */}

            <Link
              className={`nav-item nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              Home
            </Link>

            <Link
              className={`nav-item nav-link ${
                location.pathname === "/about_us" ? "active" : ""
              }`}
              to="/about_us"
            >
              About Us
            </Link>
            <Link
              className={`nav-item nav-link ${
                location.pathname === "/services" ? "active" : ""
              }`}
              to="/services"
            >
              Services
            </Link>
            <li className="dropdown">
              <Link
                className={`nav-item nav-link ${
                  location.pathname === "/gallery" ? "active" : ""
                }`}
                to=" "
              >
                Our Project Gallery
              </Link>
              <div className="dropdown-content">
                <Link to="/gallery">Project Images</Link>

                <Link to="/videos">Project Videos</Link>

                {/* <Link to="/office-relocation">Office Relocation</Link>

                <Link to="/rental-assistance">Rental Assistance</Link>

                <Link to="/service-apartments">Service Apartments</Link> */}
              </div>
            </li>

            <Link
              className={`nav-item nav-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
              to="/contact"
            >
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
