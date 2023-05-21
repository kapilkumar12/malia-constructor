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

  // const clickBtanf = () => {
  //   var btanf = document.getElementById("toggleBtn1");
  //   if (btanf.style.backgroundColor === "green") {
  //     btanf.style.backgroundColor = "red";
  //   } else {
  //     btanf.style.backgroundColor = "green";
  //   }
  // };

  const clickPagef = () => {
    document.getElementById("page1").style.display = "block";
    document.getElementById("page2").style.display = "none";
  };
  // const btanCombinef = () => {
  //   clickBtanf();
  //   clickPagef();
  // };

  // const clickBtans = () => {
  //   var btans = document.getElementById("toggleBtn2");
  //   if (btans.style.backgroundColor === "green") {
  //     btans.style.backgroundColor = "red";
  //   } else {
  //     btans.style.backgroundColor = "green";
  //   }
  // };
  const clickPages = () => {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
  };
  // const btanCombineS = () => {
  //   clickPages();
  //   clickBtans();
  // };

  return (
    <>
      <Header />

      <div className="text-center pt-4 about-hea text-light bg-dark">
        <h1>OUR PROJECT Images</h1>
        <div className="redproject-line"></div>
      </div>
      <div className="container-fluid bg-dark">
        <div className="container p-5 " id="page1">
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

        {/* second page */}
        <div className="container p-5" id="page2">
          <div className="row">
            <div className="col-md-6">
              <div className="imageHover">
                <img src="images/p10.jpg" className="project2" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="imageHover">
                <img src="images/p11.jpg" className="project" alt="" />
              </div>

              <div className="imageHover">
                <img src="images/p12.jpg" className="project" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p13.jpg" className="project" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p14.jpg" className="project" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p15.jpg" className="project" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p16.PNG" className="project" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p17.PNG" className="project" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p18.PNG" className="project" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p19.jpg" className="project" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p20.jpg" className="project" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p22.jpg" className="project" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p23.jpg" className="project" alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p25.jpg" className="project" alt="" />
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="imageHover">
                <img src="images/p22.jpg" className="project" alt="" />
              </div>
            </div> */}
          </div>
        </div>
        <div className="text-center">
          <button class="page-btan" onClick={clickPagef} id="toggleBtn1">
            1
          </button>
          <button class="page-btan" onClick={clickPages} id="toggleBtn2">
            2
          </button>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default ProjectGallery;
