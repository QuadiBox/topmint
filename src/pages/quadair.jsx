import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link';
import TransOverlay from "../components/TransOverlay";
import { useRouter } from "next/router";

const Quadair = () => {
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
                    <p className='decoText'>QuadAir</p>
                </div>

                <div className="mainProjectDisplay">
                    <div className="leftFirstBox">
                        <h1>QuadAir</h1>
                        <p>An insightful introduction to data handling and third-party API consumption, QuadAir is a mimick airline website with a relatively all basic airline website functionlities.</p>
                        <p>Harnessing the handy privileges of free third party APIs, the subtle ambition of its developer and the Qatar Airways website as a base template, QuadAir provides a well-tailored trial space to book, and pay for flights making for a break away from reality for its users living in <span>delulu</span> land. You even get a dashboard to monitor your flight counts and procedures.</p>
                    </div>
                    <div className="rightFirstBox">
                        <h3>QUICK <span>Notes</span></h3>
                        <div className="bottomRightSect">
                            <div className="unitBott">
                                <p>SCOPE</p>
                                <span></span>
                                <p className='text2'>Web Development, Research</p>
                            </div>
                            <div className="unitBott">
                                <p>DEVELOPER</p>
                                <span></span>
                                <p className='text2'>QuadVox.</p>
                            </div>
                            <div className="unitBott">
                                <p>URL</p>
                                <span></span>
                                <a href="https://quadair.netlify.app/" target='_blank'>quadair.netlify.app</a>
                            </div>
                            <div className="unitBott">
                                <p>SOURCE CODE</p>
                                <span></span>
                                <a href="https://github.com/QuadiBox" target='_blank'>Null</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="projectLogo">
                    <div style={{overflow: "hidden"}} className="itemCntn leftMargin">
                        <motion.div initial={{ opacity: 0, y: "100%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} className="logo">
                            <span className="Q">Quad</span>
                            <span className="B">Air</span>{" "}
                            <i className="icofont-brand-aircell"></i>
                        </motion.div>
                        <p className="itemLabel">(Logo)</p>
                    </div>
                    <div style={{overflow: "hidden"}} className="itemCntn quadMark">
                        <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} src="/IconAir.png" alt="QuadAir logomark" />
                        <p className="itemLabel">(Logo Mark)</p>
                    </div>
                </div>
            </section>
            <section className="projectSecSect">
                <div style={{overflow: "hidden"}} className="itemCntn leftMargin">
                    <motion.div initial={{ opacity: 0, y: "100%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.1 }} className='colorPallete'>
                        <span style={{backgroundColor: "#702963"}} className="unitPallete p1"></span>
                        <span style={{backgroundColor: "#D76060"}} className="unitPallete p2"></span>
                        <span style={{backgroundColor: "#316e82"}} className="unitPallete p3"></span>
                        <span style={{backgroundColor: "#feeb18"}} className="unitPallete p4"></span>
                        <span style={{backgroundColor: "#313131"}} className="unitPallete p5"></span>
                        <span style={{backgroundColor: "#FFF5FF"}} className="unitPallete p6"></span>
                        <span style={{backgroundColor: "#010101"}} className="unitPallete p7"></span>
                        <span style={{backgroundColor: "#FFC75F"}} className="unitPallete p8"></span>
                    </motion.div>
                    <p className="itemLabel">(Color Board)</p>
                </div>

                <div className="colorDatacntn">
                    <motion.p initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} className="colorData">Practically, the colors were chosen for my love of purple and all it's shades then using the color harmony theory to choose pleasing and suiting colors in tandem with my shade of purple. Eventually, a pleasing interface that serves it's purpose and appears seemingly attractive was achieved.</motion.p>
                </div>
            </section>
            <section className="fontSect">
                <div className="fontCntn">
                    <p className='transText quadair'><span className='times'>Times New Roman</span> <i className="icofont-drag3"></i> <span className='aleg'>Alegreya Sans</span> <i className="icofont-drag3"></i> <span className='Jose'>Josefin Sans</span> <i className="icofont-drag3"></i> <span className='oswald'>Oswald</span> <i className="icofont-drag3"></i> <span className='geo'>Georgia</span> <i className="icofont-drag3"></i> <span className='times'>Times New Roman</span> <i className="icofont-drag3"></i> <span className='aleg'>Alegreya Sans</span> <i className="icofont-drag3"></i> <span className='Jose'>Josefin Sans</span> <i className="icofont-drag3"></i> <span className='oswald'>Oswald</span> <i className="icofont-drag3"></i> <span className='geo'>Georgia</span></p>
                </div>
                <p className="itemLabel">(Fonts.)</p>
            </section>

            <section className="moodboard quadmood">
                <div className="heroBoard">
                    <div style={{overflow: "hidden"}} className="itemCntn heroBox">
                        <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} src="hero.png" alt="QuadAir Hero section .png" />
                        <p className="itemLabel">(Hero Section.)</p>
                    </div>

                    <div className="signLog">
                        <div style={{overflow: "hidden"}} className="itemCntn sign">
                            <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} src="signUp.jpg" alt="QuadAir Sign Up page .jpg" />
                            <p className="itemLabel">(Sign Up page.)</p>
                        </div>
                        <div style={{overflow: "hidden"}} className="itemCntn log">
                            <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} src="login.jpg" alt="QuadAir Log In .jpg" />
                            <p className="itemLabel">(Login page.)</p>
                        </div>
                    </div>
                </div>
                <div className="dashBoard">
                    <div className="wavyCntn">
                        <div style={{overflow: "hidden"}} className="itemCntn dash">
                            <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} src="dash_1.png" alt="QuadAir Dash page .jpg" />
                            <p className="itemLabel">(Dashboard page.)</p>
                        </div>
                        <div style={{overflow: "hidden"}} className="itemCntn help">
                            <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} src="help_1.png" alt="QuadAir Help .jpg" />
                            <p className="itemLabel">(Help page.)</p>
                        </div>
                    </div>
                    <div className="colorDatacntn dash">
                        <motion.p initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} className="colorData">By the use of wavy patterns to blend sections and footers, QuadVerse acquires a seamless, clean and gentle feel making for an all-round soothing user experience.</motion.p>
                    </div>
                </div>
                <div className="thridPiece">
                    <div className="interactivesCnTn quadair">
                        <div style={{overflow: "hidden"}} className="itemCntn unitInteractive margDown">
                            <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} src="pre_1.png" alt="QuadAir selection img" />
                            <p className="itemLabel">(Flight Selection page.)</p>
                        </div>
                        <div style={{overflow: "hidden"}} className="itemCntn unitInteractive ">
                            <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} src="help_2.png" alt="QuadAir Help img" />
                            <p className="itemLabel">(Help page.)</p>
                        </div>  
                        <div style={{overflow: "hidden"}} className="itemCntn unitInteractive margUp">
                            <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} src="dash_2.png" alt="QuadAir Dash page .jpg" />
                            <p className="itemLabel">(Dashboard page.)</p>
                        </div>
                    </div>
                </div>
                <div className="payment">
                    <div className="colorDatacntn dash">
                        <motion.p initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} className="colorData">Paystack was used as the third party payment system, payments carried out are just test payment since everything on QuadAir is just a mimick, nothing is real apart from the amazing designs ofcourse.</motion.p>
                    </div>
                    <div className="wavyCntn2">
                        <div style={{overflow: "hidden"}} className="itemCntn succ">
                            <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} src="payment_success.png" alt="QuadAir Dash page .jpg" />
                            <p className="itemLabel">(Payment success.)</p>
                        </div>
                        <div style={{overflow: "hidden"}} className="itemCntn auth">
                            <motion.img initial={{ opacity: 0, y: "70%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} src="payment_auth.png" alt="QuadAir payment .jpg" />
                            <p className="itemLabel">(Payment Auth.)</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="exploreIframe">
                <div style={{overflow: "hidden"}} className="iframeCntn">
                    <motion.iframe initial={{ opacity: 0, y: "50%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.15 }} src="https://quadair.netlify.app/" frameborder="0"></motion.iframe>
                    <p className="itemLabel">Desktop <br/> + <br/> mobile</p>
                </div>
            </section>

            <footer className='ProjectPageFooter'>
                <Link href={"/"} className="headBackHome home">
                    <div className="transLink gobckHomeLink"><img src="/arrowside.svg" alt="arrow-right image .svg" /></div>
                    <p>Go Back Home</p>
                </Link>
                <Link href={"/quadverse"} className="headBackHome quad">
                    <p>Go To QuadVerse</p>
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

export default Quadair
