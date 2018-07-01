import React from 'react';
import RedButton from './RedButton.js';

import Styled from 'styled-components';


// JSX
const RedButtonDiv = ({ children }) => 
  <Div>
    <RedButton> 
      {children} 
    </RedButton>
  </Div>


// Styled-components
// eslint-disable 
const Div = Styled.div`
  display:flex;
  justify-content: center;
`;
// eslint-enable


export default RedButtonDiv