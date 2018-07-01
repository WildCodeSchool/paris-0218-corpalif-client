import React from 'react';

import Styled from 'styled-components';


// JSX 
const AnnuaireRecherche = ({ children }) =>
  <Input type="text" placeholder={children} />
      

// Styled-components
// eslint-disable 
const Input = Styled.input`
  height: 45px;
  width: 100%;
  padding: 5px;

  // color: rgb(16, 73, 73);
  font-weight: bold;
`;
// eslint-enable


export default AnnuaireRecherche