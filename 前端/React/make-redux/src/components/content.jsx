import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './theme-switch'
import { StoreContext } from '../store'
import { connect } from '../connect'
class Content extends Component {
  static contextType = StoreContext;


  render() {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}


Content = connect(state => {
  return {
    themeColor: state.themeColor
  }
})(Content)
export default Content;