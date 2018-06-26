import React from 'react';

import './BreadCrumb.css';

const BreadCrumb01 = ({ children }) =>
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">{children}</li>
  </ol>


export default BreadCrumb01