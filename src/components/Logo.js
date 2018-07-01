import React from 'react';

import Styled from 'styled-components';

import Logo_Corpalif from "../img/Corpalif_Logo.png";


// JSX
const Logo = () =>
  <Img src={Logo_Corpalif} alt="Corpalif" />


// Styled-components
// eslint-disable 
const Img = Styled.img`
  width: 200px; 
`;
// eslint-enable


export default Logo