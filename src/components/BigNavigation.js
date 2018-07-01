import React from 'react';

import Styled from 'styled-components';

import Onglet from './Onglet.js';
import OngletRouge from './OngletRouge.js';
import OngletDropDown01 from './OngletDropDown01';
import OngletDropDown02 from './OngletDropDown02';
import OngletDropDown04 from './OngletDropDown04';
import OngletDropDown05 from './OngletDropDown05';
import OngletImg from './OngletImg.js';


// JSX
const BigNavigation = () =>
  <nav>
    <Ul className="BigNavigation">
      <OngletImg />
      <OngletDropDown01 />
      
      <OngletDropDown02 />
      <Onglet children="ANNUAIRE FRANCILIEN" href={'annuaire-francilien'}/>
      <OngletDropDown04 />
      <OngletDropDown05 />
      <OngletRouge children="FORMULAIRE D'ADMISSION EN USP" href={'formulaire-d-admission-en-usp'}/>
    </Ul>
  </nav>


// Styled-components
// eslint-disable 
const Ul = Styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  background-color: rgb(16, 73, 73);
`;
// eslint-enable


export default BigNavigation