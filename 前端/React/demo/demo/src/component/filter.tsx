import React from 'react'

export const Filter = (props) => {
  return React.Children.map(props.children, (child) => {
    if (child.type === 'p') {
      return
    }
    return child
  })
}
