import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import { Provider } from './stores/provider'
function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <Content />
      </Provider>
    </div>
  );
}

export default App;
