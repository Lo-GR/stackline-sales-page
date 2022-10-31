import React from 'react';
import './App.css';
import Header from './components/Header';
import Logo from './assets/stackline_logo.svg'

function App() {
  return (
    <div className="app-container">
      <Header>
        <img src={Logo} alt="logo" style={{height: "1rem"}}/>
      </Header>
    </div>
  );
}

export default App;
