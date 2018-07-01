import React from 'react';

import Styled from 'styled-components';


// JSX
const H1 = ({ children }) => 
    <Title01>
      {children}
    </Title01>


// Styled-components
// eslint-disable 
const Title01 = Styled.h1`
  color: white;
  font-size: 56px;
  font-weight: bold;
`;
// eslint-enable


export default H1