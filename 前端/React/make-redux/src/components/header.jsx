import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StoreContext } from '../store'
import { connect } from '../connect'
class Header extends Component {

  render() {
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Header = connect(mapStateToProps)(Header)

export default Header