import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0
    };
  }
  //methods
  handleChange(field, value) {
    this.setState({ [`${field}`]: value });
  }
  handleButtonComplete() {
    const houseObj = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode
    };
    axios
      .post(`http://localhost:4000/api/houses`, houseObj)
      .then(console.log(`house added: ${houseObj}`));
  }

  render() {
    return (
      <div className="Wizard__container">
        <div className="Wizard__topcontainer">
          <h1>Add New Listing</h1>
          <Link to="/">
            <button className='wizardCancel'>Cancel</button>
          </Link>
        </div>
        <div className="Wizard__bodycontainer">
          <div>
            Name :{" "}
            <input onChange={e => this.handleChange("name", e.target.value)} />
          </div>
          <div>
            Address :{" "}
            <input
              onChange={e => this.handleChange("address", e.target.value)}
            />
          </div>
          <div>
            City :{" "}
            <input onChange={e => this.handleChange("city", e.target.value)} />
            State :{" "}
            <input onChange={e => this.handleChange("state", e.target.value)} />
            Zipcode :{" "}
            <input
              onChange={e => this.handleChange("zipcode", e.target.value)}
            />
          </div>
        </div>
        <div className="Wizard__bottomcontainer">
          <Link to="/">
            <button onClick={() => this.handleButtonComplete()}>
              Complete
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Wizard;
