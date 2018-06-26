import React from 'react';

import './OngletDropDownPrincipal.css';

const OngletDropDownPrincipal = ({ children }) =>
  <a className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {children}
  </a>


export default OngletDropDownPrincipal