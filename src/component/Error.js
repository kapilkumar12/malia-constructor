import React from "react";

const Error = () => {
  return (
    <>
      <div className="container-fluid error-page">
        <div className="container">
          <div className="row">
            <div class="error-content">
              <h2>404</h2>
              <h2>404</h2>
            </div>

            <p>Page Not Found</p>
            <div className="text-center">
              <a class="btn btn-lg btn-outline-info" href="/">
                BACK TO HOME
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
