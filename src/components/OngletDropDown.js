import React, { Component } from 'react';
import OngletDropDownPrincipal from './OngletDropDownPrincipal.js';
import OngletDropDownSecondaire from './OngletDropDownSecondaire.js'

import './OngletDropDown.css';

class OngletDropDown extends Component {
  render() {
    return(
      <li>
        <div href="#CoordinationRegionale">
          <div className="dropdown">
            <OngletDropDownPrincipal />
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <OngletDropDownSecondaire />
            <OngletDropDownSecondaire />
            <OngletDropDownSecondaire />
            <OngletDropDownSecondaire />
            <OngletDropDownSecondaire />
            <OngletDropDownSecondaire />
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default OngletDropDown