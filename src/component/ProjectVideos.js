import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const ProjectVideos = () => {
  return (
    <>
      <Header />
      <div className="text-center pt-4 about-hea text-light bg-dark">
        <h1>OUR PROJECT Videos</h1>
        <div className="redproject-line"></div>
      </div>
      <div className="container-fluid bg-dark text-center pt-5">
        <div className="row ">
          <div className="col-lg-4">
            <video controls className="video-div">
              <source src="videos/v1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-4">
            <video controls className="video-div">
              <source src="videos/v2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-4">
            <video controls className="video-div">
              <source src="videos/IMG_0981.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <video controls className="video-div">
              <source src="videos/IMG_0986.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-4">
            <video controls className="video-div">
              <source src="videos/IMG_1061.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-4">
            <video controls className="video-div">
              <source src="videos/IMG_1064.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <video controls className="video-div">
              <source src="videos/IMG_1118.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-4">
            <video controls className="video-div">
              <source src="videos/IMG_1129.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-4">
            <video controls className="video-div">
              <source src="videos/IMG_1160.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <video controls className="video-div">
              <source src="videos/IMG_1172.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-4">
            <video controls className="video-div">
              <source src="videos/IMG_1260.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-4">
            <video controls className="video-div">
              <source src="videos/VID-20230211-WA0004.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectVideos;
