import { useLocalStorage, writeStorage, deleteFromStorage } from '@rehooks/local-storage';
import React from 'react';
let counter = 0;
export const LocalStorageDemo = () => {
  const [counterData, setA, deleteA] = useLocalStorage('user', { name: 'Anakin Skywalker' });
  return (<div>
    {counterData.name}
    <button onClick={() => setA({ name: '新的' })}>Write</button>
    <button onClick={() => alert(counterData)}>Read</button>
    <button onClick={() => deleteA()}>delete</button>
  </div>)

}