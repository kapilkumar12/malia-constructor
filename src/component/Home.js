import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Whatsapp from "./Whatsapp";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Malia Construction -  Best Home Construction Company";
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      {/* slider */}
      {/* slider */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/slider1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h1>
                Making your vision <br /> a reality.
              </h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/construction.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption  d-md-block">
              <h1>
                Bringing your plans <br /> to life.
              </h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/b-tech-in-civil-engineering.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption  d-md-block">
              <h1>
                Making your dream <br /> home a reality.
              </h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* about us */}
      <div className="container-fluid bg-dark" data-aos="fade-right">
        <div className="container">
          <div className="about-hea">
            <h1>About Us</h1>
            <div className="about-line"></div>
          </div>
          <div className="row ">
            <div className="col-lg-6 about-img">
              <div className="row">
                <div className="col-md-6">
                  <div className="imageHover">
                    <img src="images/img1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="imageHover">
                    <img src="images/img2.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="imageHover">
                    <img src="images/img3.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="imageHover">
                    <img src="images/img4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about">
                <h3 className="text-light">Malia Constructions</h3>
                <p className="text-light">
                  Malia construction is a constuction company provinding <br />
                  all kind of constuction work like structure,erecting, <br />
                  flooring and also in garden and parks. we are specialist
                  <br /> in greet wash and having ecperience over 25+ years
                  <br /> in this feild. <Link to="/about_us">Read more...</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* work procedure section */}
      {/* data-aos="fade-left" */}
      <div className="container-fluid procedure bg-dark " data-aos="fade-right">
        <div className="container pb-5">
          <div>
            <h1>OUR WORK PROCEDURE</h1>
            <div className="procedure-line"></div>
          </div>
          <div className="row row-cols-4  procedure-box-section1 pt-5">
            <div className="col">
              <div className="d-flex box1 gap-1">
                <div>
                  <img src="images/procedure2-removebg-preview.png" alt="" />
                </div>
                <div>
                  <h3>Pre-construction Planning</h3>
                  <p>
                    This step involves developing a detailed plan for the
                    construction project, including design, budget, timeline,
                    and materials needed. The construction company will work
                    with architects, engineers, and other professionals to
                    finalize the plans.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex box2 gap-1">
                <div>
                  <img src="images/procedure5-removebg-preview.png" alt="" />
                </div>
                <div>
                  <h3>Bidding and Contracting</h3>
                  <p>
                    In this step, the construction company will submit a bid to
                    the client, detailing the estimated cost and timeline for
                    the project. If the bid is accepted, the construction
                    company will enter into a contract with the client to
                    proceed with the project.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex box3 gap-1">
                <div>
                  <img src="images/procedure4-removebg-preview.png" alt="" />
                </div>
                <div>
                  <h3>Permitting</h3>
                  <p>
                    Depending on the location and scope of the project, the
                    construction company may need to obtain various permits from
                    local, state, and federal authorities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex box4 gap-1">
                <div>
                  <img src="images/procedure3-removebg-preview.png" alt="" />
                </div>
                <div>
                  <h3>Mobilization</h3>
                  <p>
                    Once the project is approved and the necessary permits are
                    obtained, the construction company will begin mobilizing its
                    resources, including equipment, materials, and personnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-3 procedure-box-section2 pt-5">
            <div className="col">
              <div className="d-flex box5 gap-1">
                <div>
                  <img src="images/procedure6-removebg-preview.png" alt="" />
                </div>
                <div>
                  <h3>Construction</h3>
                  <p>
                    This is the main phase of the project, during which the
                    construction company will build the structure according to
                    the approved plans and specifications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex box6 gap-1">
                <div>
                  <img src="images/procedure7-removebg-preview.png" alt="" />
                </div>
                <div>
                  <h3>Quality Control</h3>
                  <p>
                    Throughout the construction process, the construction
                    company will perform quality control checks to ensure that
                    the work meets the required standards and specifications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex box7 gap-1">
                <div>
                  <img src="images/procedure1-removebg-preview.png" alt="" />
                </div>
                <div>
                  <h3>Punch List and Closeout</h3>
                  <p>
                    Upon completion of the construction work, the construction
                    company will complete a final inspection, known as the punch
                    list, to identify any outstanding items that need to be
                    addressed. Once the punch list is complete, the construction
                    company will close out the project and transfer ownership to
                    the client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our services section start */}
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6"></div>
          </div>
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
      {/* our services section end */}
      {/* project gallery section start */}
      <div className="container pb-5" data-aos="zoom-in">
        <div className="about-hea text-dark">
          <h1>Our Project Gallery</h1>
          <div className="procedure-line"></div>
        </div>

        <div className="row ">
          <div className="col-md-6">
            <div className="imageHover">
              <img
                src="images/IMG-20230211-WA0045.jpg"
                className="project"
                alt=""
              />
            </div>
            <div className="imageHover">
              <img
                src="images/IMG-20230211-WA0082.jpg"
                className="project"
                alt=""
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="imageHover">
              <img
                src="images/IMG-20230211-WA0079.jpg"
                className="project1"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="text-center pt-5">
          <Link type="button" to="/gallery" className="btn btn-danger">
            See more...
          </Link>
        </div>
      </div>
      {/* project gallery section end */}
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Home;
