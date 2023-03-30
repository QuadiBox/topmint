import React, { useContext, useState, useEffect } from 'react';
import { handleToggles } from '../../utilities/Randomizer';
import { themeContext } from '../../../providers/ThemeProvider';
import TransitionPage from '../../components/transitionPage';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';



const Apod = () => {
    const ctx = useContext(themeContext);
    const { setShowOtherPageLinks } = ctx;
    const [showExit, setShowExit] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleBeforeRouteChange = (url) => {
          // Do something before the route changes
          setShowExit(true);
        };
    
        // Subscribe to the router's "beforeHistoryChange" event
        router.events.on('beforeHistoryChange', handleBeforeRouteChange);
    
        // Unsubscribe from the event when the component is unmounted
        return () => {
          router.events.off('beforeHistoryChange', handleBeforeRouteChange);
        };
    }, [router.events]);


    return (
        <div className='apodBasicPage' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
            <h1>This here is the the search/apod</h1>
            <TransitionPage animateState={"initial"}/>
            <AnimatePresence mode='wait'>
                {!showExit && (
                <TransitionPage animateState={"exit"}/>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Apod
