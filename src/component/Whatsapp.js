import React from "react";

const Whatsapp = () => {
  return (
    <>
      {/* <!-- whatsapp icon --> */}
      <div className="whatsapp">
        <a
          target="_blank"
          without="true"
          rel="noreferrer"
          href="https://wa.me/+919811065679/?text=Hi, I would like to use your service!! Please give me more information."
          aria-label=""
        >
          <img
            src="images/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png"
            alt="whatsapp"
            loading="lazy"
          />
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
