import { useState, useContext } from 'react';
import { themeContext } from '../../../providers/ThemeProvider';
import { handleToggles } from '../../utilities/Randomizer';
import TransitionPage from '../../components/transitionPage'
import { useRouter } from 'next/router';
import Navbar from '../../components/navbar';
import { linksData } from '../../utilities/PathlinkData';
import { AnimatePresence } from 'framer-motion';


const Voyager = ({ data }) => {
    const [showExit, setShowExit] = useState(false);
    const router = useRouter();
    const ctx = useContext(themeContext);
    const { setShowOtherPageLinks } = ctx;


    return (
        <div className='solarsystemHomePage' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
            <Navbar trackback={"true"}/>
            <div className='storyExplorationCntn'>
                <iframe src={data.href} allowFullScreen allow='fullscreen' frameborder="0" scrolling='no' width="1200" height="900"></iframe>
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

export default Voyager

export async function getServerSideProps ( ) {
    const linksDat = linksData;

    return {
        props: {
          data: linksDat.space_missions_explorations.voyager_1.exploration_link
        }
    }
}
