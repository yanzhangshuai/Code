import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import { store } from './store'

// function renderApp(newAppState, oldAppState = {}) {
//   if (newAppState === oldAppState) return // 数据没有变化就不渲染了
//   console.log('render app...')
//   renderTitle(newAppState.title, oldAppState.title)
//   renderContent(newAppState.content, oldAppState.content)
// }

// function renderTitle(newTitle, oldTitle = {}) {
//   if (newTitle === oldTitle) return // 数据没有变化就不渲染了
//   console.log('render title...')
//   const titleDOM = document.getElementById('title')
//   titleDOM.innerHTML = newTitle.text
//   titleDOM.style.color = newTitle.color
// }

// function renderContent(newContent, oldContent = {}) {
//   if (newContent === oldContent) return // 数据没有变化就不渲染了
//   console.log('render content...')
//   const contentDOM = document.getElementById('content')
//   contentDOM.innerHTML = newContent.text
//   contentDOM.style.color = newContent.color
// }

// function dispatch(state, action) {
//   if (!state) {
//     return {
//       title: {
//         text: 'React.js 小书',
//         color: 'red',
//       },
//       content: {
//         text: 'React.js 小书内容',
//         color: 'blue'
//       }
//     }
//   }

//   switch (action.type) {
//     case 'UPDATE_TITLE_TEXT':
//       return { // 构建新的对象并且返回
//         ...state,
//         title: {
//           ...state.title,
//           text: action.text
//         }
//       }
//     case 'UPDATE_TITLE_COLOR':
//       return { // 构建新的对象并且返回
//         ...state,
//         title: {
//           ...state.title,
//           color: action.color
//         }
//       }
//     default:
//       return state;
//   }
// }
// const stores = store.createStore(dispatch);
// let oldState = stores.getState() // 缓存旧的 state
// stores.subscribe(() => {
//   const newState = stores.getState() // 数据可能变化，获取新的 state
//   renderApp(newState, oldState)
//   oldState = newState
// })
// renderApp(oldState)
// stores.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
// stores.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })
// console.log('stores.getState()', stores.getState())