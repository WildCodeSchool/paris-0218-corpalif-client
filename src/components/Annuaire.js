import React from 'react';

import Styled from 'styled-components';


// JSX 
const Annuaire = () =>
  <form className="BlocGrisRecherche" role="search">                 
    <div className="BarreRecherche col-11">
      <select className="custom-select ButtonRecherche" id="inlineFormCustomSelect">
        <option selected>Type</option>
        <option value="1">Unités de soins palliatifs</option>
        <option value="2">Lits identifiés soins palliatifs</option>
        <option value="3">Réseaux de soins palliatifs</option>
        <option value="4">Équipes mobiles de soins palliatifs</option>
        <option value="5">Hospitalisation à domicile</option>
        <option value="6">Associations de bénévoles</option>
        <option value="7">Autres structures</option>
      </select>

      <input type="text" className="InputRechercheNom" placeholder="Nom ou prestation" />
      <input type="text" className="InputRechercheVille" placeholder="Ville ou département" />
      
    </div>

    <div className="IconLoupe col-1">
      <button type="submit" className="ButtonRechercheSubmit"></button>
    </div>
  </form>


// Styled-components
// eslint-disable 
const Div = Styled.div`

  ${Div}:hover {

  }
`;
// eslint-enable


export default Annuaire