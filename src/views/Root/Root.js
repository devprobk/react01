import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Button from '../../components/Button/Button';

const Root = () => (
  <>
    <GlobalStyle />
    <h1>Hello Kamil</h1>
    <Button>close / save</Button>
    <Button secondary>remove</Button>
  </>
);

export default Root;
