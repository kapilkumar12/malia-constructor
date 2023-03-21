import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Whatsapp from "./Whatsapp";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectGallery = () => {
  useEffect(() => {
    document.title = "Malia Construction - Our Project Gallery ";
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />

      <div className="text-center pt-4 about-hea text-light bg-dark">
        <h1>OUR PROJECT GALLERY</h1>
        <div className="redproject-line"></div>
      </div>
      <div className="container-fluid bg-dark">
        <div className="container p-5 ">
          <div className="row">
            <div className="col-md-6">
              <div className="imageHover">
                <img
                  src="images/IMG-20230211-WA0082.jpg"
                  className="project2"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="imageHover">
                <img
                  src="images/IMG-20230211-WA0100.jpg"
                  className="project"
                  alt=""
                />
              </div>

              <div className="imageHover">
                <img
                  src="images/IMG-20230211-WA0099.jpg"
                  className="project"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p1.jpg" className="project" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p2.jpg" className="project" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p3.jpg" className="project" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="imageHover">
                <img src="images/p4.jpg" className="project" alt="" />
              </div>

              <div className="imageHover">
                <img src="images/p5.jpg" className="project" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="imageHover">
                <img src="images/p6.jpg" className="project2" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p7.jpg" className="project" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p8.jpg" className="project" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p9.jpg" className="project" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default ProjectGallery;
