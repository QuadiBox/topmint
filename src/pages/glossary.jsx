import { useState, useEffect, useContext, useRef } from 'react';
import TransitionPage from '../components/transitionPage';
import { handleToggles } from '../utilities/Randomizer';
import { AnimatePresence, motion } from 'framer-motion';
import { themeContext } from '../../providers/ThemeProvider';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import GlossSect1 from '../components/glossary/GlossSect1';

const Glossary = () => {
  const router = useRouter();
  const [showExit, setShowExit] = useState(false);
  const ctx = useContext(themeContext);
  const { setShowOtherPageLinks } = ctx;
  const [searchFocusMonitor, setSearchFocusMonitor] = useState(false);


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


  const handleSearchBarToggles = (e) => {
    if (e.target.className === "glossSearchInput" || e.target.className === "imgsearchInputCntn") {
      setSearchFocusMonitor(true);
    } else {
      setSearchFocusMonitor(false);
    }
  }


  //Animation Variables 
  const parentVar = {
    init: {
      opacity: 0.9
    },
    finale: {
      opacity: 1,
      transition: {
        duration: 0.05,
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  }

  const slideUp = {
    init: {
      opacity: 0,
      y: "100%"
    },
    finale: {
      opacity: 1,
      y: 0,
      transition: {
        damping: 30,
        type: "spring",
        stiffness: 200,
      }
    }
  }

  const fadeIn = {
    init: {
      opacity: 0,
      y: 5
    },
    finale: {
      opacity: 1,
      y: 0,
      transition: {
        damping: 30,
        type: "spring",
        stiffness: 200,
      }
    }
  }


  return (
    <div className='glossarysect'  onClick={(e) => {handleToggles( e, setShowOtherPageLinks); handleSearchBarToggles(e)}}>
      <Navbar/>
      <motion.section initial="init" animate="finale" variants={parentVar} className={`solarSystem-Sect1`} style={{backgroundImage: `linear-gradient( 150deg, #130711e6, #130711b2, #1307115d), linear-gradient( to bottom, transparent, 80%,#241822ea), url(/glossary_1.jpg)`}}>
          <div className="heroSect-1">
              <div className="details">
                <div style={{overflow: "hidden"}}>
                  <motion.h1 variants={slideUp}>Welcome To The Glossary</motion.h1>
                </div>
              </div>

              <div className="valueByNumber">
                  <div className="unitVBN">
                    <p>Unus</p>
                    <div style={{overflow: "hidden"}}>
                      <motion.h3 variants={slideUp}>Query</motion.h3>
                    </div>
                  </div>
                  <div className="unitVBN">
                      <p>Duo</p>
                      <div style={{overflow: "hidden"}}>
                          <motion.h3 variants={slideUp}>Find</motion.h3>
                      </div>
                  </div>
                  <div className="unitVBN">
                      <p>Tribus</p>
                      <div style={{overflow: "hidden"}}>
                          <motion.h3 variants={slideUp}>Learn</motion.h3>
                      </div>
                  </div>
                  <div className="unitVBN">
                      <p>Quattuor</p>
                      <div style={{overflow: "hidden"}}>
                          <motion.h3 variants={slideUp}>Enjoy</motion.h3>
                      </div>
                  </div>
              </div>
          </div>
      </motion.section>
      <GlossSect1 searchFocusMonitor={searchFocusMonitor} setSearchFocusMonitor={setSearchFocusMonitor}/>
      <Footer bg={"transparent"}/>
      

      <TransitionPage animateState={"initial"}/>
      <AnimatePresence mode='wait'>
          {!showExit && (
            <TransitionPage animateState={"exit"}/>
          )}
      </AnimatePresence>
        
    </div>
  )
}

export default Glossary
