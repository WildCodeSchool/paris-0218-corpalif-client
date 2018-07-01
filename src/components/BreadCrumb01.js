import React from 'react';

import Styled from 'styled-components';


// JSX
const BreadCrumb01 = ({ children }) =>
  <Ol class="breadcrumb">
    <Li className="breadcrumb-item"><a href="#Home">{children}</a></Li>
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


export default BreadCrumb01