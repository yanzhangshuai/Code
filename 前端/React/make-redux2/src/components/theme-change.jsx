import React from 'react'
import connect from '../stores/connect'
let ThemeChange = (props) => {
  console.log('props.color', props.color)

  return (
    <div >
      <button style={{ 'color': props.color }} onClick={() => {
        if(props.onSwitchColor){
          props.onSwitchColor('blue');
        }
        
      }}>蓝色</button>
      <button style={{ 'color': props.color }} onClick={
        () => {
          if(props.onSwitchColor){
            props.onSwitchColor('red');
          }
        }
      }>红色</button>
    </div>
  )
}

const state = (state) => {
  return { color: state.themeColor }
}

const d = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      console.log('dispatch',dispatch);
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }

}
ThemeChange = connect(state, d)(ThemeChange);
export default ThemeChange;