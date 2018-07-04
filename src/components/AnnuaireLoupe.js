import React from 'react';

import Styled from 'styled-components';


// JSX 
const AnnuaireLoupe = () =>
  <Button type="submit"><span role="img" aria-label="Loupe">🔍</span></Button>


// Styled-components
// eslint-disable 
const Button = Styled.button`
  height: 90px;
  width: 100%;

  display: flex;
  justify-content: center;
  color: white;
  font-size: 60px;
  transition: color 0.3s;

  border: none;
  // background-image: url("../img/Loupe.png");
  background-size: cover;
  background-color: rgb(204, 73, 73); /* Mettre un logo dessus */
  transition: background-color 0.3s;

${Button}:hover {
  color: rgb(201, 201, 201);
  transition: color 0.4s;

  background-color: rgb(142, 32, 33);
  transition: background-color 0.4s;
}
`;
// eslint-enable


export default AnnuaireLoupe