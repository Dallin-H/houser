import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Wizard extends Component {
  constructor() {
    super();
    this.state={
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: 0
    }
  }
  //methods
handleChange(field, value) {
  this.setState({ [`${field}`]: value });
}

  render() {
    return (
      <div className="Wizard__container">
        <div className="Wizard__topcontainer">
          <h1>Add New Listing</h1>
          <Link to='/'><button>Cancel</button></Link>
        </div>
        <div>
          Name : <input onChange={ (e) => this.handleChange( 'name', e.target.value )}/>
        </div>
        <div>
          Address : <input onChange={ (e) => this.handleChange( 'address', e.target.value )}/>
        </div>
        <div>
          City : <input onChange={ (e) => this.handleChange( 'city', e.target.value )}/>
          State : <input onChange={ (e) => this.handleChange( 'state', e.target.value )}/>
          Zipcode : <input onChange={ (e) => this.handleChange( 'zipcode', e.target.value )}/>
        </div>
        <div className="Wizard__bottomcontainer">
          <button>Complete</button>
        </div>
      </div>
    );
  }
}

export default Wizard;
