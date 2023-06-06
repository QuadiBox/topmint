import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { handleToggles } from '../../utilities/Randomizer';
import TransitionPage from '../transitionPage';
import { themeContext } from '../../../providers/ThemeProvider';
import { useRouter } from 'next/router';
import Footer from '../footer';
import Link from 'next/link';
import Navbar from '../navbar';


const MoonsSect = ({ data }) => {
    const [showExit, setShowExit] = useState(false);
    const router = useRouter();
    const ctx = useContext(themeContext);
    const { setShowOtherPageLinks } = ctx;

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


    //Animation variables
    const parentvar = {
        init: {
            opacity: 0.9
        },
        finale: {
            opacity: 1,
            transition: {
                duration: 0.05,
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        }
    }

    const slideUp = {
        init: {
            y: "120%",
            rotate: 5,
            opacity: 0.05
        },
        finale: {
            y: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200
            }
        }
    }

    const swipeRight = {
        init: {
            x: "-60%",
            opacity: 0
        },
        finale: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 200
            }
        }
    }

    return (
        <motion.div initial="init" animate="finale" variants={parentvar} className='moonSection' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
            <Navbar/>
            <div className="subMoonSect">
                <motion.div variants={parentvar} className="pathHistory" style={{overflow: "hidden"}}>
                    <motion.div variants={slideUp} className="pathLink">
                        <Link href={"/"}>Home</Link>
                    </motion.div>
                    <motion.i variants={swipeRight} className="icofont-thin-double-right"></motion.i>
                    <motion.div variants={slideUp} className="pathLink">
                        <Link href={"/moons"}>Moons</Link>
                    </motion.div>
                    <motion.i variants={swipeRight} className="icofont-thin-double-right"></motion.i>
                    <motion.div variants={slideUp} className="pathLink">
                        <Link href={data?.parentLinkData.href}>{data?.parentLinkData.name}</Link>
                    </motion.div>
                    <motion.i variants={swipeRight} className="icofont-thin-double-right"></motion.i>
                    <motion.div variants={slideUp} className="pathLink">
                        <p>{data?.name}</p>
                    </motion.div>
                </motion.div>

                <h1>{data?.name}</h1>

                {
                    data?.inDepth.map((elem, idx) => (
                        <div className="unitParagraph" key={idx / 2.2}>
                            {
                                elem.title && (
                                    <h2>{elem.title}</h2>
                                )
                            }

                            {
                                elem?.texts.map((elem, index) => {
                                    if (elem?.content_type === "text") {
                                        return (
                                            <div key={index / 5.4567}>
                                                {elem.head && (
                                                    <motion.h3 initial={{ opacity: 0.2, rotate: 2, y: "20%" }} whileInView={{ opacity: 1, rotate: 0, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.2 }} >{elem.head} - </motion.h3>
                                                )}
                                                <motion.p initial={{ opacity: 0.2, rotate: 1, y: "10%" }} whileInView={{ opacity: 1, rotate: 0, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.07 }} className={index === 0 && idx === 0 ? 'firstText paratext' : "paratext"} key={`${index * 1.55}text`}>{elem.content}</motion.p>
                                            </div>
                                        )
                                    } else if (elem?.content_type === "image") {
                                        return (
                                            <motion.div initial={{ opacity: 0.2, y: "20%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.1 }} className="unitDetailImage" key={`${index + 1}image`}>
                                                <img src={elem.content} alt="BlaBla Vlad image" />
                                                <p className="imageDetails">{elem?.content_description}</p>
                                            </motion.div>
                                        )
                                    } else if (elem?.content_type === "video") {
                                        return (
                                            <motion.div initial={{ opacity: 0.2, y: "20%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.1 }} className="unitDetailImage" key={`${index + 1}image`}>
                                                <video src={elem.content} autoPlay loop muted></video>
                                                <p className="imageDetails">{elem?.content_description}</p>
                                            </motion.div>
                                        )
                                    } else {
                                        return(
                                            <div className="iframeCntn-indepth" key={index * 2.12345}>
                                                <iframe src={`https://www.youtube.com/embed/${elem.content}`} frameBorder="0" 
                                                scrolling='no' width="900" height="600"></iframe>
                                            </div>
                                        )
                                    }
                                })
                            }

                        </div>

                    ))
                }

                {
                    data?.overview.iframeLink && (
                        <div className="sectionIframe">

                            {
                                data?.overview.iframeLink.type === "iframe" && (
                                    <>
                                        <motion.div initial={{ opacity: 0.2, y: "10%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.1 }} className="iframeCntn">
                                            <iframe src={data?.overview.iframeLink.content} frameBorder="0" 
                                            scrolling='no' width="900" height="600"></iframe>
                                        </motion.div>
                                        <p><i className="icofont-info-square"> </i>   Interact with this interface to explore a relatively immersive 3d view of the Solar System. Click on any of the element to get a better view of it. Scroll up/down(pinch up/down) to zoom in/out.</p>
                                    </>
                                )
                            }

                            {
                                data?.overview.iframeLink.type === "image" && (
                                    <motion.div initial={{ opacity: 0.2, y: "10%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.1 }} className="unitDetailImage">
                                        <img src={data?.overview.iframeLink.content} alt="BlaBla Vlad image" />
                                        <p className="imageDetails">{data?.overview.iframeLink.content_description}</p>
                                    </motion.div>
                                )
                            }
                        </div>
                    )
                }
            </div>

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
        </motion.div>
    )
}

export default MoonsSect
