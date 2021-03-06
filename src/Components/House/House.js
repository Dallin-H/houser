import React from "react";

const House = (props) => {
  return (
    <div className="House__container">
      <div className="House__form">
        <p>Property Name: {props.name}</p>
        <p>Address: {props.address}</p>
        <p>City: {props.city}</p>
        <p>State: {props.state}</p>
        <p>Zipcode: {props.zipcode}</p>
      </div>
      <button
      className='House__deleteButton'
      onClick={() => props.delete(props.id)}
      >X</button>
    </div>
  );
};

export default House;
