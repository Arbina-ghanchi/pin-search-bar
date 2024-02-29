import React from 'react';
import styled from 'styled-components';

export const SimpleButton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
margin: 30px 6px;

  &:hover {
    background-color: #0056b3;
  }
`;