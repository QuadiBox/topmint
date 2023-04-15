import React, { useContext, useState, useEffect } from 'react';
import { handleToggles } from '../../utilities/Randomizer';
import { themeContext } from '../../../providers/ThemeProvider';
import TransitionPage from '../../components/transitionPage';
import { useRouter } from 'next/router';
import { AnimatePresence, motion  } from 'framer-motion';
import Navbar from '../../components/navbar';
import MiniFooter from '../../components/MiniFooter';
import Star_questSect1 from '../../components/search/Star_questSect1';


const Star_quest = () => {
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

    const grandparentvar = {
      init: {
        opacity: 0.8,
      },
      finale: {
        opacity: 1,
        transition: {
          duration: 0.2,
          when: "beforeChildren",
          staggerChildren: 0.3
        }
      }
    }

    const slideUp = {
      init: {
        y: "120%",
        rotate: 10,
        opacity: 0.1
      },
      finale: {
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            type: "spring",
            damping: 30,
            stiffness: 200
        }
      }
    }


    return (
      <motion.div initial="init" animate="finale" variants={grandparentvar} className='planetQueryBasicPage' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
        <Navbar/>
        <div className="topQueryDisplay" style={{backgroundImage: "url(/star_quest.jpg)"}}>
          <div style={{overflow: "hidden"}}>
            <motion.h1 variants={slideUp}>Star Quest</motion.h1>
          </div>

          <img src={"/spikyAbs.svg"} alt="spikyImage" />
        </div>

        <Star_questSect1/>
        <MiniFooter/>
      
        <TransitionPage animateState={"initial"}/>
        <AnimatePresence mode='wait'>
            {!showExit && (
            <TransitionPage animateState={"exit"}/>
            )}
        </AnimatePresence>
      </motion.div>
    )
}

export default Star_quest
