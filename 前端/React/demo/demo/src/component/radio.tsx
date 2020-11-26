import React from 'react'

export const Raido = ({ children, ...reset }) => {
  return (
    <label>
      <input type="radio" {...reset} />
      {children}
    </label>
  )
}
