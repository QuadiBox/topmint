import { useState, useEffect, useContext } from 'react';
import { themeContext } from '../../../providers/ThemeProvider';
import { handleToggles } from '../../utilities/Randomizer';
import TransitionPage from '../../components/transitionPage'
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../../components/navbar';
import { linksData } from '../../utilities/PathlinkData';
import Sect1 from '../../components/solarSystem/Sect1';
import Footer from '../../components/footer';
import MainSect from '../../components/solarSystem/MainSect';
import Link from 'next/link';

const Saturn = ({ data }) => {
    const [showExit, setShowExit] = useState(false);
    const router = useRouter();
    const ctx = useContext(themeContext);
    const { setShowOtherPageLinks } = ctx;
    const [ navOption, setNavOptions ] = useState("overview");

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
    <div className='solarsystemHomePage' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
        <Navbar/>
        <Sect1 data={data}/>

        <div className="navigationSelect">
            <div className="navOptionsCntn">
                {
                    data.overview && (
                        <p
                            onClick={() => {setNavOptions("overview")}}
                            className={navOption === "overview" ? 'activeNavOption' : ""}
                        >
                            Overview
                            {
                                navOption === "overview" && (
                                    <motion.span layoutId="pointer" className="navMarker"></motion.span>
                                ) 
                            }
                        </p>

                    )
                }
                {
                    data.moonList && (
                        <p 
                            onClick={() => {setNavOptions("moonList")}}
                            className={navOption === "moonList" ? 'activeNavOption' : ""}
                        >
                            Moon List
                            {
                                navOption === "moonList" && (
                                    <motion.span layoutId="pointer" className="navMarker"></motion.span>
                                ) 
                            }
                        </p>

                    )
                }
            </div>
        </div>

        <MainSect data={data} navOption={navOption} factor={32}/>

        <div className="nextPrevSect">
            {
                data?.prev && (
                    <Link href={data?.prev.value} className="nextPrev navPrev">
                        <p>Prev</p>
                        <h3>{data?.prev.key}</h3>
                    </Link>
                )
            }
            {
                data?.next && (
                    <Link href={data?.next.value} className="nextPrev navNext">
                        <p>Next</p>
                        <h3>{data?.next.key}</h3>
                    </Link>
                )
            }
        </div>

        
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

export default Saturn

export async function getServerSideProps ( ) {
    const linksDat = linksData;

    return {
        props: {
            data: linksDat.moons.saturn
        }
    }
}
