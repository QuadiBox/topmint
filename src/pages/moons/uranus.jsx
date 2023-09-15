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


const Uranus = ({ data }) => {
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
        title: "Planetary Moons",
        the_data: [
            {
               id: "satelliteParent01",
               color: "#6f6f6f",
               name: "Earth's Moon",
               note: "The fifth largest moon in the solar system, Earth's moon is the only place beyond Earth where humans have set foot.",
               image_src: "/moon_poster_A.jpg",
               link: "/moons/earth",
               icon:  null
            },
            {
                id: "satelliteParent02",
               color: "#b68e2a",
               name: "Mars Moons",
               note: "Mars' moons are among the smallest in the solar system. Mars has two moons, Phobos and Deimos. Both are believed to be captured asteroids.",
               image_src: "/phobosMoons_bg.jpg",
               link: "/moons/mars",
               icon: null
            },
            {
                id: "satelliteParent03",
               color: "#ECA730",
               name: "Jupiter Moons",
               note: "Jupiter's  moons showcase a range of fascinating features, including volcanic activity, subsurface oceans, and ancient cratered terrains, making them prime targets for potential habitats for extraterrestrial life.",
               image_src: "/io_poster_A.jpg",
               link: "/moons/jupiter",
               icon:  null
            },
            {
                id: "satelliteParent04",
               color: "#A2C4D9",
               name: "Saturn Moons",
               note: "The moons of Saturn are numerous and diverse, ranging from tiny moonlets only tens of meters across to the enormous Titan, which is larger than the planet Mercury.",
               image_src: "/enceladus_poster_A.jpg",
               link: "/moons/saturn",
               icon: null
            },
            {
                id: "satelliteParent05",
               color: "#717171",
               name: "Uranus Moons",
               note: "Uranus' moons are named after characters that appear in, or are mentioned in, the works of William Shakespeare and Alexander Pope.",
               image_src: "/umbriel_poster_A.jpg",
               link: "/moons/uranus",
               icon:  "icofont-readernaut"
            },
            {
                id: "satelliteParent06",
               color: "#acc7df",
               name: "Neptune Moons",
               note: "The planet Neptune has 14 known moons, which are named for minor water deities in Greek mythology. By far the largest of them is Triton.",
               image_src: "/triton_poster_A.jpg",
               link: "/moons/neptune",
               icon: null
            },
            {
                id: "satelliteParent07",
               color: "#8E3C2D",
               name: "Pluto Moons",
               note: "Charon, the largest, is mutually tidally locked with Pluto, and is massive enough that Pluto-Charon is sometimes considered a double dwarf planet.",
               image_src: "/plutoXcharon.jpg",
               link: "/moons/pluto",
               icon: null
            },
        ]
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

            <MainSect data={data} navOption={navOption} factor={35}/>
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
                        <>
                            <SearchBoxInterface/>
                            <ScrollButton/>   
                        </>
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

export default Uranus

export async function getServerSideProps ( ) {
    const linksDat = linksData;

    return {
        props: {
            data: linksDat.moons.uranus
        }
    }
}
