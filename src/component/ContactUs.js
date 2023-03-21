import React, { useEffect, useState } from "react";
// import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import Whatsapp from "./Whatsapp";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Malia Construction - Contact us for youe query";
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const handleRequest = async (e) => {
    if (name && email && subject && message !== "") {
      if (message !== "") {
        e.preventDefault();
        // setLoading(true);
        console.log({ name, email, subject, message });

        const body = {
          name,
          email,
          subject,
          message,
        };

        await fetch("http://localhost:8006/register", body, {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            alert("Email Sent Successfully");
            // setLoading(false);
            console.log(res);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            // setLoading(false);
          });
      }
    } else {
      alert("Please fill all required filled");
    }
  };
  return (
    <>
      <Header />

      <div className="container-fluid ">
        {/* <div className="contact-banner-img"></div> */}
        <div className="contact-banner">
          <div className="contact-banner-img"></div>
          <div className="contact-banner-text">
            Dreams are meant to come true. <br /> We’ll make it happen for you.
            <div className="contact-btn">
              <a type="button" href="#contact" className="btn btn-danger">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container contact-section bg-light p-5"
        id="contact"
        data-aos="zoom-in"
      >
        <div className="row">
          <div className="col-lg-6">
            <div className="row justify-content-center">
              <div className="col-lg-12 pt-5">
                <div>
                  <h1 className="mb-3">Contact Us</h1>
                  <div className="contact-red"></div>
                </div>

                <form onSubmit={handleRequest} method="post">
                  <div className=" pt-4">
                    <label htmlFor="your-name" className="form-label">
                      Your Name
                    </label>
                    <input
                      id="name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>

                  <div className=" pt-4">
                    <label htmlFor="your-email" className="form-label">
                      Your Email
                    </label>
                    <input
                      id="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      type="text"
                      placeholder="Enter Your valid Email"
                    />
                  </div>
                  <div className=" pt-4">
                    <label htmlFor="your-subject" className="form-label">
                      Your Subject
                    </label>
                    <input
                      id="subject"
                      className="form-control"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      type="text"
                      placeholder="Add Subject"
                    />
                  </div>
                  <div className=" pt-4">
                    <label htmlFor="your-message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      className="form-control"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      type="text"
                      rows="5"
                      placeholder="Type your message.."
                    ></textarea>
                  </div>
                  <div className="col-12 pt-4">
                    <div className="row">
                      <div className="col-md-6">
                        <button
                          onClick={handleRequest}
                          type="submit"
                          className="btn btn-danger w-100 fw-bold"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-img">
              <img src="images/contact-vector.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container map" data-aos="zoom-in">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14013.683012971273!2d77.0907995!3d28.5871518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b2ffc8073bd%3A0xba7a50742c28f30c!2sMalia%20Contactor!5e0!3m2!1sen!2sin!4v1678274856836!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="myLocation"
        ></iframe>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default ContactUs;
