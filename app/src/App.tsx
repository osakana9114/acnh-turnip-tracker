import React from 'react';
import logo from './image/logo.svg';
import './style/App.scss';
import HogeContainer from './containers/hogeContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TEST PROJECT</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <HogeContainer />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
