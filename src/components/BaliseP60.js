import React from 'react';

import Styled from 'styled-components';


// JSX
const BaliseP60 = ({ children }) => 
    <Paragraphe>
      {children}
    </Paragraphe>


// Styled-components
// eslint-disable 
const Paragraphe = Styled.p`
  color: white;
  font-size: 60px;
`;
// eslint-enable


export default BaliseP60