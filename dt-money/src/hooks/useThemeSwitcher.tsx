import { createContext, useContext, useState } from "react";

interface ThemeSwitcherContextData {
  theme: string
  handleChangeTheme: () => void
}

const ThemeSwitcherContext = createContext({} as ThemeSwitcherContextData)

export function ThemeSwitcherProvider({ children }: any) {
  const [theme, setTheme] = useState('light')

  function handleChangeTheme() {
    if(theme === 'light') {
      return setTheme('dark')
    } else {
      return setTheme('light')
    }
  } 

  return (
    <ThemeSwitcherContext.Provider
      value={{
        theme, 
        handleChangeTheme
      }}
    >
      {children}
    </ThemeSwitcherContext.Provider>
  )
}

export function useThemeSwitcher() {
  const context = useContext(ThemeSwitcherContext)
  return context
}