import React, { useState } from 'react';
import { ThemeContext, themes } from './hook-theme-context';
import { ThemeToolBal } from './hook-theme-toolbal';

export const ThemeApp = () => {
  const [state, setState] = useState(themes.light);
  const toggleTheme = () => {
    alert('1');

    setState(() => (state === themes.dark ? themes.light : themes.dark));
  };
    return <ThemeContext.Provider value={state}>
      <ThemeToolBal changeTheme={toggleTheme} />
  </ThemeContext.Provider> 
};
