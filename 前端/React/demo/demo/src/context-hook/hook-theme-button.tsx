import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './hook-theme-context'

export const ThemeButton = ({ children, ...recet }) => {
    const { background } = useContext(ThemeContext)
    console.log( useContext(ThemeContext))
  return (
    <button style={{ backgroundColor: background }} {...recet}>
      {children}
    </button>
  )
}
