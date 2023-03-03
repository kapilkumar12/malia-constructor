import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

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
                    <a href="tel:9811065679"> +91 9811065679</a>
                  </li>
                  <li className="mx">
                    <a href="tel:8076191216"> +91 8076191216</a>
                  </li>
                  <li className="">
                    <span>
                      <EmailIcon />
                    </span>
                    <a href="mailto:maliacontractorcivil@gmail.com">
                      maliacontractorcivil@gmail.com
                    </a>
                  </li>
                  <li className="d-flex">
                    <span className="pt-2">
                      <PlaceIcon />
                    </span>
                    <p>
                      B-Block Flat No 201 Samdariya Complex New
                      <br /> Bus Stand Ward No 15 Madhya Pradesh.
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
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">Our Project Gallery</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
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
    </>
  );
};

export default Footer;
