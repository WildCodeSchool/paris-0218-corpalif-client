import React from 'react';
import OngletDropDownPrincipal from './OngletDropDownPrincipal.js';
import OngletDropDownSecondaire from './OngletDropDownSecondaire.js';

import Styled from 'styled-components';


// JSX
const OngletDropDown02 = () =>
  <ul>
    <div href="#CoordinationRegionale">
      <Div className="dropdown">
        <OngletDropDownPrincipal children="LES SOINS PALLIATIFS"/>
        <DivMenu className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <OngletDropDownSecondaire children="La démarche palliative"/>
        <OngletDropDownSecondaire children="Qu'est-ce que les sonis palliatifs"/>
        <OngletDropDownSecondaire children="Vrai/Faux"/>
        <OngletDropDownSecondaire children="Les structures de prise en charge"/>
        <OngletDropDownSecondaire children="Législation"/>
        <OngletDropDownSecondaire children="Accompagner son proche"/>
        <OngletDropDownSecondaire children="Être aidant"/>
        <OngletDropDownSecondaire children="Liens utiles"/>
        <OngletDropDownSecondaire children="Témoignage"/>
        </DivMenu>
      </Div>
    </div>
  </ul>


// Styled-components
// eslint-disable 
const DivMenu = Styled.div`
  border-radius: 0px;
`;

const Div = Styled.div`
  font-weight: bold;
  color: white;
  text-decoration: none;

  transition: color 0.4s;

  ${Div}:hover {
    cursor: pointer;
    color: rgb(51, 116, 103);
    transition: color 0.4s;
  }
`;
// eslint-enable


export default OngletDropDown02