import React from 'react';

import Styled from 'styled-components';


// JSX
const BaliseH1 = ({ children }) => 
    <Title01>
      {children}
    </Title01>


// Styled-components
// eslint-disable 
const Title01 = Styled.h1`
  display: flex;
  justify-content: center;

  color: white;
  font-size: 56px;
  font-weight: bold;
`;
// eslint-enable


export default BaliseH1