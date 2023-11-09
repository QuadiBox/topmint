import {useState, useRef} from 'react';
import { motion, useInView } from "framer-motion";
import Link from 'next/link';


const Sect4 = () => {
    const [displayedImage, setDisplayedImage] = useState("/quadair_1.png");
    const ballRef = useRef(null);
    const sectRef = useRef(null);

    const inView = useInView(sectRef, { once: true, amount: 0.07 });

    const parentVar = {
        clad: {
            opacity: inView ? 1: 0.99,
            transition:{
                duration: 0.01,
            }
        }
    }

    const slideUp = {
        clad: {
            y: inView ? 0: "100%",
            opacity: inView? 1: 0,
            transition:{
                ease: "easeInOut",
                duration: 0.7,
            }
        }
    }

    const fadeIn = {
        clad: {
            opacity: inView ? 1: 0,
            transition:{
                ease: "easeInOut",
                duration: 0.5,
            }
        }
    }


    const handleCursorTrailer = (e, vlad) => {
        vlad.current.style.opacity = 1;
        const containerRect = sectRef.current.getBoundingClientRect();
        const offsetY = e.clientY - containerRect.top;
    
        const x = e.clientX / sectRef.current.clientWidth * 100;
        const y = offsetY / sectRef.current.clientHeight * 100;
    
      
        const keyframes = {
          top: `${y}%`,
          left: `${x}%`
        }
      
        vlad.current.animate(keyframes, {
          duration: 600,
          fill: "forwards"
        });
    }

    return (
        <motion.section variants={parentVar} animate="clad" id='works' ref={sectRef} className="homeFourthSect" onMouseEnter={(e) => {handleCursorTrailer(e, ballRef)}} onMouseMove={(e) => {handleCursorTrailer(e, ballRef)}}>
            <div className="overlaysect">
                <div style={{overflow: "hidden", width: "100%"}}>
                    <motion.h2 variants={slideUp}>Project Exhibition</motion.h2>
                </div>
                <div className="worksMainSect">
                    <motion.div initial={{ opacity: 0, y: "10%", x: "10%" }} whileInView={{ opacity: 1, y: 0, x: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.12 }} className="leftWorkBox"><img src={displayedImage} alt="wooden airplane image {#QuadAir}" /></motion.div>
                    <div className="rightWorkBox">
                        <motion.div initial={{ opacity: 0, y: "50%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.17 }} className="unitWorkBox" onMouseEnter={() => {setDisplayedImage("/quadair_1.png")}} onMouseLeave={() => {setDisplayedImage("/quadair_1.png")}}>
                            <div className="topImageDisplay"><img src="/quadair_h.png" alt="wooden airplane image {#QuadAir}" /></div>
                            <Link href={"/quadair"}>QuadAir: An Exploration of Airline website designs and functionalities <span><i class="icofont-hand-left"></i> Click me.</span></Link>
                            <div className='bottomWorkboxUnit'>
                                <p>January 2023 - March 2023</p>
                                <a href="https://quadair.netlify.app/" target='_blank' className="visit_site">
                                    <p>Visit Site</p>
                                    <div className="visitSiteLink"><img src="/arrowside.svg" alt="arrow-right image .svg" /></div>
                                </a>
                            </div>
                        </motion.div>
                        <div className='hrDiv'></div>
                        <motion.div initial={{ opacity: 0, y: "50%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.17 }} className="unitWorkBox" onMouseEnter={() => {setDisplayedImage("/quadverse_1.png")}} onMouseLeave={() => {setDisplayedImage("/quadair_1.png")}}>
                            <div className="topImageDisplay"><img src="/quadverse_h.png" alt="wooden airplane image {#QuadAir}" /></div>
                            <Link href={"/quadverse"}>QuadVerse: A detailed Insight into our Universe and its Science <span><i class="icofont-hand-left"></i> Click me.</span></Link>
                            <div className='bottomWorkboxUnit'>
                                <p>April 2023 - October 2023</p>
                                <a href="https://quadverse.vercel.app/" target='_blank' className="visit_site">
                                    <p>Visit Site</p>
                                    <div className="visitSiteLink"><img src="/arrowside.svg" alt="arrow-right image .svg" /></div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div variants={fadeIn} ref={ballRef} className="bgBall"></motion.div>
        </motion.section>
    )
}

export default Sect4
