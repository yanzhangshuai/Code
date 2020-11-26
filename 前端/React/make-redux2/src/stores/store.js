import React from 'react';
function createStore(reducer) {
  let state = null;
  const listeners = [];
  const getState = () => state;
  const dispatch = (action) => {
    console.log('213123123')
    state = reducer(state, action);
    console.log('213123123')

    listeners.forEach(d => d());
    console.log('213123123')

  }
  const subscribe = (d) => listeners.push(d);

  dispatch();//初始化
  return { getState, dispatch, subscribe };
}

const themeReducer = (state, action) => {
  if (!state) return { themeColor: 'red' };
  if (action.type === 'CHANGE_COLOR') {
    return { ...state, themeColor: action.themeColor }
  }
  return state;
}

const themeStore = createStore(themeReducer);

const StoreContext = React.createContext(themeStore);

export { themeStore, StoreContext }

