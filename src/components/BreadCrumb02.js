import React, { Component } from 'react';

import './BreadCrumb.css';

class BreadCrumb02 extends Component {
  render() {
    return(
      <ol class="breadcrumb">
        <li className="breadcrumb-item"><a href="#Home">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    )
  }
}

export default BreadCrumb02