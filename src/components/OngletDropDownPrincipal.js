import React from 'react';

import Styled from 'styled-components';


// JSX
const OngletDropDownPrincipal = ({ children }) =>
  <A className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {children}
  </A>


// Styled-components
// eslint-disable 
const A = Styled.a`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 1em;

  content: none;
`;
// eslint-enable


export default OngletDropDownPrincipal