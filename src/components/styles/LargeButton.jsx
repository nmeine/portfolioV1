import React from 'react';
import styled from 'styled-components';

const LargeButton = styled.button`
  color: #6E72DA;
  margin: 0;
  background-color: transparent;
  border: 2px solid #303030;
  font-size: 2vh;
  font-family: SpaceMono;
  font-weight: bold;
  border-radius: 3px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  padding: 2vh;
  &:hover,
  &:focus,
  &:active{
    color: #303030;
    border: 2px solid #6E72DA;
    background-color: rgb(110, 114, 218);
    outline: none;
  }
`;

export default LargeButton;