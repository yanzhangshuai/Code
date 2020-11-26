import React from 'react'
import connect from '../stores/connect'
let Header = (props) => {
  return (
    <div style={{'color':props.color}}>
      我是HEADER
    </div>
  )
}

const state = (state) => {
  return {
    color: state.themeColor
  }
}
Header =connect(state)(Header);

export default Header;