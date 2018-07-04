import React from 'react';

import Styled from 'styled-components';


// JSX
const BalisePBold24 = ({ children }) => 
    <Paragraphe>
      {children}
    </Paragraphe>


// Styled-components
// eslint-disable 
const Paragraphe = Styled.p`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;
// eslint-enable


export default BalisePBold24