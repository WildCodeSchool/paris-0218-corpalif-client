import React from 'react';

import Styled from 'styled-components';


// JSX
const Recherche = () =>
<div className="row">
  <div className="input-group">
    <Input type="text" className="form-control" placeholder="Rechercher sur le site" />
    <span className="input-group-btn">
      <Button className="btn btn-default" type="button"><span role="img" aria-label="loupe">🔍</span></Button>
    </span>
  </div>
</div>


// Styled-components
// eslint-disable 
const Button = Styled.button`
  height: 38px;
  width: 38px;
  font-size: 1.2em;
  color: white;
  background-color: rgb(204, 73, 73);
  border-radius: 0;
  border: none;
  padding: 0 5px;

  transition: color 0.3s;
  transition: background-color 0.3s;


  ${Button}:hover {
    background-color: rgb(142, 32, 33);
    color: rgb(201, 201, 201);

    transition: color 0.4s;
    transition: background-color 0.4s;
  }
`;

const Input = Styled.input`
  height: 38px;
  padding: 0 5px;
  font-size: 0.8em;
  font-weight: bold;
  border-radius: 0;
`;
// eslint-enable


export default Recherche