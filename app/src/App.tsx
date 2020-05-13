import React from 'react';
import logo from './asset/image/logo.svg';
import './asset/style/App.scss';

function App() {
  return (
    <div className="l-default">
      <main className="l-body">
        <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;
