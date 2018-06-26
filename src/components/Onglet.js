import React from 'react';

import './Onglet.css';

const Onglet = ({ children }) =>
  <li className="Onglet">
    <a>
      {children}
    </a>
  </li>


export default Onglet