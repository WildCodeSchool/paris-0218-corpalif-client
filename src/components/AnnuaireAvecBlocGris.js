import React from 'react';

import Styled from 'styled-components';

import BaliseH1 from './BaliseH1';
import Annuaire from './Annuaire.js';


// JSX 
const AnnuaireAvecBlocGris = ({ children }) =>
<DivGris className={children}>
  <div className="row Flex JustifyContent AlignItems col-12">
      <BaliseH1 children="Annuaire" />
  </div>

  <div className="row col-offset-1 col-10 col-offset-1">
    <Annuaire />
  </div>
</DivGris>


// Styled-components
// eslint-disable 
const DivGris = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 100px 0;
  width: 100%;
  background-color: rgb(51, 116, 103);
`;
// eslint-enable


export default AnnuaireAvecBlocGris