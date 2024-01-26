import { createContext, useEffect, useState } from "react";

export const themeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [showAbsMain, setShowAbsMain] = useState(true);

    const [registerFromPath, setregisterFromPath] = useState("/");

    const [currentUser, setCurrentUser] = useState({});


    useEffect(() => {
        const getActiveUser = JSON.parse(sessionStorage.getItem("activeUser")) || {};
        setCurrentUser(getActiveUser);
    }, []);


    return (
        <themeContext.Provider 
            value={{
                showAbsMain,
                setShowAbsMain,
                currentUser,
                setCurrentUser,
                registerFromPath,
                setregisterFromPath
            }}
        >
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider
