import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="container">
          <div className="row row-cols-3 office  ">
            <div className="col office1 ">
              <h3>Our Office</h3>
              <div className="">
                <ul>
                  <li>
                    <span>
                      <LocalPhoneIcon />
                    </span>
                    <a to="tel:9811065679"> +91 9811065679</a>
                  </li>
                  <li className="mx">
                    <a to="tel:8076191216"> +91 8076191216</a>
                  </li>
                  <li className="">
                    <span>
                      <EmailIcon />
                    </span>
                    <Link to="mailto:maliacontractorcivil@gmail.com">
                      maliacontractorcivil@gmail.com
                    </Link>
                  </li>
                  <li className="d-flex">
                    <span className="pt-2">
                      <PlaceIcon />
                    </span>
                    <p>
                      <Link to="https://g.co/kgs/NQggwA">
                        <span>
                          235, Street Number 6, Palam Colony, Sadh Nagar, Palam,
                          New Delhi, Delhi 110045
                        </span>
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col links">
              <h3>Quick Links</h3>
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about_us">About</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Our Project Gallery</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col work-hours">
              <h3>Our Work Hours</h3>
              <div>
                <ul>
                  <li>Monday - Sunday</li>
                  <li>
                    <b>10Am - 06Pm</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        Copyright © 2023 Malia Contractor All right reserved.
      </div>
    </>
  );
};

export default Footer;
