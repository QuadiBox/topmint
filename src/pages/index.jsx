import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Sect2 from "../components/Sect2";
import Sect3 from "../components/Sect3";
import Sect4 from "../components/Sect4";
import Sect5 from "../components/Sect5";
import TransOverlay from "../components/TransOverlay";
import { useRouter } from "next/router";


export default function Home() {
  const [text, setText] = useState("SCROLL DOWN  SCROLL DOWN  SCROLL DOWN");
  const [text2, setText2] = useState("CONTACT CONTACT CONTACT CONTACT");
  const backgroundRef = useRef(null);
  const ballRef = useRef(null);
  const sectRef = useRef(null);
  const router = useRouter();
  const [showExit, setShowExit] = useState(false);
  const [msg, setMsg] = useState({
    text: "",
    color1: "#ffa86a",
    color2: "#6226002d",
    color3: "#ffa86a7f",
  });

  const handleBackgroundShift = (e) => {
    const x = e.clientX / window.innerWidth * 100;

    let transX = (x / 10).toFixed(3);


    const keyframes = {
      transform: `translateX(-${transX}%)`
    }

    backgroundRef.current.animate(keyframes, {
      duration: 1900,
      fill: "forwards",
      timingFunction: "ease-in-out"
    });
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
  const parentVar = {
    init: {
      opacity: 0.95
    },
    finale: {
      opacity: 1,
      transition: {
        duration: 0.01,
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
        ease: "easeInOut",
        duration: 1,
      }
    }
  }

  const specslideUp = {
    init: {
      opacity: 0,
      y: "100%",
      rotate: -90
    },
    finale: {
      opacity: 1,
      y: 0,
      rotate: -90,
      transition: {
        ease: "easeInOut",
        duration: 1,
      }
    }
  }
  const slidedown = {
    init: {
      opacity: 0,
      y: "-100%"
    },
    finale: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      }
    }
  }

  const scaleUp = {
    init: {
      opacity: 0,
      scale: 0.3
    },
    finale: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.9,
      }
    }
  }

  const fadeIn = {
    init: {
      opacity: 0,
    },
    finale: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 1,
      }
    }
  }

  const toastPop = {
    init: {
      opacity: 0,
      x: "50%"
    },
    finale: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      x: "60%",
      transition: {
        ease: "easeInOut",
        duration: 0.3
      }
    }
  }


  return (
      <main className="HomefirstPageCtn">
        <motion.section variants={parentVar} initial="init" animate="finale" ref={sectRef} className="homefirstsect">
          <div className="overlaysect" onMouseEnter={(e) => {handleCursorTrailer(e, ballRef); handleBackgroundShift(e);}} onMouseMove={(e) => {handleBackgroundShift(e); handleCursorTrailer(e, ballRef);}}>
            <motion.img variants={slideUp} ref={backgroundRef} className="vaderImg" src="/vader.webp" alt="carved woooden star wars vader {#strength&confidence_symbol}"/>
            <nav>
              <motion.div variants={slidedown} className="center"><img src="/darkLogosmall.png" alt="" /></motion.div>

              <motion.div variants={slidedown} className="leftnavsect">
                <a href="#about">ABOUT</a>
                <a href="#stack">STACKS</a>
                <a href="#works">WORKS</a>
              </motion.div>


              <motion.a variants={slidedown} className="rightnavsect" href="#contact">SAY HELLO</motion.a>
            </nav>

            <motion.div variants={slideUp} className="mainsect">
              <div style={{overflow: "hidden", width: "max-content"}}>
                <motion.p variants={slideUp} className="lilHead">Coding Art & Solutions</motion.p>
              </div>
              <div style={{overflow: "hidden"}}>
                <motion.h1 variants={slideUp}>Bringing <br /> Ideas to Life</motion.h1>
              </div>
              <motion.p variants={slideUp} className="topText">Expertly dispatched websites and PWAs that showcase the beauty and versatility of Frontend Software Development</motion.p>
            </motion.div>


            <motion.div variants={specslideUp} className="abssectText">Programmers are tools for converting <span>caffeine</span> into <span>code</span></motion.div>
            <motion.div variants={slideUp} className="absSocialLinks">
              <a className="twitter" href="https://twitter.com/Quadvox" target="_blank"><i className="icofont-twitter"></i></a>
              <a className="github" href='https://github.com/QuadiBox' target="_blank"><span></span></a>
              <a className="twitter" href='https://www.instagram.com/oladojaabdquadri/' target="_blank"><i class="icofont-instagram"></i></a>
            </motion.div>

            <motion.a href="#contact" variants={scaleUp}  className="scrolldownButtonCntn">
              <a href="#contact" className="scrollDownButton"><img src="/arrowdown.svg" alt="down arrow image.svg" /></a>
              <div className="circleText">
                <p>
                  {
                    text.split("").map((elem, idx) => (
                      <span key={`text1_${idx}`} style={{transform: `rotate(${idx * 9.35}deg)`}}>{elem}</span>
                    ))
                  }
                </p>
              </div>
            </motion.a>

          </div>

          <motion.div variants={fadeIn} ref={ballRef} className="bgBall"></motion.div>
        </motion.section>
        <Sect2/>
        <Sect3/>
        <Sect4/>

        <div className="intersection">
          <img src="/laptop_1.png" alt="wooden laptop .png" />
          <div className="scrolldownButtonCntn contact">
              <div className="circleText contact">
                <p>
                  {
                    text2.split("").map((elem, idx) => (
                      <span key={`rotating_text ${idx}`} style={{transform: `rotate(${idx * 11.2}deg)`}}>{elem}</span>
                    ))
                  }
                </p>
              </div>
            </div>
        </div>
        <Sect5 setMsg={setMsg} msg={msg}/>
        <AnimatePresence>
          {
            msg.text !== "" && (
              <motion.div variants={toastPop} initial="init" animate="finale" exit="exit" style={{backgroundColor: `${msg.color2}`, border: `1px dashed ${msg.color3}`}} className="toaster">
                <p>{msg.text}</p>
                <button onClick={setMsg({text: "", color2: "#6226002d", color1: "#ffa86a", color3: "#ffa86a7f"})} style={{backgroundColor: `${msg.color1}`}}><i class="icofont-close"></i></button>
              </motion.div>
            )
          }
        </AnimatePresence>
        {/* <TransOverlay animateState={"initial"}/> */}
        <AnimatePresence mode="wait">
          {!showExit && (
            <TransOverlay animateState={"exit"}/>
          )}
        </AnimatePresence>
      </main>
  );
}

export async function getServerSideProps () {

  return {
    props: { apod: "ADA" },
  };
}

