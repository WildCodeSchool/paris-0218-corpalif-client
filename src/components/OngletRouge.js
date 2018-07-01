import React from 'react';

import Styled from 'styled-components';


// JSX
const OngletRouge = ({ children }) =>
  <Li>
    <A href="#Ongletrouge">
      {children}
    </A>
  </Li>


// Styled-components
// eslint-disable 
const Li = Styled.li`
  background-color: rgb(204, 73, 73);
  transition: background-color 0.3s;


  ${Li}:hover {
    background-color: rgb(142, 32, 33);
    transition: background-color 0.4s;
  }
`;

const A = Styled.a`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 1em;
  font-weight: bold;
  color: white;
  text-decoration: none;

 ${A}:hover {
  text-decoration:none; 
  color: rgb(201, 201, 201);
  transition: color 0.4s;
  }
`;
// eslint-enable


export default OngletRouge