import React from "react";

const Box = (props) => {
  return (
    <>
      <div className="box1">
        <div>
          <h3>{props.heading}</h3>
          <p>{props.paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default Box;
