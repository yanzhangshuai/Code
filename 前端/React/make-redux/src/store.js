// export const store = {
//   createStore(reducer) {
//     let state = null;
//     const listeners = [];
//     const subscribe = (listener) => listeners.push(listener);
//     const getState = () => state;
//     const dispatch = (action) => {
//       state = reducer(state, action);
//       listeners.forEach((listener) => listener())
//     }
//     dispatch({});
//     return { getState, dispatch, subscribe };
//   }
// }
import React from 'react';
function createStore(reducer) {
  let state = null;
  const listeners = [];

  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }
  const subscribe = (listener) => listeners.push(listener);
  dispatch();
  return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  if (action.type === 'CHANGE_COLOR') {
    return { ...state, themeColor: action.themeColor }
  }
  return state;
}

const store = createStore(themeReducer)



const StoreContext = React.createContext(null);
export { store, StoreContext };