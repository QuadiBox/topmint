import { createContext, useState } from "react";

export const themeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [showAbsMain, setShowAbsMain] = useState(true);


    return (
        <themeContext.Provider 
            value={{
                showAbsMain,
                setShowAbsMain,
            }}
        >
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider
