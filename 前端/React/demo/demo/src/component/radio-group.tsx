import React from 'react'

export const RadioGroup = (props) => {
  return (
    <div>
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, { name: props.name })
      )}
    </div>
  )
}
