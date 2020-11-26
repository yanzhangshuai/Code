import { createContext } from 'react';

export const classTheme = {
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
};
export const ClassThemeContext = createContext(classTheme.dark);
