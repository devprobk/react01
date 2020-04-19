import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ color }) => color || '#000'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#ffd82b'};

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ backgroundColor }) => backgroundColor || '#e6e6e6'};
      width: 105px;
      height: 30px;
      font-size: 12px;
    `};
`;

const Root = () => (
  <>
    <GlobalStyle />
    <h1>Hello Kamil</h1>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore neque accusamus, cum
      pariatur commodi sit deleniti assumenda impedit vel voluptas nisi placeat debitis, mollitia
      laboriosam adipisci quo consequatur enim!
      <p>Lorem</p>
      <p>ipsum</p>
      <p>dolor</p>
    </div>
    <Button>close / save</Button>
    <Button secondary>remove</Button>
  </>
);

export default Root;
