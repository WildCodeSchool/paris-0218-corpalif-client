import React from 'react';
import './BigNavigation.css';

import Onglet from './Onglet.js';
import OngletRouge from './OngletRouge.js';
import OngletDropDown from './OngletDropDown.js';
import OngletImg from './OngletImg.js';

const BigNavigation = () =>
  <nav className="">
    <ul className="BigNavigation">
      <OngletImg />
      <OngletDropDown />
      
      <Onglet children="SOINS PALLIATIFS" href={'soins-palliatifs'}/>
      <Onglet children="ANNUAIRE FRANCILIEN" href={'annuaire-francilien'}/>
      <Onglet children="EMPLOI / FORMATION" href={'emploi-formation'}/>
      <Onglet children="VEILLE MÉDICALE" href={'veille-medicale'}/>
      <OngletRouge children="FORMULAIRE D'ADMISSION EN USP" href={'formulaire-d-admission-en-usp'}/>
    </ul>
  </nav>


export default BigNavigation