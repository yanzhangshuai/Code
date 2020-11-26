import React from 'react'
import { ClassThemeContext, classTheme } from './class-theme-context'
import { ClassThemeToolbal } from './class-theme-toolbal'

export class ClassThemeApp extends React.Component<any,any> {
  constructor(props) {
    super(props)
    this.state = {
      theme: classTheme.light,
      }
      this.onChangeTheme = this.onChangeTheme.bind(this);
  }
    onChangeTheme(): void {
        this.state.theme === classTheme.light?
      this.setState({ theme: classTheme.dark}):
      this.setState({ theme: classTheme.light})
  }

  render() {
    return (
      <ClassThemeContext.Provider value={this.state.theme}>
      <ClassThemeToolbal onClick={this.onChangeTheme} />
    </ClassThemeContext.Provider>
    )
  }
}
