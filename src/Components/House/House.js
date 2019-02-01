import React from "react";

const House = () => {
  return (
    <div className="House__container">
      <div className="House__form">
        <p>Property Name:</p>
        <p>Address:</p>
        <p>City:</p>
        <p>State:</p>
        <p>Zip:</p>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default House;
