import { useState, useContext } from 'react';
import { themeContext } from '../../../providers/ThemeProvider';
import { handleToggles } from '../../utilities/Randomizer';
import TransitionPage from '../../components/transitionPage'
import { useRouter } from 'next/router';
import Navbar from '../../components/navbar';
import { playgroundsData } from '../../utilities/playgroundUtil';
import { AnimatePresence } from 'framer-motion';


const Interactives = ({ data }) => {
    const [showExit, setShowExit] = useState(false);
    const router = useRouter();
    const ctx = useContext(themeContext);
    const { setShowOtherPageLinks } = ctx;


    return (
        <div className='solarsystemHomePage' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
            <Navbar trackback={"true"}/>
            <div className='storyExplorationCntn'>
                <iframe src={data} allowFullScreen allow='fullscreen' frameborder="0" scrolling='no' width="1200" height="900"></iframe>
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

export default Interactives

export async function getServerSideProps ( context ) {
    const { params } = context;
    const { interactiveValue } = params;
    const linksDat = playgroundsData;

    return {
        props: {
          data: linksDat.interactives[interactiveValue]
        }
    }
}
