import React from 'react';

import Styled from 'styled-components';

import BaliseP from './BaliseP.js';
import BalisePBold18 from './BalisePBold18.js';
import BalisePBold24 from './BalisePBold24.js';


// JSX
const RedButton = () => 
  <footer>
    <div className="column">
      <DivInformation>
        <div className="row">
          <DivText className="col-6">
            <BalisePBold24>La Corpalif</BalisePBold24>
            <BaliseP>coordonne les soins palliatifs en Île-de-France,</BaliseP>
            <BaliseP>participe à leur développement</BaliseP>
            <BaliseP>et contribue à la visibilité de leurs acteurs.</BaliseP>
            <br />
            <BaliseP>106 avenue EmileZola</BaliseP>
            <BaliseP>75015 Paris</BaliseP>
            <BaliseP>Tél. 00 00 00 00 00</BaliseP>
          </DivText>

          <DivText className="col-3">
            <ul>
              <Li><A>FAQ</A></Li>
              <Li><A>Newsletter</A></Li>
              <Li><A>Mentions légales</A></Li>
              <Li><A>Crédits</A></Li>
            </ul>
          </DivText>

          <DivText className="col-3">
            <BaliseP>Nos partenaires</BaliseP>
            <BaliseP>Logo01</BaliseP>
            <BaliseP>Logo02</BaliseP>
          </DivText>
        </div>

        <DivCorpaCenter className="row">
          <div className="col-4">
            <BalisePBold24>© Corpalif - 2018</BalisePBold24>
          </div>
        </DivCorpaCenter>
      </DivInformation>
    </div>
  </footer>


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

const DivText = Styled.div`
  padding: 20px;
`;

/* my-component.css */
const DivCorpaCenter = Styled.div`
  justify-content: center;
  text-align: center;
`;

const Li = Styled.li`   
  ${Li}:hover {
    color: rgb(51, 116, 103);
}
`;

const A = Styled.a`
  display: flex;
  align-items: center;
  height: 35px;
  padding: 0 1em;

  font-weight: bold;
  color: white;

  transition: color 0.3s;

  ${A}:hover {
    text-decoration:none; 
    color: rgb(51, 116, 103);
    transition: color 0.4s;
  }
`;
// eslint-enable


export default RedButton

