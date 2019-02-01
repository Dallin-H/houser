import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from "../House/House";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }
  //methods
  componentDidMount() {
    axios.get('http://localhost:4000/api/houses')
    .then(response => {
      this.setState({ houses: response.data })
    })
  }
  render() {
    const mappedHouses = this.state.houses.map(eachHouseListing => {
      return <House key={eachHouseListing.index} house={eachHouseListing} />;
    });
    return (
      <div className="Dashboard__container">
        <div className="Dashboard__topcontainer">
          <h1>Dashboard</h1>
          <Link to="/wizard">
            <button>Add New Property</button>
          </Link>
        </div>
        <div className="Dashboard__bodyContainer">
          <h3>Home Listings</h3>
          {mappedHouses}
        </div>
      </div>
    );
  }
}

export default Dashboard;
