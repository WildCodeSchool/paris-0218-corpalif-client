import React from 'react';
import OngletDropDownPrincipal from './OngletDropDownPrincipal.js';
import OngletDropDownSecondaire from './OngletDropDownSecondaire.js';

import Styled from 'styled-components';


// JSX
const OngletDropDown05 = () =>
  <ul>
    <div href="#CoordinationRegionale">
      <Div className="dropdown">
        <OngletDropDownPrincipal children="VEILLE MÉDICALE"/>
        <DivMenu className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <OngletDropDownSecondaire children="Recommandations et outils"/>
        <OngletDropDownSecondaire children="Actualités nationales et régionales"/>
        <OngletDropDownSecondaire children="Évènements"/>
        <OngletDropDownSecondaire children="Nos rencontres"/>
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


export default OngletDropDown05