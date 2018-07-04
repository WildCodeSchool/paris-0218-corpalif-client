import React from 'react';

import Styled from 'styled-components';

import BaliseH1 from './BaliseH1.js';
import BaliseP from './BaliseP.js';
import BalisePBold24 from './BalisePBold24.js';
import BaliseP60 from './BaliseP60.js';
import RedButtonDiv from './RedButtonDiv.js';


// JSX
const RendezVous = () => 
  <article>
    <div className="row">
      <DivInformation>
          <BaliseH1 children="Les rendez-vous" />
          <DivCentrer>
            <DivFloat>
              
              <ul className="row">

                <DivLi className="row col-6">
                  <div className="column col-3">
                    <BaliseP60 children="18"></BaliseP60>
                    <BalisePBold24 children="Mars"></BalisePBold24>
                  </div>
                  <div className="row col-9">
                    <BaliseP children="Assemblée Générale de la CORPALIF"></BaliseP>
                    <BaliseP children="Maison médicale Claire Demeure"></BaliseP>
                    <BaliseP children="12 rue Porte de Buc"></BaliseP>
                    <BaliseP children="78000 Versailles"></BaliseP>
                  </div>
                </DivLi>

                <DivLi className="row col-6">
                  <div className="column col-3">
                    <BaliseP60 children="25"></BaliseP60>
                    <BalisePBold24 children="Avril"></BalisePBold24>
                  </div>
                  <div className="row col-9">
                    <BaliseP children="Journée régionale Aura des EMSP"></BaliseP>
                    <BaliseP children="IFSI de Clermont-Ferrand"></BaliseP>
                  </div>
                </DivLi>

              </ul>

            </DivFloat>
          </DivCentrer>
          <RedButtonDiv alt="Onglet: Veille médicale => Évènements" children="Plus d'évènements"/>
      </DivInformation>
    </div>
  </article>


// Styled-components
// eslint-disable 
const DivLi = Styled.div`
  // justify-content: center;
`;

const DivInformation = Styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 50px;

  background-color: rgb(205, 217, 217);
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

  width: 1000px;
`;
// eslint-enable


export default RendezVous