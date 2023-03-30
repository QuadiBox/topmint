import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useContext, useRef } from "react";
import { themeContext } from "../../providers/ThemeProvider";
import HomePage from "../components/home/Home";


export default function Home({ apod }) {
  const [showDisplayer, setShowDisplayer] = useState(true);
  const [displayDetails, setDislayDetails] = useState(0);

  const ctx = useContext(themeContext);
  const { showAbsMain, setShowAbsMain } = ctx;

  const backgroundRef = useRef(null);

  
  useEffect(() => {
    const num = Math.floor(Math.random() * 3);

    setDislayDetails(num);
  }, []);

  const displayTypes = [
    {
      id: "dispImg1",
      displayImage: "/jupiterHiRes.jpg",
      details: {
        title: "Jupiter",
        astroSign: "♃",
        description: "Gas giant, fifth planet from the Sun and the largest in the Solar System. Mass is 2.5 times that of all the other planets in the Solar System combined.",
        location: "5.2 A.U. from the Sun",
        satellites: "Europa, Io, Ganymede, Callisto and 91 others.",
        mythology: "Greek chief of Gods (Zeus)."
      }
    },
    {
      id: "dispImg2",
      displayImage: "/HiRESpluto.png",
      details: {
        title: "Pluto",
        astroSign: "♇",
        description: "Dwarf-planet, ninth-largest and tenth-most-massive known object to directly orbit the Sun.",
        location: "30 - 49 A.U. from the Sun (Kuiper belt).",
        satellites: "Charon, Styx, Nix, Kerberos, and Hydra.",
        mythology: "Roman god of the underworld (Hades)."
      }
    },
    {
      id: "dispImg3",
      displayImage: "/moon.webp",
      details: {
        title: "Moon",
        astroSign: "☾",
        description: "Fifth largest satellite in the Solar System and the largest and most massive relative to its parent planet.",
        location: "384,400 km from earth.",
        satellites: "It is earth's only natural satellite",
        mythology: "Greek goddess of the moon (Cynthia)"
      }
    },
  ]

  const handleBackgroundShift = (e) => {
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;

    let transX = (x / 10).toFixed(3);
    let transY = (y/ 10).toFixed(3);

    const keyframes = {
      backgroundPosition: `${transX}% ${transY}%`
    }

    backgroundRef.current.animate(keyframes, {
      duration: 600,
      fill: "forwards"
    });
  }

  const landingPageCloser = () => {
    setShowAbsMain(false);
  } 


  //Animation variables
  const displayAnimation = {
    init: {
      scaleY: 0,
      opacity: 0
    },
    finale: {
      scaleY: 1,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.4,
        delay: 0.8
      }
    },
    exit: {
      scaleY: 0,
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.2,
        duration: 0.2,
      }
    }
  }

  const displayerAnim = {
    init: {
      opacity: 0
    },
    finale: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    },
    exit: {
      opactiy: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  const slideUp = {
    init: {
      y: "100%",
      opacity: 0.8
    },
    finale: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.45
      }
    },
    exit: {
      y: "100%",
      opacity: 0.3,
      transition: {
        ease: "easeOut",
        duration: 0.2
      }
    }
  }

  const parentVar = {
    init: {
      opacity: 0.6,
    },
    finale: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    },
    exit: {
      opacity: 0,
      y: "-70%",
      transition: {
        duration: 0.66,
      }
    }
  }

  const fadeIn = {
    init: {
      y: "40%",
      opacity: 0
    },
    finale: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.3,
        delay: 0.4
      }
    },
    exit: {
      y: "40%",
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2
      }
    }
  }

  const swipe = {
    init: {
      x: "-100%",
      opacity: 0,
    },
    finale: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.47,
        delay: 0.7,
        ease: "easeIn"
      }
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.3,
      }
    }
  }


  return (
    <>
      <AnimatePresence>
        {showAbsMain && (
          <motion.div initial="init" animate="finale" exit="exit" variants={parentVar} ref={backgroundRef} className="homeLoaderMain" onMouseMove={handleBackgroundShift} onScroll={landingPageCloser}>
            
            <section className="sectonAbsMain">
              <div>
                <div style={{overflowY: "hidden"}}>
                  <motion.h1 variants={slideUp}>Welcome to the <span style={{overflow: "hidden"}}><motion.div variants={swipe}>QuadVerse</motion.div></span></motion.h1>
                </div>
                <motion.p variants={fadeIn}>The best space for all true and worthy space <span>enthusiasts</span> & <span>inquisitors</span>. QuadVerse is a eccentric digital platform for all amazing space-related informations </motion.p>
              </div>

              <AnimatePresence>

                {showDisplayer && displayDetails === 0 && (
                  <motion.div initial="init" animate="finale" exit="exit" variants={displayAnimation} className="displayAnimation">
                    <div className="dragger"></div>
                    <div className="dragger2"></div>
                    <div className="borderline"></div>
                    <div className="panOverlay"></div>
                    <motion.div style={{background: `url(${displayTypes[0].displayImage})`}} variants={displayerAnim} className="displayer"></motion.div>
                    <div className="detailsCard">
                      <h2>{displayTypes[0]?.details?.title} [<span title="Jupiter Astrological Sign">{displayTypes[0]?.details?.astroSign}</span>]</h2>
                      <p>Desciption: <span>{displayTypes[0].details.description}</span></p>
                      <p>Location: <span>{displayTypes[0].details.location}</span></p>
                      <p>Satellites: <span>{displayTypes[0].details.satellites}</span></p>
                      <p>Mythology: <span>{displayTypes[0].details.mythology}</span></p>
                    </div>
                    <div onClick={() => {setShowDisplayer(false)}} className="displayerClose"><i className="icofont-close"></i></div>
                  </motion.div>
                )}

                {showDisplayer && displayDetails === 1 && (
                  <motion.div initial="init" animate="finale" exit="exit" variants={displayAnimation}  className="displayAnimation">
                    <div className="dragger"></div>
                    <div className="dragger2"></div>
                    <div className="borderline"></div>
                    <div className="panOverlay"></div>
                    <motion.div style={{background: `url(${displayTypes[1].displayImage})`}} variants={displayerAnim} className="displayer"></motion.div>
                    <div className="detailsCard">
                      <h2>{displayTypes[1]?.details?.title} [<span title="Pluto Astrological Sign">{displayTypes[1]?.details?.astroSign}</span>]</h2>
                      <p>Desciption: <span>{displayTypes[1].details.description}</span></p>
                      <p>Location: <span>{displayTypes[1].details.location}</span></p>
                      <p>Satellites: <span>{displayTypes[1].details.satellites}</span></p>
                      <p>Mythology: <span>{displayTypes[1].details.mythology}</span></p>
                    </div>
                    <div onClick={() => {setShowDisplayer(false)}} className="displayerClose"><i className="icofont-close"></i></div>
                  </motion.div>
                )}

                {showDisplayer && displayDetails === 2 && (
                  <motion.div initial="init" animate="finale" exit="exit" variants={displayAnimation} className="displayAnimation">
                    <div className="dragger"></div>
                    <div className="dragger2"></div>
                    <div className="borderline"></div>
                    <div className="panOverlay"></div>
                    <motion.div style={{background: `url(${displayTypes[2].displayImage})`}} variants={displayerAnim} className="displayer"></motion.div>
                    <div className="detailsCard">
                      <h2>{displayTypes[2]?.details?.title} [<span title="Moon's Astrological Sign"> {displayTypes[2]?.details?.astroSign} </span>]</h2>
                      <p>Desciption: <span>{displayTypes[2].details.description}</span></p>
                      <p>Location: <span>{displayTypes[2].details.location}</span></p>
                      <p>Satellites: <span>{displayTypes[2].details.satellites}</span></p>
                      <p>Mythology: <span>{displayTypes[2].details.mythology}</span></p>
                    </div>
                    <div onClick={() => {setShowDisplayer(false)}} className="displayerClose"><i className="icofont-close"></i></div>
                  </motion.div>
                )}

              </AnimatePresence>




              <div className="bottomAbs">
                <div className="imageDisplays">
                  <Image src="/earth1.png" className="earth absImg"  width={200} height={200} alt="earth"/>
                  <Image src="/pluto.png" className="pluto absImg" width={200} height={200} alt="saturn"/>
                  <Image src="/mars2png.png" className="mars absImg" width={200} height={200} alt="saturn"/>
                  <Image src="/jupiter1.png" className="jupiter absImg" width={200} height={200} alt="saturn"/>
                  <Image src="/sun.png" className="sun absImg"  width={300} height={300} alt="sun"/>
                </div>

                <div className="scrollIndicator" onClick={landingPageCloser}>
                  <i className="icofont-bubble-down"></i>
                  <p>Click Here To Explore</p>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {!showAbsMain && (
        <HomePage apod={apod}/>
      )}
    </>
  );
}

export async function getServerSideProps () {
  const apiKey = process.env.NASA_API_KEY;

  const myDate = new Date();
  const dayOfMonth = myDate.getDate();
  const month = myDate.getMonth();
  const year = myDate.getFullYear();

  function pad(n) {
    return n<10 ? '0'+n : n
  }

  const ddmmyyyy = year + "-" + pad(month + 1) + "-" + pad(dayOfMonth);



  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${ddmmyyyy}`);
  const data = await response.json();

  return {
    props: {
      apod: data, 
    }
  }
}

