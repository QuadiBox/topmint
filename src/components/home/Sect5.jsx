import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from "framer-motion";

const Sect5 = () => {
    const [text, setText] = useState("☉E⚷♄φI♀⚶ ♁♅♆V♃⚸☾🜍");
    const loadtext = "FeedBack Form"
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
    
            if (iterations >= 13) {
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
            x: inView ? 0: 0,
            opacity: inView? 1: 0.95,
            transition:{
                staggerChildren: 0.2,
                duration: 0.1,
            }
        }
    }

    const parentVariant = {
        clad: {
            x: inView ? 0: 0,
            opacity: inView? 1: 0.9,
            transition:{
                duration: 0.02,
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

    const childFullSlideRight = {
        clad: {
            x: inView ? 0 : "-90%" ,
            opacity: inView ? 1 : 0,
            transition:{
                type: "spring",
                stiffness: 200,
                damping: 30
            }
        }
    }

    const childFullSlideLeft = {
        clad: {
            x: inView ? 0 : "90%" ,
            opacity: inView ? 1 : 0,
            transition:{
                type: "spring",
                stiffness: 200,
                damping: 30,
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        }
    }


    

  return (
        <motion.section variants={parentVar} animate="clad" ref={sectRef} className='sect5-home'>
            <div className="divider"></div>


            <div style={{overflowY: "hidden"}}><motion.h1 variants={childVarUp}>{text}</motion.h1></div>
            <motion.p variants={childVarSlide} className="instruction">...we'll love to know what you think about this website</motion.p>

            <motion.div variants={parentVariant} className="contactCntnHome">
                <motion.form variants={childFullSlideLeft} className="contactForm">
                    <motion.div variants={childVarSlide} className="mailInputCntn">
                        <input 
                            type="text" 
                            className="NameInput"
                            required
                            autoComplete="true"
                            spellCheck="false"
                            placeholder='Fullname'
                        />
                        <div className="animatedInputBorder"></div>
                    </motion.div>

                    <motion.div variants={childVarSlide} className="mailInputCntn">
                        <input 
                            type="text" 
                            className="NameInput"
                            required
                            autoComplete="true"
                            spellCheck="false"
                            placeholder='Email'
                        />
                        <div className="animatedInputBorder"></div>
                    </motion.div>

                    <motion.div variants={childVarSlide} className="textareaCntn">
                        <textarea name="textarea" placeholder='What do you think?'></textarea>
                        <div className="animatedInputBorder"></div>
                    </motion.div>

                    <motion.button variants={childVarUp} type="submit" className='submitFeedbackBtn afterHover'>Send</motion.button>
                </motion.form>

                <motion.div variants={childFullSlideRight} className="complementaryCard">
                    <div className="filterCard"></div>
                    <h3>" The sky is not the limit. There are footprints on the Moon and beyond. "</h3>
                    <p>- Buzz Aldrin, 2009</p>
                </motion.div>
            </motion.div>
            
        </motion.section>
    )
}

export default Sect5
