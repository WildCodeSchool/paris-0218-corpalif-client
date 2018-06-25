import React, { Component } from 'react';
import './OngletImg.css';

import Home from '../img/Home.png';

class OngletImg extends Component {
  render() {
    return(
      <li><a href="#Home"><img className="LittleLogo" src={Home} alt="Facebook"></img></a></li>
    )
  }
}

export default OngletImg