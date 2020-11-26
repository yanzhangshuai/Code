import { useDebounce, useDebounceCallback } from '@react-hook/debounce'
import React from 'react';
export const DebounceDemo = () => {
  // at a basic level, used just like useState
  const [value, setValue] = useDebounce('initialValue', 2000);

  return (<div>
    {value}
    <button onClick={() => { setValue("新的") }}></button>
  </div>)
}