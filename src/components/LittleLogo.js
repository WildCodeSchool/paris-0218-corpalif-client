import React from 'react';

import Styled from 'styled-components';

import Logo_Facebook from "../img/logo_facebook.png";


// JSX
const LittleLogo = () =>
  <a href="https://fr-fr.facebook.com/Corpalif/">
    <Img src={Logo_Facebook} alt="Facebook" />
  </a>


// Styled-components
// eslint-disable 
const Img = Styled.img`
  height: 40px;
  width: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  filter: brightness(100%);
  transition: filter 0.3s;

  ${Img}:hover {
    height: 40px;
    width: 40px;

    filter: brightness(120%);
    transition: filter 0.4s;
  }
`;
// eslint-enable


export default LittleLogo
