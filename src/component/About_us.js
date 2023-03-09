import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const About_us = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="about-banner">
          <div className="about-banner-img"></div>
          <div className="about-banner-text">
            malia contractor is a constuction company provinding all kind <br />
            of constuction work like structure,erecting, flooring and also in
            <br />
            garden and parks.
          </div>
        </div>
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col lg">
            <div className="row about-img">
              <div className="col lg">
                <div>
                  <img src="images/IMG-20230211-WA0068.jpg" alt="" />
                </div>
              </div>
              <div className="col lg">
                <div>
                  <img src="images/IMG-20230211-WA0063.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col lg">
                <div>
                  <video width="300" height="240" controls>
                    <source
                      src="images/WhatsApp Video 2023-02-11 at 18.20.19.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="col lg">
                <div>
                  <video width="300" height="240" controls>
                    <source
                      src="images/VID-20230211-WA0004.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="col lg">
            <div>
              <div className="pt-3">
                <h1>Malia Contractor</h1>
                <div className="about-red"></div>
              </div>

              <div className="about-content">
                <p className="pt-4">
                  malia contractor is a constuction company provinding all kind
                  of constuction work like structure,erecting, flooring and also
                  in garden and parks.
                </p>
                <p>
                  we are specialist in greet wash and having ecperience over 25+
                  years in this feild. we provide our service pan india and
                  currently working on multiple projects in jaipur indore and
                  hyderabad. our moto is your satisfaction  and qwality
                </p>
                <p>
                  Malia contractor is a construction company providing all kind
                  of construction work like structure, erecting, flooring and
                  also in garden and parks. we are specialist in greet wash and
                  having experience over 25+ years in this field.
                </p>
                <p>
                  we provide our service pan India and currently working on
                  multiple projects in Jaipur Indore and Hyderabad.
                </p>
                <p>
                  Our moto is your satisfaction and quality. We have strict
                  check on quality and have team of different team of specialist
                  for different work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About_us;
