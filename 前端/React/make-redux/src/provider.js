import React, { Component } from 'react'
import { StoreContext } from './store'
export class Provider extends Component {
  static contextType = StoreContext;

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return (
      <StoreContext.Provider value={this.getChildContext()}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}