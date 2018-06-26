import React from 'react';

import './BreadCrumb.css';

const BreadCrumb02 = ({ children }) =>
  <ol class="breadcrumb">
    <li className="breadcrumb-item"><a href="#Home">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">{children}</li>
  </ol>


export default BreadCrumb02