import React, { Component } from 'react';
import LandingDisplay from './styles/components/LandingDisplay.js';
import Login from './styles/components/Login.js';
import './Home.css';

class Home extends Component {
    render() {
      return (
        <div className="homeGrid">
          <div><LandingDisplay /></div> 
          <div><Login /></div>
        </div>
      );
    }
  }
  
  export default Home;