import React from 'react';

import Styled from 'styled-components';


// JSX
const BreadCrumb02 = ({ children }) =>
  <Ol class="breadcrumb">
    <Li className="breadcrumb-item"><a href="#Home">Home/</a></Li>
    <Li class="breadcrumb-item active" aria-current="page">{children}</Li>
  </Ol>


// Styled-components
// eslint-disable 
const Ol = Styled.ol`
  display: flex; 
  margin-left: 20px;
  background-color: transparent;
`;

const Li = Styled.li`
  padding-left: 0;
`;
// eslint-enable


export default BreadCrumb02