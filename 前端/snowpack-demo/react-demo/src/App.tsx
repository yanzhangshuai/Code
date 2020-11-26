import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SubApp } from './sub/sub-app';
import { SubAppa } from './sub/sub-app-a';

interface AppProps { }

function App({ }: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <SubApp />
        <SubAppa />
      </header>
    </div>
  );
}

export default App;
