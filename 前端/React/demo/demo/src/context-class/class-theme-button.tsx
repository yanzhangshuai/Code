import React from 'react';
import { ClassThemeContext } from './class-theme-context';

export class ClassThemeButton extends React.Component {
  static contextType = ClassThemeContext;

  render() {
    const background: { background: string } = this.context;
    console.log(background);
    const { children, ...recet } = this.props;

    return (
      <button style={{ backgroundColor: background.background }} {...recet}>
        {children}
      </button>
    );
  }
}
