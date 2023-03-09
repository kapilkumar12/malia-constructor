import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Contact_us = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="contact-banner">
          <div className="contact-banner-img"></div>
          <div className="contact-banner-text">
            <p>
              Dreams are meant to come true. <br /> We’ll make it happen for
              you.
              <br />
              <div className="contact-btn">
                <a type="button" href="#contact" className="btn btn-danger">
                  Contact us
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>

      <div className="container contact-section bg-light p-5" id="contact">
        <div className="row">
          <div className="col lg">
            <div className="row justify-content-center">
              <div className="col-lg-12 pt-5">
                <div>
                  <h1 className="mb-3">Contact Us</h1>
                  <div className="contact-red"></div>
                </div>

                <form>
                  <div className=" pt-4">
                    <label htmlFor="your-name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="your-name"
                      name="your-name"
                      required
                    />
                  </div>

                  <div className=" pt-4">
                    <label htmlFor="your-email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="your-email"
                      name="your-email"
                      required
                    />
                  </div>
                  <div className=" pt-4">
                    <label htmlFor="your-subject" className="form-label">
                      Your Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="your-subject"
                      name="your-subject"
                    />
                  </div>
                  <div className=" pt-4">
                    <label htmlFor="your-message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="your-message"
                      name="your-message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12 pt-4">
                    <div className="row">
                      <div className="col-md-6">
                        <button
                          data-res="<?php echo $sum; ?>"
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

          <div className="col lg">
            <div className="contact-img">
              <img src="images/contact-vector.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14013.683012971273!2d77.0907995!3d28.5871518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b2ffc8073bd%3A0xba7a50742c28f30c!2sMalia%20Contactor!5e0!3m2!1sen!2sin!4v1678274856836!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact_us;
