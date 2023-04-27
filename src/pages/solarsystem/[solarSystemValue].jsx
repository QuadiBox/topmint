import { linksData } from '../../utilities/PathlinkData';
import { useState, useEffect, useContext } from 'react';
import { themeContext } from '../../../providers/ThemeProvider';
import { handleToggles } from '../../utilities/Randomizer';
import TransitionPage from '../../components/transitionPage'; 
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../../components/navbar';
import Sect1 from '../../components/solarSystem/Sect1';
import Footer from '../../components/footer';
import MainSect from '../../components/solarSystem/MainSect';
import Link from 'next/link';

export default function SolarSystemValue ({ data, param }) {
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

    useEffect(() => {
        console.log(data);
        console.log(param);
    }, []);


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
                                        <motion.div layoutId="pointer" className="navMarker"></motion.div>
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
                                        <motion.div layoutId="pointer" className="navMarker"></motion.div>
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
                                        <motion.div layoutId="pointer" className="navMarker"></motion.div>
                                    ) 
                                }
                            </p>

                        )
                    }
                </div>
            </div>
            <MainSect data={data} navOption={navOption}/>

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
                    data.next && (
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
    );
}


export async function getServerSideProps (context) {
    const { params } = context;
    const { solarSystemValue } = params;

    const linksDat = linksData;
  
  
    return {
        props: {
            data: linksDat.solarsystem[solarSystemValue], 
            param: solarSystemValue,
        }
    }
  }