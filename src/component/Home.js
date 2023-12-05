import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Whatsapp from "./Whatsapp";
import { Link } from "react-router-dom";
import Box from "./Box";

const Home = () => {
  useEffect(() => {
    document.title = "Malia Construction -  Best Home Construction Company";
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  const [counters, setCounters] = useState([
    { id: 1, count: 0, end: 500, title: "SATISFIED CLIENTS" },
    { id: 2, count: 0, end: 200, title: "COMPANY MEMBERS" },
    { id: 3, count: 0, end: 25, title: "YEARS EXPERIENCE" },
    { id: 4, count: 0, end: 2000, title: "Complete Projects" },
  ]);

  useEffect(() => {
    const updateCounters = () => {
      setCounters((prevCounters) =>
        prevCounters.map((counter) => {
          const newCount = counter.count + 1;
          if (newCount >= counter.end) {
            return counter;
          }
          return { ...counter, count: newCount };
        })
      );

      requestAnimationFrame(updateCounters);
    };

    const animationFrame = requestAnimationFrame(updateCounters);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <Header />

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

      <div className="container-fluid bg-light p-3">
        <div className="container">
          <div className="row">
            <h1>
              Transforming Visions into Structures: Malia Construction's 25
              Years of Excellence in Civil Services
            </h1>
            <h2>A Legacy of Precision and Innovation</h2>
            <p>
              In the dynamic realm of civil services, Malia Construction stands
              as a beacon of excellence with an illustrious 25-year journey
              characterized by unwavering commitment, precision, and innovative
              construction solutions. Specializing in a diverse array of
              projects, the company has significantly contributed to shaping the
              urban landscape through its adept handling of residential homes,
              retail stores, office buildings, restaurants, schools, and
              hospitals.
            </p>
            <h2>Building Homes that Echo Dreams</h2>
            <p>
              Malia Construction has become synonymous with turning residential
              dreams into reality. With a quarter-century of experience, the
              company approaches residential projects with an acute
              understanding of individual aspirations, ensuring that each home
              reflects both structural integrity and personal dreams. From
              modest abodes to luxurious estates, Malia Construction leaves an
              indelible mark on the housing landscape, blending functionality
              with aesthetic appeal.
            </p>
            <h2>Retail Spaces Crafted for Success</h2>
            <p>
              Understanding the pivotal role of retail environments in today's
              market, Malia Construction has mastered the art of creating spaces
              that not only house businesses but elevate brand presence. Whether
              it's a flagship store or a boutique setting, the company's
              expertise in retail construction ensures that each space is
              tailored to enhance the customer experience, fostering success for
              businesses within.
            </p>
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="container-fluid " data-aos="fade-right">
        <div className="container">
          <div className="about-hea mt-3">
            <h4 className="procedure_heading">About Us</h4>
            <div className="about-line"></div>
          </div>
          <div className="row common-shadow ml-0 mr-0 p-2 rounded my-3">
            <div className="col-lg-6 about-img">
              <div className="imageHover">
                <img src="images/img3.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about">
                <h3 className="">Malia Constructions</h3>
                <p className="">
                  Malia construction is a constuction company provinding all
                  kind of constuction work like structure,erecting, flooring and
                  also in garden and parks. we are specialist in greet wash and
                  having ecperience over 25+ years in this feild. <br /> We
                  provide our service pan India and currently working on
                  multiple projects in Jaipur Indore and Hyderabad. <br /> At
                  Malia construction, safety is our top priority. We follow
                  strict safety protocols and regulations to ensure a safe
                  working environment for our workers and clients.
                  <Link to="/about_us">Read more...</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light px-3 py-4 my-3">
        <div className="container">
          <div className="row">
            {counters.map((counter) => (
              <div className="col-sm-3" key={counter.id}>
                <div className="counter-box common-shadow p-2 rounded text-center">
                  <p>{counter.count}</p>
                  <p className="theme-color ">{counter.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* work procedure section */}

      <div className="container-fluid procedure" data-aos="fade-right">
        <div className="container pb-5">
          <div>
            <h2 className="procedure_heading">OUR WORK PROCEDURE</h2>
            <div className="procedure-line"></div>
          </div>
          <div className="row procedure-box-section1 pt-5">
            <div className="col-lg-4 mb-3">
              <Box
                heading="Pre-construction Planning"
                paragraph=" This step involves developing a detailed plan for the construction
            project, including design, budget, timeline, and materials needed.
            The construction company will work with architects, engineers, and
            other professionals to finalize the plans."
              />
            </div>
            <div className="col-lg-4 mb-3">
              <Box
                heading="Bidding and Contracting"
                paragraph=" In this step, the construction company will submit a bid to
                    the client, detailing the estimated cost and timeline for
                    the project. If the bid is accepted, the construction
                    company will enter into a contract with the client to
                    proceed with the project."
              />
            </div>

            <div className="col-lg-4 mb-3">
              <Box
                heading="Permitting"
                paragraph="Depending on the location and scope of the project, the
                    construction company may need to obtain various permits from
                    local, state, and federal authorities."
              />
            </div>
            <div className="col-lg-4 mb-3">
              <Box
                heading="Mobilization"
                paragraph=" Once the project is approved and the necessary permits are
                    obtained, the construction company will begin mobilizing its
                    resources, including equipment, materials, and personnel."
              />
            </div>
            <div className="col-lg-4 mb-3">
              <Box
                heading="Construction"
                paragraph="This is the main phase of the project, during which the
                    construction company will build the structure according to
                    the approved plans and specifications."
              />
            </div>
            <div className="col-lg-4 mb-3">
              <Box
                heading="Quality Control"
                paragraph="Throughout the construction process, the construction
                    company will perform quality control checks to ensure that
                    the work meets the required standards and specifications."
              />
            </div>
            <div className="col-lg-4 mb-3">
              <Box
                heading="Punch List and Closeout"
                paragraph=" Upon completion of the construction work, the construction
                    company will complete a final inspection, known as the punch
                    list, to identify any outstanding items that need to be
                    addressed. Once the punch list is complete, the construction
                    company will close out the project and transfer ownership to
                    the client."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cotainer-fluid bg-light p-3">
        <div className="container">
          <div className="row">
            <h2>Office Buildings - Where Innovation Meets Functionality</h2>
            <p>
              In the corporate realm, Malia Construction has proven itself as a
              key player in crafting innovative office spaces. Understanding the
              evolving needs of modern businesses, the company seamlessly
              integrates cutting-edge design with functional efficiency. From
              open-concept workspaces to state-of-the-art corporate
              headquarters, Malia Construction is dedicated to building
              environments that inspire productivity and collaboration.
            </p>
            <h2>Savoring Success – Restaurants Redefined</h2>
            <p>
              Malia Construction's influence extends to the culinary landscape,
              where it has left an indelible mark on restaurant construction.
              Recognizing the unique demands of the hospitality industry, the
              company brings its wealth of experience to create spaces that
              marry ambiance with practicality. Whether it's a cozy café or a
              high-end restaurant, Malia Construction transforms culinary
              visions into inviting, functional spaces.
            </p>
            <h2>Nurturing Minds – Schools as Foundations of the Future</h2>
            <p>
              Education is a cornerstone of societal progress, and Malia
              Construction plays a crucial role in shaping educational spaces.
              From elementary schools to higher education institutions, the
              company's commitment to constructing safe, inspiring learning
              environments is evident. Malia Construction understands that
              educational facilities are more than buildings; they are the
              foundations of future generations.
            </p>
          </div>
        </div>
      </div>
      {/* project gallery section start */}
      <div className="container p-3" data-aos="zoom-in">
        <div className="about-hea">
          <h2 className="procedure_heading">Our Project Gallery</h2>
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
          <Link
            type="button"
            to="/gallery"
            className="btn btn-md btn-outline-info"
          >
            See more...
          </Link>
        </div>
      </div>
      {/* project gallery section end */}
      <div className="container-fluid bg-light p-3">
        <div className="container">
          <div className="row">
            <h2>Healing Spaces – Hospitals Designed for Well-being</h2>
            <p>
              In the realm of healthcare, Malia Construction's expertise extends
              to crafting hospitals that prioritize well-being. Understanding
              the unique challenges of healthcare construction, the company
              integrates functionality with a focus on patient comfort and staff
              efficiency. Malia Construction's contributions to hospital
              construction underscore its dedication to creating spaces that
              facilitate healing and well-being.
            </p>
            <h2>A Quarter-Century of Excellence</h2>
            <p>
              Malia Construction's 25-year journey is a testament to its
              unwavering commitment to excellence in civil services. From
              residential dreams to corporate innovations, the company has left
              an indelible mark on diverse construction projects. As it looks
              towards the future, Malia Construction remains a steadfast partner
              for those seeking construction solutions that transcend
              expectations, blending experience with innovation to shape the
              structures of tomorrow.
            </p>
          </div>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Home;
