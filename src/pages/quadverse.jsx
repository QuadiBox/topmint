import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';
import TransOverlay from "../components/TransOverlay";
import { useRouter } from "next/router";


const Quadverse = () => {
    const router = useRouter();
    const [showExit, setShowExit] = useState(false);

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
        <main className='projectDisplayCntn'>
            <nav className='projectNav'>
                <Link href={"/"}>
                    <motion.div  className="center"><img src="/darkLogosmall.png" alt="" /></motion.div>
                </Link>
            </nav>

            <section className='projectFirstSect'>
                <div className="firstSectNav">
                    <Link href={"/"}>Home</Link>
                    <span><i className="icofont-thin-double-right"></i></span>
                    <p>Projects</p>
                    <span><i className="icofont-thin-double-right"></i></span>
                    <p className='decoText'>QuadVerse</p>
                </div>

                <div className="mainProjectDisplay">
                    <div className="leftFirstBox">
                        <h1>QuadVerse</h1>
                        <p>A fascinating space-education digital platform. QuadVerse is a collective of space-related learning and visualization softwares making for an interactive, immersive, narrative and educating space-education process.</p>
                        <p>Leveraging the powerful privileges of NASA softwares, third party APIs, AI softwares and sheer brilliance of its developer, QuadVerse provides a well-tailored exploration experience to its users. It boasts of <span>270+</span> fun filled pages.</p>
                    </div>
                    <div className="rightFirstBox">
                        <h3>QUICK <span>Notes</span></h3>
                        <div className="bottomRightSect">
                            <div className="unitBott">
                                <p>SCOPE</p>
                                <span></span>
                                <p className='text2'>Web Design & Development, Research</p>
                            </div>
                            <div className="unitBott">
                                <p>DEVELOPER</p>
                                <span></span>
                                <p className='text2'>QuadVox.</p>
                            </div>
                            <div className="unitBott">
                                <p>URL</p>
                                <span></span>
                                <a href="https://quadverse.vercel.app/" target='_blank'>quadverse.vercel.app</a>
                            </div>
                            <div className="unitBott">
                                <p>SOURCE CODE</p>
                                <span></span>
                                <a href="https://github.com/QuadiBox/quadverse" target='_blank'>github.com_quadverse</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="projectLogo">
                    <div style={{overflow: "hidden"}} className="itemCntn leftMargin">
                        <motion.div initial={{ opacity: 0, y: "100%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} className="logoAbsMain">
                            <motion.div className="Q">Quad</motion.div> <motion.div className="V">Verse</motion.div> <motion.img src="/LogoVerse.svg" alt="Quadverse logo" /> 
                        </motion.div>
                        <p className="itemLabel">(Logo)</p>
                    </div>
                    <div className="itemCntn quadMark">
                        <motion.img initial={{ opacity: 0, y: "50%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.12 }} src="/IconVerseLarge.png" alt="Quadverse logomark" />
                        <p className="itemLabel">(Logo Mark)</p>
                    </div>
                </div>
            </section>
            <section className="projectSecSect">
                <div style={{overflow: "hidden"}}  className="itemCntn leftMargin">
                    <motion.div initial={{ opacity: 0, y: "100%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} className='colorPallete'>
                        <span className="unitPallete p1"></span>
                        <span className="unitPallete p2"></span>
                        <span className="unitPallete p3"></span>
                        <span className="unitPallete p4"></span>
                        <span className="unitPallete p5"></span>
                        <span className="unitPallete p6"></span>
                        <span className="unitPallete p7"></span>
                        <span className="unitPallete p8"></span>
                    </motion.div>
                    <p className="itemLabel">(Color Board)</p>
                </div>

                <div className="colorDatacntn">
                    <motion.p initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.1 }} className="colorData">The colors were carefully chosen for their specific purposes and usecases. Generally, the calm colors are to give a harmonious learning and exploration process while alternating bright color are to spike users curiosity to create a superb rollercoaster experience of unprecedented excitement.</motion.p>
                </div>
            </section>
            <section className="fontSect">
                <div className="fontCntn">
                    <p className='transText'><span className='unica'>Unica One</span> <i className="icofont-drag3"></i> <span className='aleg'>Alegreya Sans</span> <i className="icofont-drag3"></i> <span className='jost'>Jost</span> <i className="icofont-drag3"></i> <span className='ibm'>IBM Plex Mono</span> <i className="icofont-drag3"></i> <span className='metro'>Metrophobic</span> <i className="icofont-drag3"></i> <span className='unica'>Unica One</span> <i className="icofont-drag3"></i> <span className='aleg'>Alegreya Sans</span> <i className="icofont-drag3"></i> <span className='jost'>Jost</span> <i className="icofont-drag3"></i> <span className='ibm'>IBM Plex Mono</span> <i className="icofont-drag3"></i> <span className='metro'>Metrophobic</span></p>
                </div>
                <p className="itemLabel">(Fonts.)</p>
            </section>

            <section className="moodboard">
                <div className="firstPiece">
                    <div style={{overflow: "hidden"}} className="itemCntn landing">
                        <motion.img initial={{ opacity: 0, y: "100%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.07 }} src="/landing.png" alt="landing page image .png" />
                        <p className="itemLabel">(Landing page.)</p>
                    </div>
                    <div style={{overflow: "hidden"}} className="itemCntn search">
                        <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.07 }} src="/search.jpg" alt="search apod .jpg" />
                        <p className="itemLabel">(Search page.)</p>
                    </div>
                    <div style={{overflow: "hidden"}} className="itemCntn apod">
                        <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.07 }} src="/read.jpg" alt=" read .jpg" />
                        <p className="itemLabel">(Solar System [study] page.)</p>
                    </div>
                </div>
                <div className="SecPiece">
                    <div className="cropDisplays">
                        <div style={{overflow: "hidden"}} className="itemCntn apodd">
                            <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.07 }} src="/apod.jpg" alt="astronomy picture of the day .jpg" />
                            <p className="itemLabel">(APOD page.)</p>
                        </div>
                        <div style={{overflow: "hidden"}} className="itemCntn cropp">
                            <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.07 }} src="/cropp.png" alt="cropp .png" />
                        </div>
                    </div>

                    <div className="colorDatacntn cropp">
                        <p className="colorData">By the use of intricate in-cut shapes for images/containers and concentric gentle pattern for backgrounds, QuadVerse acquires a futuristic and sci-fi feel making for an absolutely pleasant excitement for its users and explorers.</p>
                    </div>
                </div>
                <div className="thridPiece">
                    <div className="interactivesCnTn">
                        <div style={{overflow: "hidden"}} className="itemCntn unitInteractive">
                            <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.07 }} src="/earthe.png" alt="3D earth interface .png" />
                            <p className="itemLabel">(Eyes On Earth page. [3D])</p>
                        </div>
                        <div style={{overflow: "hidden"}} className="itemCntn unitInteractive">
                            <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.07 }} src="/aster_sc.png" alt="3D asteroid interface .png" />
                            <p className="itemLabel">(Eyes On Asteroids page. [3D])</p>
                        </div>
                        <div style={{overflow: "hidden"}} className="itemCntn unitInteractive">
                            <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.07 }} src="/curio.png" alt="3D earth interface .png" />
                            <p className="itemLabel">(Experience Curiosity page. [3D])</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="exploreIframe">
                <div style={{overflow: "hidden"}} className="iframeCntn">
                    <motion.iframe initial={{ opacity: 0, y: "50%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.07 }} src="https://quadverse.vercel.app/" frameborder="0"></motion.iframe>
                    <p className="itemLabel">Desktop <br/> + <br/> mobile</p>
                </div>
            </section>

            <footer className='ProjectPageFooter'>
                <Link href={"/"} className="headBackHome home">
                    <div className="transLink gobckHomeLink"><img src="/arrowside.svg" alt="arrow-right image .svg" /></div>
                    <p>Go Back Home</p>
                </Link>
                <Link href={"/quadair"} className="headBackHome quad">
                    <p>Go To QuadAir</p>
                    <div className="transLink quadair"><img src="/arrowside.svg" alt="arrow-right image .svg" /></div>
                </Link>

            </footer>

            <TransOverlay animateState={"initial"}/>
            <AnimatePresence mode="wait">
                {!showExit && (
                    <TransOverlay animateState={"exit"}/>
                )}
            </AnimatePresence>

        </main>
    )
}

export default Quadverse
