import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxDemo from './ReduxDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
         welcome React
        </h2>
         
      </header>
      <ReduxDemo />
      
    </div>
  );
}

export default App;
