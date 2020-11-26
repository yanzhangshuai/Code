import React from 'react';
import './App.css';
import {TodoListView} from "./components/todo";
import store from "./stores/todo";

function App() {
  return (
    <div className="App">
      <TodoListView todoList={store} />
    </div>
  );
}

export default App;
