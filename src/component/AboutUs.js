import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Whatsapp from "./Whatsapp";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.title = "Malia Construction - About Malia Construction";
  }, []);
  return (
    <>
      <Header />
      <div className="container-fluid pl-0 pr-0">
        <div className="about-banner">
          <div className="about-banner-img"></div>
          <div className="about-banner-text">
            Malia construction is a construction company provinding all kind{" "}
            <br />
            of constuction work like structure,erecting, flooring and also in
            <br />
            garden and parks.
          </div>
        </div>
      </div>
      <div className="container pt-5" data-aos="zoom-in">
        <div className="row">
          <div className="pt-3">
            <h1 className="theme-color">Malia Construction</h1>
            <div className="about-red"></div>
          </div>

          <div className="about-content">
            <p className="pt-4">
              Malia construction is a constuction company provinding all kind of
              constuction work like structure,erecting, flooring and also in
              garden and parks.
            </p>
            <p>
              We are specialist in greet wash and having experience over 25+
              years in this feild. Our moto is your satisfaction  and qwality
            </p>
            <p>
              Malia construction is a construction company providing all kind of
              construction work like structure, erecting, flooring and also in
              garden and parks. we are specialist in greet wash and having
              experience over 25+ years in this field.
            </p>
            <p>
              We provide our service pan India and currently working on multiple
              projects in Jaipur Indore and Hyderabad.
            </p>
            <p>
              At Malia construction, safety is our top priority. We follow
              strict safety protocols and regulations to ensure a safe working
              environment for our workers and clients.
            </p>
            <p>
              Our clients trust us to deliver projects that meet their unique
              needs and exceed their expectations.
            </p>
            We have completed numerous projects, both big and small, for
            residential and commercial clients. <br />
            <h2 className="theme-color mt-3">Our Portfolio Includes:</h2>
            <div className="pb-3">
              <li>Residential homes</li>
              <li>Retail stores</li>
              <li>Office buildings</li>
              <li>Restaurants</li>
              <li>Schools</li>
              <li>Hospitals</li>
            </div>
            <p>
              Ready to start your construction project? Contact us today to
              schedule a consultation. Our team will work with you to provide a
              detailed project plan and a competitive quote.
            </p>
            <p>
              Thank you for considering Malia construction for your construction
              needs. We look forward to working with you.
            </p>
          </div>
        </div>

        <div className="row about-img">
          <div className="col-md-6">
            <div className="imageHover">
              <img src="images/9.jpeg" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="imageHover">
              <img src="images/IMG-20230211-WA0063.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default AboutUs;
