import React from 'react';

import Styled from 'styled-components';

import HomeWhite from '../img/HomeWhite.png';
// import HomeBlack from '../img/HomeBlack.png';


// JSX
  const OngletImg = () => 
  <li>
    <A href="#Home">
      <Img src={HomeWhite} ></Img>  {/*onMouseOver={e => (e.currentTarget.src={HomeBlack} )} */}
    </A>
  </li>


// Styled-components
// eslint-disable 
const Img = Styled.img`
  height: 40px;
  width: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${Img}:hover {
    height: 40px;
    width: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const A = Styled.a`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 1em;
  ${A}:hover {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 1em;
  }
`;
// eslint-enable


export default OngletImg