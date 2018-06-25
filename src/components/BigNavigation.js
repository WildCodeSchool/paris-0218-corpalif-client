import React, { Component } from 'react';
import './BigNavigation.css';

import Onglet from './Onglet.js';
import OngletRouge from './OngletRouge.js';
import OngletDropDown from './OngletDropDown.js';
import OngletImg from './OngletImg.js';

class BigNavigation extends Component {
  render() {
    return(
      <nav className="">
        <ul className="BigNavigation">
          <OngletImg />
          <OngletDropDown />
          
          <Onglet />
          <Onglet />
          <Onglet />
          <Onglet />
          <OngletRouge />
        </ul>
      </nav>
    )
  }
}

export default BigNavigation