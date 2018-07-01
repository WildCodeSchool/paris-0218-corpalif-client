import React from 'react';

import Styled from 'styled-components';


// JSX
const Onglet = ({ children }) =>
  <Li>
    <A href="#Onglet">
      {children}
    </A>
  </Li>


// Styled-components
// eslint-disable 
const Li = Styled.li`   
  ${Li}:hover {
    color: rgb(51, 116, 103);
    transition: color 0.4s;
}
`;

const A = Styled.a`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 1em;

  font-weight: bold;
  color: white;

  transition: color 0.3s;

  ${A}:hover {
    text-decoration:none; 
    color: rgb(51, 116, 103);
    transition: color 0.4s;
  }
`;
// eslint-enable


export default Onglet