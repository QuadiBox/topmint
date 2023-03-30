import { createContext, useState } from "react";

export const themeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [showAbsMain, setShowAbsMain] = useState(true);
    const [showOtherPageLinks, setShowOtherPageLinks] = useState(false);


  return (
        <themeContext.Provider 
            value={{
                showAbsMain,
                setShowAbsMain,
                showOtherPageLinks,
                setShowOtherPageLinks
            }}
        >
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider
