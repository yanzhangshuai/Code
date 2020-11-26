import React from 'react'
import { ThemeButton } from './hook-theme-button'

export const ThemeToolBal = (props) => {
  return <ThemeButton onClick={props.changeTheme}>Change Theme</ThemeButton>
}
