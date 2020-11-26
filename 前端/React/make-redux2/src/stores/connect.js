// import React from 'react';
// import { useEffect, useState, useReducer, memo } from 'react';
// const connect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => {
//   const NewComponent = (props) => {
//     const [state, setState] = useState(null);


//     updateProps = () => {
//       let stateProps = mapStateToProps ? mapStateToProps(store.getState(), props) : {};
//       let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, props) : {};
//       setState({
//         ...stateProps,
//         ...dispatchProps,
//         ...props
//       })
//     }
//     useEffect(() => {
//       this.updateProps();
//       store.subscribe(updateProps);
//     }, [])
//     return (<WrappedComponent {...state} />)
//   }
//   return NewComponent;
// }

// export default connect;

import React from 'react';
import { StoreContext } from './store'
const connect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => {
  class NewComponent extends React.Component {
    static contextType = StoreContext;
    constructor() {
      super();
      this.state = { allProps: {} }
    }
    componentWillMount() {
      const  themeStore = this.context;
      this._updateProps();
      themeStore.subscribe(() => { this._updateProps() });
    }
    _updateProps() {
      const themeStore = this.context;
      console.log('themeStore', themeStore)
      console.log('themeStore',themeStore)
      const stateProps = mapStateToProps ? mapStateToProps(themeStore.getState(), this.props) : {};
      const dispatchProps = mapDispatchToProps ? mapDispatchToProps(themeStore.dispatch, this.props) : {};
      this.setState({
        allProps: {
          ...this.props,
          ...stateProps,
          ...dispatchProps
        }
      })
    }
    render() {
      return (<WrappedComponent {...this.state.allProps} />);
    }
  }
  return NewComponent;
}

export default connect