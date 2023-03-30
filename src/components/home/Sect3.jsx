import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion';

const Sect3 = () => {
    const [text, setText] = useState("☉E⚷ ♁♅♆V♃⚸☾🜍");
    const loadtext = "Mars Weather"
    const letters = "A}\sJ:X|#f*Gkl,;_!C/<sdR";
    const sectRef = useRef(null);

    const inView = useInView(sectRef, { once: true, amount: 0.35 });
    const inView2 = useInView(sectRef, { once: true, amount: 0.4 });

    const handleWordEffect = () => {
        let iterations = 0;
    
        const inetrvals = setInterval(() => {
          const utilArr = loadtext.split(""). map((letter, idx) => {
            if (idx < iterations) {
              return loadtext[idx];
            }
    
            return letters[Math.floor(Math.random() * 24)]
          }).join("");
    
          setText(utilArr);
    
            if (iterations >= 12) {
                clearInterval(inetrvals)
            }
    
          iterations += 1/3;
        }, 30);
    
    };

    useEffect(() => {
        if ( inView ) {
            handleWordEffect();
        }

    }, [inView2]);

    //Animation Variables
    const parentVar = {
        clad: {
            opacity: inView? 1: 0.99,
            transition:{
                staggerChildren: 0.2,
            }
        }
    }

    const childVarUp = {
        clad: {
            y: inView ? 0 : "100%",
            opacity: inView ? 1 : 0,
            transition:{
                ease: "easeOut",
                duration: 0.3,
            }
        }
    }

    const childVarSlide = {
        clad: {
            x: inView ? 0 : "10%" ,
            opacity: inView ? 1 : 0,
            transition:{
                ease: "easeIn",
                duration: 0.2
            }
        }
    }

    const scaleVertival = {
        clad: {
            scaleY: inView ? 1 : 0.001,
            opacity: inView ? 1 : 0,
            transition:{
                ease: "easeIn",
                duration: 0.4,
                when: "beforeChildren"
            }
        }
    }

    const fadeIn = {
        clad: {
            opacity: inView ? 1 : 0,
            transition:{
                ease: "easeIn",
                duration: 0.4,
            }
        }
    }

    const slideleft = {
        clad: {
            x: inView ? 0 : "60%" ,
            opacity: inView ? 1 : 0,
            transition:{
                ease: "easeIn",
                duration: 0.4
            }
        }
    }




    return (
        <motion.section variants={parentVar} animate="clad" ref={sectRef} className='sect3-home'>
            <div className="banner"></div>
            <div className="divider"></div>


            <div className="headTextCntn">
                <div style={{overflowY: "hidden"}}><motion.h1 variants={childVarUp}>{text}</motion.h1></div>
                <motion.p variants={childVarSlide} className="instruction">...data gathered by NASA&apos;s Curiosity Rover</motion.p>
            </div>

            <motion.div variants={scaleVertival} className="marsWeatherDataCntn">
                {/* <div className="panOverlay"></div> */}
                <motion.iframe variants={fadeIn} src='https://mars.nasa.gov/layout/embed/image/mslweather/' width="1000" height="570" scrolling='no'  frameBorder='0'></motion.iframe>
            </motion.div>

            <motion.div variants={slideleft} className="hintcard">
                <div className="first">
                    <span className="coloredtile brown"></span>
                    <p>Sol 1 = 1 martian day from the landing of the Curiosity rover.</p>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Sect3
