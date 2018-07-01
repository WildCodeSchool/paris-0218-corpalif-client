import React from 'react';

import Styled from 'styled-components';

import AnnuaireSelect from './AnnuaireSelect.js';
import AnnuaireRecherche from './AnnuaireRecherche.js';
import AnnuaireLoupe from './AnnuaireLoupe.js';


// JSX 
const Annuaire = () =>
  <Form role="search">                 
    <BigDiv className="col-11">
      <Div className="col-3">
        <AnnuaireSelect />
      </Div>
      <Div className="col-6">
        <AnnuaireRecherche type="text" children="Nom ou prestation" />
      </Div>
      <Div className="col-3">
        <AnnuaireRecherche type="text" children="Ville ou département" />
      </Div>    
    </BigDiv>

    <div className="col-1">
      <AnnuaireLoupe />
    </div>
  </Form>


// Styled-components
// eslint-disable 
const Form = Styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 90px;
  width: 100%;
  margin: auto;

  background-color: rgba(95, 95, 95, 0.5);
`

const BigDiv = Styled.div`
  display: flex;
  padding:0 10px;
`;

const Div = Styled.div`
  padding:0 10px;
`;
// eslint-enable


export default Annuaire