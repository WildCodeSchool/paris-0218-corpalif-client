import React from 'react';

import './BreadCrumb.css';

const BreadCrumb03 = ({ children }) =>
  <ol class="breadcrumb">
    <li className="breadcrumb-item"><a href="#Home">Home</a></li>
    <li class="breadcrumb-item"><a href="#Library">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">{children}</li>
  </ol>


export default BreadCrumb03