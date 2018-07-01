import React from 'react';

import Styled from 'styled-components';

import AnnuaireSelectOption from './AnnuaireSelectOption';


// JSX
const AnnuaireSelect = ({ children }) =>
  <Select className="custom-select" id="inlineFormCustomSelect">
    <option selected>Toutes les catégories</option>
    <AnnuaireSelectOption value="1" children="Unités de soins palliatifs" />
    <AnnuaireSelectOption value="2" children="Lits identifiés soins palliatifs" />
    <AnnuaireSelectOption value="3" children="Réseaux de soins palliatifs" />
    <AnnuaireSelectOption value="4" children="Équipes mobiles de soins palliatifs" />
    <AnnuaireSelectOption value="5" children="Hospitalisation à domicile" />
    <AnnuaireSelectOption value="6" children="Associations de bénévoles" />
    <AnnuaireSelectOption value="7" children="Autres structures" />
  </Select>


// Styled-components
// eslint-disable 
const Select = Styled.select`
  height: 45px;
  border-radius: 0px;

  padding: 5px;
  font-weight: bold;
`;
// eslint-enable


export default AnnuaireSelect