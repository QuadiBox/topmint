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
import Planets_Sect from '../../components/solarSystem/Planets_Sect';
import ScrollButton from '../../components/ScrollButton';


const Index = ({ data }) => {
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

    const planetsListData = {
        title: "Small Bodies",
        the_data: [
            {
               id: "smallBody01",
               color: "#acc7df",
               name: "Asteroids",
               note: "Small celestial rocky objects that orbit the Sun, ranging in size from small boulders to dwarf planets.",
               image_src: "/asteroids_poster_A.jpg",
               link: "/asteroids_comets_meteors/asteroids",
               icon:  null
            },
            {
                id: "smallBody02",
               color: "#A2C4D9",
               name: "Comets",
               note: "Comets are cosmic wanderers, composed of ice, dust, and organic compounds. When they approach the Sun, they develop a glowing coma and a beautiful tail, showcasing their ethereal beauty.",
               image_src: "/comets_poster_B.jpg",
               link: "/asteroids_comets_meteors/comets",
               icon: null
            },
            {
                id: "smallBody03",
               color: "#717171",
               name: "Meteors",
               note: "Celestial fireworks, streaks of light that grace our atmosphere.",
               image_src: "/meteors_poster_A.webp",
               link: "/asteroids_comets_meteors/meteors",
               icon:  null
            },
            
        ]
    }


    return (
        <div className='solarsystemHomePage overflow' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
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
                    {
                        data.visual_summary && (
                            <p 
                                onClick={() => {setNavOptions("visualSummary")}}
                                className={navOption === "visualSummary" ? 'activeNavOption' : ""}
                            >
                                Visual Summary
                                {
                                    navOption === "visualSummary" && (
                                        <motion.span layoutId="pointer" className="navMarker"></motion.span>
                                    ) 
                                }
                            </p>

                        )
                    }
                </div>
            </div>

            <MainSect data={data} navOption={navOption} factor={53}/>
            <Planets_Sect planetsListData={planetsListData}/>

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

export default Index

export async function getServerSideProps ( ) {
    const linksDat = linksData;

    return {
        props: {
            data: linksDat.asteroids_comets_meteors.asteroids_comets_meteors
        }
    }
}