import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Whatsapp from "./Whatsapp";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.title = "Malia Construction - Our Services";
  }, []);
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="about-banner">
          <div className="about-banner-img"></div>
          <div className="about-banner-text">To Do</div>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Services;
