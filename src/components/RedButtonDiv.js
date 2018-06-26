import React from 'react';
import RedButton from './RedButton.js';

import "./RedButtonDiv.css";

const RedButtonDiv = ({ children }) => 
  <div className="RedButtonDiv">
    <RedButton> 
      {children} 
    </RedButton>
  </div>


export default RedButtonDiv