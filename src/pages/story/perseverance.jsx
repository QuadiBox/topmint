import { useState, useContext } from 'react';
import { themeContext } from '../../../providers/ThemeProvider';
import { handleToggles } from '../../utilities/Randomizer';
import TransitionPage from '../../components/transitionPage'
import { useRouter } from 'next/router';
import Navbar from '../../components/navbar';
import { AnimatePresence } from 'framer-motion';


const Perseverance = ({ data }) => {
    const [showExit, setShowExit] = useState(false);
    const router = useRouter();
    const ctx = useContext(themeContext);
    const { setShowOtherPageLinks } = ctx;


    return (
        <div className='solarsystemHomePage' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
            <Navbar trackback={"true"}/>
            <div className='storyExplorationCntn'>
                <iframe src={"https://eyes.nasa.gov/apps/mars2020/#/home"} allowFullScreen allow='fullscreen' frameborder="0" scrolling='no' width="1200" height="900"></iframe>
            </div>

            <TransitionPage animateState={"initial"}/>
            <AnimatePresence mode='wait'>
                {!showExit && (
                  <TransitionPage animateState={"exit"}/>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Perseverance