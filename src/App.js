import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Button = styled.button`
  padding: 1rem 2rem;
  color: white;
  background-color: #61dafb;
  border: none;
  font-size: 18px;
  text-align: center;
`;

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Button>This is my styled button</Button>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesciunt natus voluptates
        libero odio tempore mollitia repellendus maxime, eum illum dolores voluptas quis unde quo
        delectus, illo debitis aspernatur eos.
      </a>
      <p>This is new line</p>
    </header>
  </div>
);

export default App;
