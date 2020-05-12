import React from 'react';
import logo from './asset/image/logo.svg';
import './asset/style/App.scss';
import GrobalHeader from './components/header/container';
import Profile from './contents/profile/index';

function App() {
  return (
    <div className="App">
      <GrobalHeader />
      <img src={logo} className="App-logo" alt="logo" />
      <Profile />
    </div>
  );
}

export default App;
