import React from 'react'
import ThemeChange from './theme-change'
import connect from '../stores/connect'

let Content = (props) => {
  return (
    <div style={{ 'color': props.themeColor }}>
      我是Content
      <ThemeChange />
    </div>
  )
}
const state = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Content = connect(state)(Content);
export default Content;