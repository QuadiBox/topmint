import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion';

const Sect4 = () => {
    const [text, setText] = useState("☉E⚷ ♁♅♆V♃⚸☾🜍");
    const loadtext = "Our Articles"
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
            x: inView ? 0: 0,
            opacity: inView? 1: 0.95,
            transition:{
                staggerChildren: 0.15,
                duration: 0.1,
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

    const slideleft = {
        clad: {
            x: inView ? 0 : "100%" ,
            opacity: inView ? 1 : 0,
            transition:{
                ease: "easeIn",
                duration: 0.4
            }
        }
    }


  return (
    <motion.section ref={sectRef} variants={parentVar} animate="clad" className='sect4-home'>
        <div className="divider"></div>
        <div className="banner"></div>

        <div className="subSect4-home">

            <div>
                <div style={{overflowY: "hidden"}}><motion.h1 variants={childVarUp}>{text}</motion.h1></div>
                <motion.p variants={childVarSlide} className="instruction">...get to read some exciting news about our universe and all it contains</motion.p>
            </div>
            

            <div className="articlesDisplayerHome">

                <motion.div variants={parentVar} className="articlesCntn">
                    <motion.div variants={slideleft} tabIndex="100" className="articleUnit article1">
                        <div className="darkener"></div>
                        <div className="expand"><i className="icofont-plus"></i> <i className="icofont-minus"></i></div>
                        <div className='articleTopic'>
                            <Link href={"/articles/Io"}>Io: A World of Constant Chaos</Link>
                            <p>A detailed account of jupiter's moon Io and it's raging volcanic activities</p>
                        </div>
                    </motion.div>
                    <motion.div variants={slideleft} tabIndex="200" className="articleUnit article2">
                        <div className="darkener"></div>
                        <div className="expand"><i className="icofont-plus"></i> <i className="icofont-minus"></i></div>
                        <div className='articleTopic'>
                            <Link href={"/articles/solarSystem"}>Solar System History 101</Link>
                            <p>From where we came to what we've been through and where we are.</p>
                        </div>
                    </motion.div>
                    <motion.div variants={slideleft} tabIndex="300" className="articleUnit article3">
                        <div className="darkener"></div>
                        <div className="expand"><i className="icofont-plus"></i> <i className="icofont-minus"></i></div>
                        <div className='articleTopic'>
                            <Link href={"/articles/arewealone"}>Are we alone?</Link>
                            <p>Walking through the adventures of space exploration and finding signs of extraterestrial lifeforms.</p>
                        </div>
                    </motion.div>
                    <motion.div variants={slideleft} tabIndex="400" className="articleUnit article4">
                        <div className="darkener"></div>
                        <div className="expand"><i className="icofont-plus"></i> <i className="icofont-minus"></i></div>
                        <div className='articleTopic'>
                            <Link href={"/articles/enceladus"}>Enceladus: The Shiny World of Ice</Link>
                            <p>Detailed accounts of the Voyager 1, 2 and Cassini Huygens missions discoveries about Saturn's Moon Enceladus.</p>
                        </div>
                    </motion.div>
                    <motion.div variants={slideleft} tabIndex="500" style={{backgroundImage: "url(/carinaNebula.jpg)"}} className="articleUnit article5">
                        <div className="darkener"></div>
                        <div className="expand"><i className="icofont-plus"></i> <i className="icofont-minus"></i></div>
                        <div className='articleTopic'>
                            <Link href={"/articles"}>More...</Link>
                            <p>Get access to all space-related articles written by our amazing writing teams.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>



    </motion.section>
  )
}

export default Sect4
