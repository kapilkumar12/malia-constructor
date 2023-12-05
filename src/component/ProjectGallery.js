import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Whatsapp from "./Whatsapp";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectVideos from "./ProjectVideos";
import ImageGallery from "./ImageGallery";

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

      <div className="container-fluid bg-light">
        <div className="row px-5 pt-2">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link projectbtan active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#images"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Images
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link projectbtan"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#videos"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Videos
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="images"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="text-center pt-4 about-hea text-light bg-light pb-5">
            <h1 className="theme-color">OUR PROJECT Images</h1>
            <div className="redproject-line "></div>
          </div>
          <div className="container-fluid bg-light">
            <div className="container bg-light">
              <ImageGallery />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="videos"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <ProjectVideos />
        </div>
      </div>

      <Whatsapp />
      <Footer />
    </>
  );
};

export default ProjectGallery;
