import { createContext, useState } from "react";

export const themeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [showAbsMain, setShowAbsMain] = useState(true);
    const [showOtherPageLinks, setShowOtherPageLinks] = useState(false);
    const [ mainData, setMainData ] = useState([]);
    const [ navBackLink, setNavBackLink ] = useState("/space_missions_explorations/voyager_1");
    const [ showImageViewer, setShowImageViewer ] = useState(false);
    const [ activeImageViewerData, setActiveImageViwerData] = useState({
        content_type: "image",
        head: null,
        content: "/4_vesta.jpg",
        content_description: "This is an artists concept of Cassini during the Saturn Orbit Insertion (SOI) maneuver, just after the main engine has begun firing. Image source: NASA/JPL"
    },)

    return (
        <themeContext.Provider 
            value={{
                showAbsMain,
                setShowAbsMain,
                showOtherPageLinks,
                setShowOtherPageLinks,
                mainData,
                setMainData,
                navBackLink,
                setNavBackLink,
                showImageViewer,
                setShowImageViewer,
                activeImageViewerData, 
                setActiveImageViwerData
            }}
        >
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider
