import React from 'react';

import Styled from 'styled-components';


// JSX
const OngletDropDownSecondaire = ({ children }) =>
  <A className="dropdown-item" href="#LaCorpalif"> 
    <p>{children}</p>
  </A>


// Styled-components
// eslint-disable 
const A = Styled.a`
  padding: 0 5px;
  color: rgb(51, 116, 103);

  ${A}:hover {
    background-color: rgb(51, 116, 103);
  }
`;
// eslint-enable


export default OngletDropDownSecondaire