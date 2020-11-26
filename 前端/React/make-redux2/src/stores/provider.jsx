import React from 'react'
import { StoreContext, themeStore } from './store'
export class Provider extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <StoreContext.Provider value={themeStore}>
          {this.props.children}
        </StoreContext.Provider>
      </>
    )
  }
}