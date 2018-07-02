import React from 'react';

import Styled from 'styled-components';

import AnnuaireAvecBlocGris from './AnnuaireAvecBlocGris.js';

// JSX
const AnnuaireEnEntier = () => 
  <section>
    <Div className="column">
      <AnnuaireAvecBlocGris children="ImageParis" />
    </Div>
  </section>


// Styled-components
// eslint-disable 
const Div = Styled.div`
  display: flex;
`;
// eslint-enable


export default AnnuaireEnEntier