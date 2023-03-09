import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Whatsapp from "./Whatsapp";

const Project_gallery = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <div>
              <img src="images/5.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg">
            <div>
              <img src="images/5.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg">
            <div>
              <img src="images/5.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Project_gallery;
