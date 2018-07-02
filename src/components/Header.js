import React from 'react';

import Styled from 'styled-components';

import Logo from './Logo.js';
import LittleLogo from './LittleLogo.js';
import Recherche from './Recherche.js';
import RedButton from './RedButton.js';
import BigNavigation from './BigNavigation.js';

// JSX
const Header = () => 
  <header>       

    {/* Header 1ère ligne. Zone pour le logo, le petit nav, les petits logo, la recherche et le login */}
    <div className="row RowMargin">
      <div className="col-2" >
        <Logo />
      </div>
      <div className="col-5" >
      </div>
      <div className="Flex col-1">
        <DivLogo className="row">
          <LittleLogo />
          <LittleLogo />
        </DivLogo>
      </div>
      <DivRecherche className="col-2">
        <Recherche />
      </DivRecherche>
      <div className="App-Login col-2">
        <RedButton children="Espace adhérent" />
      </div>
    </div>

    {/* Header 2ère ligne. Zone pour la navigation principale*/}
    <div className="row">
      <div className="col-12">
        <BigNavigation />
      </div>
    </div>
  </header>


// Styled-components
// eslint-disable 
const DivLogo = Styled.div`
  align-items: center;
`;

const DivRecherche = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// eslint-enable


export default Header