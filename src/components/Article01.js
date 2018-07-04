import React from 'react';

import Styled from 'styled-components';

import BaliseH1 from './BaliseH1.js';
import BaliseH2 from './BaliseH2.js';
import BalisePBold18 from './BalisePBold18.js';
import BaliseP from './BaliseP.js';
import RedButtonDiv from './RedButtonDiv.js';


// JSX
const Article = () => 
  <article>
    <div className="row">
      <DivInformation>
          <BaliseH1 children="La Corpalif" />
          <DivCentrer>
            <DivFloat>
              <BaliseH2 children="Coordination régionale des soins palliatifs en Île-de-France"></BaliseH2>
              <br />
              <BalisePBold18 children="4 missions au service des Franciliens"></BalisePBold18>
              
              <ul>
                <li><BaliseP children="● Assurer le lien entre les structures de prise en charge"></BaliseP></li>
                <li><BaliseP children="● Coordonner et participer au développement des soins palliatifs en Île-de-France"></BaliseP></li>
                <li><BaliseP children="● Susciter des échanges et des rencontres avec et entre ces professionnels"></BaliseP></li>
                <li><BaliseP children="● Promouvoir des actions d'information en soins palliatifs"></BaliseP></li>
              </ul>

            </DivFloat>
          </DivCentrer>
          <RedButtonDiv children="En savoir plus"/>
      </DivInformation>
    </div>
  </article>


// Styled-components
// eslint-disable 
const DivInformation = Styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 50px;

  color: white;
  background-color: rgb(16, 73, 73);
`;

const DivCentrer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 15px;
`;

const DivFloat = Styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1000px;
`;
// eslint-enable


export default Article