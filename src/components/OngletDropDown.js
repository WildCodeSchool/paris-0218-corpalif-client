import React from 'react';
import OngletDropDownPrincipal from './OngletDropDownPrincipal.js';
import OngletDropDownSecondaire from './OngletDropDownSecondaire.js'

import './OngletDropDown.css';

const OngletDropDown = () =>
  <li>
    <div href="#CoordinationRegionale">
      <div className="dropdown">
        <OngletDropDownPrincipal children="COORDINATION RÉGIONALE"/>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <OngletDropDownSecondaire children="La Corpalif"/>
        <OngletDropDownSecondaire children="Actualités"/>
        <OngletDropDownSecondaire children="Boîtes à outils"/>
        <OngletDropDownSecondaire children="Adhérer"/>
        <OngletDropDownSecondaire children="Les adhérents 🔒 🔓" />
        <OngletDropDownSecondaire children="Nous soutenir"/>
        </div>
      </div>
    </div>
  </li>


export default OngletDropDown