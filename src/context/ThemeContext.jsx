import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export function ThemeContextProvider(props) {

    const [theme, setTheme] = useState('dark');

    function toggleTheme(){
        theme == 'dark'? setTheme('light'): setTheme('dark')
    }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
  )
}
