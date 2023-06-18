import { useState, useEffect, useContext } from 'react';
import { themeContext } from '../../../providers/ThemeProvider';
import { handleToggles } from '../../utilities/Randomizer';
import TransitionPage from '../../components/transitionPage'
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../../components/navbar';
import { linksData } from '../../utilities/MoonLinksData';
import Sect1 from '../../components/solarSystem/Sect1';
import Footer from '../../components/footer';
import MainSect from '../../components/solarSystem/MainSect';
import Link from 'next/link';
import MoonsSect from '../../components/solarSystem/MoonsSect';
import ScrollButton from '../../components/ScrollButton';


const MoonLinkValue = ({ data, param }) => {
    const [showExit, setShowExit] = useState(false);
    const router = useRouter();
    const ctx = useContext(themeContext);
    const { setShowOtherPageLinks } = ctx;
    const [ navOption, setNavOptions ] = useState("overview");
    const [ inview, setInview ] = useState(true);


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

    if ( !data?.baseText ) {
        return (
            <MoonsSect data={data} />
        )
    }

    return (
        <div className='solarsystemHomePage' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
            <Navbar/>
            <Sect1 data={data} setInview={setInview}/>

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
                        data.inDepth && (
                            <p 
                                onClick={() => {setNavOptions("indepth")}}
                                className={navOption === "indepth" ? 'activeNavOption' : ""}
                            >
                                In Depth
                                {
                                    navOption === "indepth" && (
                                        <motion.span layoutId="pointer" className="navMarker"></motion.span>
                                    ) 
                                }
                            </p>

                        )
                    }
                    {
                        data.summary && (
                            <p 
                                onClick={() => {setNavOptions("summary")}}
                                className={navOption === "summary" ? 'activeNavOption' : ""}
                            >
                                Summary
                                {
                                    navOption === "summary" && (
                                        <motion.span layoutId="pointer" className="navMarker"></motion.span>
                                    ) 
                                }
                            </p>

                        )
                    }
                </div>
            </div>

            <MainSect data={data} navOption={navOption} factor={43}/>

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
            <AnimatePresence mode='wait'>
                {
                    navOption === "indepth" && !inview && (
                        <ScrollButton/>   
                    )
                }
            </AnimatePresence>

            <TransitionPage animateState={"initial"}/>
            <AnimatePresence mode='wait'>
                {!showExit && (
                    <TransitionPage animateState={"exit"}/>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MoonLinkValue

export async function getServerSideProps (context) {
    const linksDat = linksData;
    const { params } = context;
    const { moonLinkValue } = params;

    return {
        props: {
            data: linksDat.moons[moonLinkValue],
            param: moonLinkValue
        }
    }
}
