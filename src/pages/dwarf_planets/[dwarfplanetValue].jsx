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
import Planets_Sect from '../../components/solarSystem/Planets_Sect';



const DwarfplanetValue = ({ data, param }) => {
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



    const planetsListData = {
        title: "Dwarf Planets",
        the_data: [
            {
               id: "dwarfplanet01",
               color: "#a52a2a",
               name: "Pluto",
               note: "Pluto, once considered the ninth planet of our solar system, is a dwarf planet located in the outer regions of the Kuiper Belt. Its most prominent features is the heart-shaped Tombaugh Regio, named after Pluto's discoverer.",
               image_src: "/pluto_poster_A.jpg",
               link: "/dwarf_planets/pluto",
               icon: param === "pluto" ? "icofont-readernaut": null
            },
            {
                id: "dwarfplanet02",
               color: "#6f6f6f",
               name: "Ceres",
               note: "Ceres, the largest object in the asteroid belt between Mars and Jupiter. With a diameter of about 940 kilometers, Ceres is classified as a dwarf planet.",
               image_src: "/ceres_poster_A.jpg",
               link: "/dwarf_planets/ceres",
               icon: param === "ceres" ? "icofont-readernaut": null
            },
            {
                id: "dwarfplanet03",
               color: "#e75603",
               name: "Makemake",
               note: "Makemake, named after the creation deity of the Rapa Nui people, is a fascinating dwarf planet located in the distant Kuiper Belt region of our solar system.",
               image_src: "/makemake_color.jpg",
               link: "/dwarf_planets/makemake",
               icon: param === "makemake" ? "icofont-readernaut": null
            },
            {
                id: "dwarfplanet04",
               color: "#6b8787",
               name: "Haumea",
               note: "Haumea, named after the Hawaiian goddess of childbirth and fertility, is a peculiar and intriguing dwarf planet located in the Kuiper Belt. With an elongated and flattened shape.",
               image_src: "/haumea_poster_A.webp",
               link: "/dwarf_planets/haumea",
               icon: param === "haumea" ? "icofont-readernaut": null
            },
            {
                id: "dwarfplanet05",
               color: "#7e6f6f",
               name: "Eris",
               note: "Eris, named after the Greek goddess of strife and discord, is a fascinating dwarf planet located in the distant Kuiper Belt. Eris is one of the largest known objects in this icy realm.",
               image_src: "/eris_poster_A.jpg",
               link: "/dwarf_planets/eris",
               icon: param === "eris" ? "icofont-readernaut": null
            },
        ]
    }

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
            <MainSect data={data} navOption={navOption} factor={18}/>
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


            <TransitionPage animateState={"initial"}/>
            <AnimatePresence mode='wait'>
                {!showExit && (
                     <TransitionPage animateState={"exit"}/>
                )}
            </AnimatePresence>

        
        </div>
    )
}

export default DwarfplanetValue

export async function getServerSideProps (context) {
    const { params } = context;
    const { dwarfplanetValue } = params;

    const linksDat = linksData;
  
    return {
        props: {
            data: linksDat.dwarf_planets[dwarfplanetValue], 
            param: dwarfplanetValue,
        }
    }
}
