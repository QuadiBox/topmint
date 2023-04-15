import React, { useContext, useState, useEffect } from 'react';
import { handleToggles } from '../../../utilities/Randomizer';
import { themeContext } from '../../../../providers/ThemeProvider';
import TransitionPage from '../../../components/transitionPage';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../../../components/navbar';
import NasaIdSect1 from '../../../components/search/NasaIdSect1';
import Link from 'next/link';
import MiniFooter from '../../../components/MiniFooter';


export default function NasaId ({ details }) {
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

  useEffect(() => {
    console.log(details);
  }, []);

  //animation Variables
  

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




  return (
    <motion.div initial="init" animate="finale" variants={grandparentvar} className='image_library_detailMain' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
      <Navbar/>
      <NasaIdSect1 details={details}/>
      <MiniFooter/>

      <AnimatePresence mode='wait'>
          {!showExit && (
              <TransitionPage animateState={"exit"}/>
          )}
      </AnimatePresence>
    </motion.div>
  )
}


export async function getServerSideProps (context) {
  const { params } = context;
  const { nasaId } = params;

  const response = await fetch(`https://images-api.nasa.gov/search?nasa_id=${nasaId}`);
  const data = await response.json();

  return {
    props: {
      details: data.collection.items[0], 
    }
  }
}