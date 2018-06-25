import React, { Component } from 'react';

import './Logo.css';

import Logo_Corpalif from "../img/Corpalif_Logo.png";


class Logo extends Component {
  render() {
    return (
      <img className="LogoCorpalif" src={Logo_Corpalif} alt="Corpalif" />
    )
  }
}

export default Logo