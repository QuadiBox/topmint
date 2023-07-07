import React, { useState, useEffect, useContext } from 'react';
import { themeContext } from '../../../providers/ThemeProvider';
import { handleToggles } from '../../utilities/Randomizer';
import TransitionPage from '../../components/transitionPage'
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../../components/navbar';
import { linksData } from '../../utilities/PathlinkData';
import Sect1 from '../../components/solarSystem/Sect1';
import Footer from '../../components/footer';
import Link from 'next/link';

const Index = () => {
    const [showExit, setShowExit] = useState(false);
    const router = useRouter();
    const ctx = useContext(themeContext);
    const { setShowOtherPageLinks, setNavBackLink } = ctx;

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

    const handleNavBackLinkSet = (vlad) => {
        setNavBackLink(vlad);
    };

    // Animation Variables
    const parentVar = {
        init: {
            opacity: 0.9
        },
        finale: {
            opacity: 1,
            transition: {
            duration: 0.05,
            when: "beforeChildren",
            staggerChildren: 0.1,
            }
        }
    }

    const slideUp = {
        init: {
            opacity: 0,
            y: "100%"
        },
        finale: {
            opacity: 1,
            y: 0,
            transition: {
            damping: 30,
            type: "spring",
            stiffness: 200,
            }
        }
    }

    const fadeIn = {
        init: {
            opacity: 0,
            y: 5
        },
        finale: {
            opacity: 1,
            y: 0,
            transition: {
            damping: 30,
            type: "spring",
            stiffness: 200,
            }
        }
    }

    return (
        <main className='solarsystemHomePage playground' onClick={(e) => {handleToggles( e, setShowOtherPageLinks)}}>
            <Navbar/>
            <motion.section initial="init" animate="finale" variants={parentVar} className={`solarSystem-Sect1`} style={{backgroundImage: `linear-gradient( 150deg, #130711e6, #130711b2, #1307115d), linear-gradient( to bottom, transparent, 80%,#241822ea), url(/playground_1.jpg)`}}>
                <div className="heroSect-1">
                    <div className="details">
                        <div style={{overflow: "hidden"}}>
                            <motion.h1 variants={slideUp}>Welcome To Playgrounds</motion.h1>
                        </div>
                        <motion.p variants={fadeIn}>Experience all the immersive perks of 3D interactivity and storytelling.</motion.p>
                    </div>

                    <div className="valueByNumber">
                        
                        <div className="unitVBN">
                            <p>Unus</p>
                            <div style={{overflow: "hidden"}}>
                                <motion.h3 variants={slideUp}>Educative</motion.h3>
                            </div>
                        </div>
                        <div className="unitVBN">
                            <p>Duo</p>
                            <div style={{overflow: "hidden"}}>
                                <motion.h3 variants={slideUp}>Immersive</motion.h3>
                            </div>
                        </div>
                        <div className="unitVBN">
                            <p>Tribus</p>
                            <div style={{overflow: "hidden"}}>
                                <motion.h3 variants={slideUp}>Narrative</motion.h3>
                            </div>
                        </div>
                        <div className="unitVBN">
                            <p>Quattuor</p>
                            <div style={{overflow: "hidden"}}>
                                <motion.h3 variants={slideUp}>Interactive</motion.h3>
                            </div>
                        </div>
                            
                    </div>

                </div>
            </motion.section>

            <section className="interactive_Sect">
                <div className='header_1' style={{overflow: "hidden"}}>
                    <motion.h2 initial="init" animate="finale" variants={slideUp}>INTERACTIVES</motion.h2>
                </div>

                <div className="theGrid">
                    <div className="firstTwo">
                        <Link 
                            href={"/interactives/solarsystem"} 
                            className="unitInteractive"  
                            style={{backgroundImage: `linear-gradient(to bottom right, #1307115d, #130711e6, #1307115d), url(/juice_bg.jpg)`}}
                            onClick={() => {handleNavBackLinkSet("/playground")}}
                        >
                            <div className="description_Cntn">
                                <div className='title_container'>
                                    <h3><span>EYES</span> <span>ON</span> <span>THE</span></h3>
                                    <h2 className='UtilText'>SOLAR SYSTEM</h2>
                                </div>
                                <p>Real-time 3D visualisation of our precious solar system - Past, Present and Future.</p>
                            </div>
                            <button className="goExploreBtn" type="button"><span>GO</span><i class="icofont-ui-video-chat"></i></button>
                        </Link>
                        <Link 
                            href={"/interactives/orrery"} 
                            className="unitInteractive" 
                            style={{backgroundImage: `linear-gradient(to bottom right, #130711f1, #130711b2, #130711b2), url(/solarsystem2.jpg)`}}
                            onClick={() => {handleNavBackLinkSet("/playground")}}
                        >
                            <div className="description_Cntn">
                                <div className='title_container'>
                                    <h3><span>THE</span> <span>ORRERY</span> <span>OF</span> <span>OUR</span></h3>
                                    <h2 className='UtilText'>SOLAR SYSTEM</h2>
                                </div>
                                <p>A live 3D look at the relative sizes of bodies in our solar system.</p>
                            </div>
                            <button className="goExploreBtn" type="button"><span>GO</span><i class="icofont-ui-video-chat"></i></button>                        
                        </Link>
                    </div>
                    <div className="middle_large">
                        <Link 
                            href={"/interactives/earth"} 
                            className="unitInteractive" 
                            style={{backgroundImage: `linear-gradient(to bottom right, #130711f1, #130711b2, #130711b2), url(/earthUtil2.jpg)`}}
                            onClick={() => {handleNavBackLinkSet("/playground")}}
                        >
                            <div className="description_Cntn">
                                <div className='title_container'>
                                    <h2 className='UtilText'>EYES ON THE EARTH</h2>
                                </div>
                                <p>Explore, experience and study all the latest Earth's data in 3D.</p>
                            </div>
                            <button className="goExploreBtn" type="button"><span>GO</span><i class="icofont-ui-video-chat"></i></button>
                        </Link>
                    </div>
                    <div className="firstTwo">
                        <Link 
                            href={"/interactives/asteroids"} 
                            className="unitInteractive" 
                            style={{backgroundImage: `linear-gradient(to bottom right, #1307115d, #130711e6, #1307115d), url(/asteroid_belt_1.webp)`}}
                            onClick={() => {handleNavBackLinkSet("/playground")}}
                        >
                            <div className="description_Cntn">
                                <div className='title_container'>
                                    <h2>EYES ON THE ASTEROIDS</h2>
                                </div>
                                <p>Explore and track all near-Earth objects including asteroids, comets and space debris in real-time.</p>
                            </div>
                            <button className="goExploreBtn" type="button"><span>GO</span><i class="icofont-ui-video-chat"></i></button>                        </Link>
                        <Link 
                            href={"/interactives/exo"} 
                            className="unitInteractive" 
                            style={{backgroundImage: `linear-gradient(to bottom right, #1307115d, #130711e6, #1307115d), url(/earth_future.jpg)`}}
                            onClick={() => {handleNavBackLinkSet("/playground")}}
                        >
                            <div className="description_Cntn">
                                <div className='title_container'>
                                    <h2>EYES ON EXOPLANETS</h2>
                                </div>
                                <p>Explore worlds beyond the bounds of our solar system in full 3D immersion.</p>
                            </div>
                            <button className="goExploreBtn" type="button"><span>GO</span><i class="icofont-ui-video-chat"></i></button>                        </Link>
                    </div>
                </div>
            </section>

            <section className="stories_Sect">
                <div className="header_2" style={{overflow: "hidden"}}>
                    <motion.h2 initial="init" animate="finale" variants={slideUp}>STORIES & EVENTS</motion.h2>
                </div>

                <div className="accordion_Cntn">
                    <Link href={"/story/enceladus"} className="accordion_unit acc2" onClick={() => {handleNavBackLinkSet("/playground")}}>
                        <div className="darkener_acc"></div>
                        <button type="button" className='btn_2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 20a8 8 0 0 0 7.992-8.357c.256-.229.496-.457.72-.682a.75.75 0 0 0-1.004-1.111a7.978 7.978 0 0 0-1.546-2.953c.299-.05.582-.089.847-.113a.75.75 0 0 0-.138-1.494c-.424.04-.874.106-1.345.2a.747.747 0 0 0-.472.309a8 8 0 0 0-13.013 7.024a.75.75 0 0 0-.73.193c-.334.336-.635.669-.896.995a.75.75 0 1 0 1.172.937c.202-.253.438-.518.707-.792a7.981 7.981 0 0 0 1.6 3.014a.75.75 0 0 0 .591 1.34a17.8 17.8 0 0 0 .666-.146A7.965 7.965 0 0 0 12 20Zm-4.849-1.636a8.052 8.052 0 0 1-1.256-1.194a.747.747 0 0 1 .3-.132c.996-.198 2.136-.53 3.36-.99a.75.75 0 0 1 .528 1.405c-1.03.387-2.018.693-2.932.91ZM19.708 9.85a.758.758 0 0 0-.06.054c-.687.692-1.568 1.43-2.61 2.171a.75.75 0 0 0 .871 1.222a24.04 24.04 0 0 0 2.083-1.654a7.99 7.99 0 0 0-.284-1.793Zm1.229-4.47a.75.75 0 1 0-.346 1.459c.394.093.546.232.602.322c.063.102.133.366-.157.948a.75.75 0 0 0 1.343.67c.378-.759.563-1.65.086-2.413c-.344-.55-.923-.843-1.528-.987ZM2.815 16.25a.75.75 0 0 0-1.43-.455c-.191.601-.211 1.262.15 1.84c.453.724 1.307 1.006 2.154 1.087a.75.75 0 1 0 .143-1.493c-.694-.066-.948-.267-1.025-.39c-.05-.08-.102-.244.008-.589Zm12.935-1.546a.75.75 0 1 0-.77-1.287a35.086 35.086 0 0 1-3.092 1.645a.75.75 0 0 0 .638 1.357a36.938 36.938 0 0 0 3.224-1.715Z" clip-rule="evenodd"/></svg>
                            <span>Enceladus Discovery</span>
                        </button>
                        <div className="accordion_content">
                            <p className="accodrion_text">An immersive insight into the Cassini space missions and it's discovery of the Saturnian moon - Enceladus, the mission timelines and discoveries in story mode.</p>
                        </div>
                    </Link>
                    <Link href={"/story/voyager"} className="accordion_unit acc1" onClick={() => {handleNavBackLinkSet("/playground")}}>
                        <button type="button" className='btn_1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 24 24"><g fill="currentColor"><path fill-rule="evenodd" d="M13.086 5.04L2.333 10.36a.75.75 0 0 1-.665-1.345l12.428-6.146l.145 1.01a1.013 1.013 0 0 0 .039.134c.042.124.126.334.285.624c.317.58.936 1.484 2.126 2.673c1.19 1.19 2.093 1.808 2.673 2.126c.29.159.5.243.624.285a1.436 1.436 0 0 0 .133.039l1.01.145l-6.145 12.428a.75.75 0 1 1-1.345-.665l5.318-10.754a6.846 6.846 0 0 1-.316-.162c-.618-.34-1.45-.908-2.473-1.86L5.53 19.53a.75.75 0 0 1-1.06-1.06L15.109 7.83c-.953-1.023-1.521-1.855-1.86-2.474a6.883 6.883 0 0 1-.163-.315Z" clip-rule="evenodd" opacity=".5"/><path d="m20.824 10.527l.307-.622l-1.01-.145l-.01-.002a1.44 1.44 0 0 1-.123-.037a4.022 4.022 0 0 1-.624-.285c-.58-.318-1.484-.937-2.673-2.126c-1.19-1.19-1.809-2.093-2.126-2.673a3.9 3.9 0 0 1-.285-.624a1.452 1.452 0 0 1-.037-.124l-.002-.01l-.145-1.01l-.626.31a5.225 5.225 0 0 1 7.354 7.348Zm-2.51 1.69l.645-1.303a6.755 6.755 0 0 1-.316-.162c-.618-.34-1.45-.908-2.473-1.86l-2.52 2.519a5.228 5.228 0 0 0 4.664.806ZM12.59 10.35l2.519-2.519c-.953-1.023-1.521-1.855-1.86-2.474a6.888 6.888 0 0 1-.163-.315l-1.304.645a5.228 5.228 0 0 0 .808 4.663Z"/></g></svg>
                            <span>Grand Voyage</span>
                        </button>
                        <div className="accordion_content">
                            <p className="accodrion_text">An immersive insight into the Voyager space missions - the farthest faring spacecrafts, the mission timelines and discoveries in story mode.</p>
                        </div>
                    </Link>
                    <Link href={"/story/perseverance"} className="accordion_unit acc3" onClick={() => {handleNavBackLinkSet("/playground")}}>
                        <div className="darkener_acc"></div>
                        <button type="button" className='btn_3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 24 24">
                                <g fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.675 7.594C3.432 8.359 2 9.523 2 10.826C2 13.133 6.477 15 12 15s10-1.868 10-4.174c0-1.303-1.432-2.467-3.675-3.232c-.124.29-.331.584-.668.818C16.869 8.96 15.3 9.5 12 9.5s-4.869-.54-5.657-1.088a1.893 1.893 0 0 1-.668-.818ZM12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4-2a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm9 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z" clip-rule="evenodd"/>
                                    <path d="M12 17.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z"/>
                                    <path d="M7.055 7.005A4.73 4.73 0 0 1 11.729 3h.542a4.73 4.73 0 0 1 4.674 4.005a.429.429 0 0 1-.145.175c-.414.288-1.61.82-4.8.82c-3.19 0-4.386-.532-4.8-.82a.429.429 0 0 1-.145-.175ZM6 16.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm12.75.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-3Z" opacity=".5"/>
                                </g>
                            </svg>
                            <span>Mars 2020</span>
                        </button>
                        <div className="accordion_content">
                            <p className="accodrion_text">A 3D storytelling look into the Perseverance mars lander mission, the mission timelines and accounts in immersive display.</p>
                        </div>
                    </Link>
                </div>
            </section>



            <Footer bg={"transparent"}/>

            <TransitionPage animateState={"initial"}/>
            <AnimatePresence mode='wait'>
                {!showExit && (
                    <TransitionPage animateState={"exit"}/>
                )}
            </AnimatePresence>
        </main>
    );
}

export default Index
