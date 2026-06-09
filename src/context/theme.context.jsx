import { createContext, useState } from "react";

// the Context component => is in charge of passing the globals states around the app
const ThemeContext = createContext()

// the Wrapper component => is in charge of holding the states and wrapping the app
function ThemeWrapper(props) {

  const [theme, setTheme] = useState("dark")

  const handleToggleTheme = () => {
    setTheme( theme === "dark" ? "light" : "dark" )
  }

  const passedContext = {
    theme,
    setTheme,
    handleToggleTheme
  }

  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext,
  ThemeWrapper
}