import React, { Component } from 'react';

import './OngletDropDownSecondaire.css';

class OngletDropDownSecondaire extends Component {
  render() {
    return(
        <a className="dropdown-item" href="#LaCorpalif">
          <p>La Corpalif<span role="img" aria-label="Emoji" > 🔒 🔓</span></p>
        </a>
    )
  }
}

export default OngletDropDownSecondaire