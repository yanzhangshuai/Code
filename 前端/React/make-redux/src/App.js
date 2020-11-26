import React from 'react';
import Header from './components/header'
import Content from './components/content'
import { store } from './store'
import { Provider } from './provider'
function App() {
  return (
    <div className="">
      <Provider store={store}>
        <div>
          <Header />
          <Content />
        </div>
      </Provider>

    </div>
  );
}

export default App;
