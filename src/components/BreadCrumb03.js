import React, { Component } from 'react';

import './BreadCrumb.css';

class BreadCrumb03 extends Component {
  render() {
    return(
      <ol class="breadcrumb">
        <li className="breadcrumb-item"><a href="#Home">Home</a></li>
        <li class="breadcrumb-item"><a href="#Library">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    )
  }
}

export default BreadCrumb03