import React from 'react';

import "./RedButton.css";

const RedButton = ({ children, ...rest }) => 
  <button className="RedButton" {...rest}>
    {children}
  </button>


export default RedButton