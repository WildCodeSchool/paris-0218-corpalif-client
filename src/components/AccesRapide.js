import React, { Component } from 'react';

import './AccesRapide.css';

class AccesRapide extends Component {
  render() {
    return(
      <nav>
        <ul className="LittleNavRow">
          <li>Accès rapide:</li>
          <li><a href="#Contenu">Contenu</a></li>
          <li><a href="#Navigation">Navigation</a></li>
          <li><a href="#Recherche">Recherche</a></li>
        </ul>
      </nav>
    )
  }
}

export default AccesRapide