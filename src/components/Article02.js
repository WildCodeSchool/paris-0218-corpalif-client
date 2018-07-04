import React from 'react';

import Styled from 'styled-components';

import BaliseH1 from './BaliseH1.js';
import BaliseP from './BaliseP.js';
import RedButtonDiv from './RedButtonDiv.js';


// JSX
const Article = () => 
  <article>
    <div className="row">
      <DivInformation>
          <BaliseH1 children="Les soins palliatifs en 6 points" />
          <DivCentrer>
            <DivFloat>
              
              <ul className="row">

                <DivLi className="column col-8">
                  <li><BaliseP children="● Une approche globale (douleurs,symptômes,confort...)"></BaliseP></li>
                  <li><BaliseP children="● Une prise en charge pour les maladies incurables"></BaliseP></li>
                  <li><BaliseP children="● Un accompagnement pour le patient et ses proches"></BaliseP></li>
                </DivLi>

                <DivLi className="column col-4">
                  <li><BaliseP children="● Des prestations à l'hopital ou à domicile"></BaliseP></li>
                  <li><BaliseP children="● Des décisions à prendre"></BaliseP></li>
                  <li><BaliseP children="● Des interlocuteurs pluridisciplinaires"></BaliseP></li>
                </DivLi>

              </ul>

            </DivFloat>
          </DivCentrer>
          <RedButtonDiv children="En savoir plus"/>
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

  width: 1000px;
`;
// eslint-enable


export default Article