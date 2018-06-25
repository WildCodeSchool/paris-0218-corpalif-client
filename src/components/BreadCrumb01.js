import React, { Component } from 'react';

import './BreadCrumb.css';

class BreadCrumb01 extends Component {
  render() {
    return(
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Home</li>
      </ol>
    )
  }
}

export default BreadCrumb01