import React, { useState, useCallback } from "react"

export const InputDemo = () => {
  const name = useInputValue('Jamie');
  return (
    <div>
      <input {...name} />
      <button onClick={() => { alert(name.value) }}>点击</button>
    </div>
  )
}

function useInputValue(initialValue: any) {
  let [value, setValue] = useState(initialValue);
  let onChange = useCallback(function (event) {
    if(typeof event === 'string'){
      setValue(event)
    }else
    setValue(event.currentTarget.value);
  }, []);

  return {
    value,
    onChange
  };
}