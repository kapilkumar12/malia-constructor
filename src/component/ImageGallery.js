import { useState } from "react";

const ImageGallery = () => {
  const image1 = "images/IMG-20230211-WA0082.jpg";
  const image2 = "images/IMG-20230211-WA0100.jpg";
  const image3 = "images/IMG-20230211-WA0099.jpg";
  const image4 = "images/p1.jpg";
  const image5 = "images/p2.jpg";
  const image6 = "images/p3.jpg";
  const image7 = "images/p4.jpg";
  const image8 = "images/p5.jpg";
  const image9 = "images/p6.jpg";
  const image10 = "images/p7.jpg";
  const image11 = "images/p8.jpg";
  const image12 = "images/p9.jpg";
  const image13 = "images/p10.jpg";
  const image14 = "images/p11.jpg";
  const image15 = "images/p12.jpg";
  const image16 = "images/p13.jpg";
  const image17 = "images/p14.jpg";
  const image18 = "images/p15.jpg";
  const image19 = "images/p16.PNG";
  const image20 = "images/p17.PNG";
  const image21 = "images/p18.PNG";
  const image22 = "images/p19.jpg";
  const image23 = "images/p20.jpg";
  const image24 = "images/p22.jpg";
  const image25 = "images/p23.jpg";
  const image26 = "images/p25.jpg";
  const image27 = "images/img1.jpg";
  const image28 = "images/img2.jpg";
  const image29 = "images/img4.jpg";

  //IMAGE ARRAY
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
  ];

  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <>
      <div className="row">
        {images.map((image) => (
          <div className="col-md-4 mb-3">
            <img
              className="image-card"
              onClick={() => showImage(image)}
              src={image}
              alt="malia construction"
            />
          </div>
        ))}
      </div>

      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img
            id="lightbox-img"
            src={imageToShow}
            alt="malia construction"
          ></img>
          <button onClick={showNext}>⭢</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ImageGallery;
