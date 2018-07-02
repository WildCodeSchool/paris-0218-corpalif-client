import React from 'react';

import Styled from 'styled-components';


// JSX
const BaliseH2 = ({ children }) => 
    <Title02>
      {children}
    </Title02>


// Styled-components
// eslint-disable 
const Title02 = Styled.h2`
  display: flex;
  justify-content: center;

  color: white;
  font-size: 28px;
  font-weight: bold;
`;
// eslint-enable


export default BaliseH2