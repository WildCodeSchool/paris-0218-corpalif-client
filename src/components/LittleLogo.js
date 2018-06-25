import React, { Component } from 'react';

import './LittleLogo.css';

import Logo_Facebook from "../img/logo_facebook.png";


class LittleLogo extends Component {
  render() {
    return(
      <a href="https://fr-fr.facebook.com/Corpalif/"><img className="LittleLogo" src={Logo_Facebook} alt="Facebook"></img></a>
    )
  }
}

export default LittleLogo
