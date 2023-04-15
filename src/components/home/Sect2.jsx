import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from 'framer-motion';


const Sect2 = () => {
  const [displayedData, setDisplayedData] = useState({});
  const [displayToggler, setDisplayToggler] = useState(false);
  const [animationState, setAnimationState] = useState(false);
  const [text, setText] = useState("☉E⚷ ♁♅♆V♃⚸☾🜍");
  const loadtext = "The Solar System"
  const letters = "A}\sJ:X|#f*Gkl,;_!C/<sdR";
  const sectionRef = useRef(null);

  const inView = useInView(sectionRef, { once: true, amount: 0.36 });
  const inView2 = useInView(sectionRef, { once: true, amount: 0.42 });


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

        if (iterations >= 16) {
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

  const planetData = [
    {
      id: "planet00",
      displayImage: "/sun.png",
      name: "Sun",
      astroSign: "☉",
      note: "The star at the center of our solar system, comprising of about 99.86% of the total mass of our solar system.",
      location: "0 A.U. from the Sun",
      satellites: "None",
      mythology: "Egyptian sun god (Ra Amun).",
    },
    {
      id: "planet01",
      displayImage: "/mercury_new.png",
      name: "Mercury",
      astroSign: "☿",
      note: "Mercury is the smallest planet and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.",
      location: "0.38 A.U. from the Sun",
      satellites: "None",
      mythology: "Roman god of commerce, messenger of the gods (Mercurius)",
      spacecraft: "Mariner 10 (1974 and 1975) and MESSENGER (2004)",
      planetType: "Rocky",
    },
    {
      id: "planet02",
      displayImage: "/venus.png",
      name: "Venus",
      astroSign: "♀",
      note: "Venus is sometimes called Earth's 'sister' or 'twin' planet as it is almost as large and has a similar composition. Appears in Earth's sky either as morning star or evening star.",
      location: "0.7 A.U. from the Sun",
      satellites: "None",
      mythology:
        "Roman goddess of love, beauty, desire, sex, fertility, prosperity, and victory (Venus)",
      spacecraft: "Venera 1 (1971) and Venera 7 (1970)",
      planetType: "Rocky",
    },
    {
      id: "planet03",
      displayImage: "/earth1.png",
      name: "Earth",
      astroSign: "♁",
      note: "Earth is the only place known in the universe where life has originated and found habitability.",
      location: "1.0 A.U. from the Sun",
      satellites: "Moon.",
      mythology: "None",
      spacecraft: "All",
      planetType: "Rocky",
    },
    {
      id: "planet04",
      displayImage: "/mars2png.png",
      name: "Mars",
      astroSign: "♂",
      note: "Mars has the largest volcano and highest-known mountain in the Solar System (Olympus Mons).",
      location: "1.5 A.U. from the Sun",
      satellites: "Phobos and Deimos",
      mythology: "Greek god of war and courage (Ares).",
      spacecraft:
        "Marinar 4 (1965), Viking 1 (1976), Sojourner (1997) and Zhurong (2021)",
      planetType: "Rocky",
    },
    {
      id: "planet05",
      displayImage: "/jupiter1.png",
      name: "Jupiter",
      astroSign: "♃",
      note: "Jupiter is a gas giant and the largest in the Solar System. Mass is 2.5 times that of all the other planets in the System combined.",
      location: "5.2 A.U. from the Sun",
      satellites: "Europa, Io, Ganymede, Callisto and 91 others.",
      mythology:
        "Roman god of the sky and thunder, and king of the gods in ancient (Jove).",
      spacecraftVisits:
        "Pioneer 10 (1973), Voyager 1 and 2 (1979), Gallileo orbiter (1995), New Horizons (2007) and Juno (2016)",
      planetType: "Gas",
    },
    {
      id: "planet06",
      displayImage: "/saturn2png.png",
      name: "Saturn",
      astroSign: "♄",
      note: "Saturn is the second-largest in the Solar System, after Jupiter. It has a prominent ring system",
      location: "9.5 A.U. from the Sun",
      satellites:
        "Titan, Enceladus, Mimas, Tethys, Dione, Rhea, Hyperion, Phoebe, Iapetus and 74 others",
      mythology:
        "Greek god of time, abundance, wealth, agriculture, periodic renewal and liberation (Cronus).",
      spacecraftVisits:
        "Pioneer 11 (1979), Voyager 1 (1980), Voyager 2 (1981) and Cassini Huygens (2004)",
      planetType: "Gas",
    },
    {
      id: "planet07",
      displayImage: "/uranus.png",
      name: "Uranus",
      astroSign: "⛢",
      note: "Uranus is an ice giant, similar in composistion to Neptune.",
      location: "19.2 A.U. from the Sun",
      satellites: "Miranda, Ariel, Umbriel, Titania, Oberon and 22 others.",
      mythology: "Greek sky deity (Caelus).",
      spacecraftVisits: "Voyager 2 (1989)",
      planetType: "Icy",
    },
    {
      id: "planet08",
      displayImage: "/neptune2png.png",
      name: "Neptune",
      astroSign: "♆",
      note: "Neptune is the fourth-largest planet by diameter, third-most-massive planet, and the densest giant planet.",
      location: "30.1 A.U. from the Sun",
      satellites:
        "Triton, Nereid, Naiad, Thalassa, Despina, Galatea, Proteus, Larissa, Hippocamp and 3 others.",
      mythology: "Roman god of the sea (Poseidon).",
      spacecraftVisits: "Voyager 2 (1989)",
      planetType: "Icy",
    },
  ];

  const handleDisplayedData = (vlad) => {
    setDisplayedData(vlad);
    setDisplayToggler(true);
  };

  const handleCloseDataDisplay = () => {
    setDisplayToggler(false);
    setDisplayedData({});
  };

  //Animation Variables
  const parentVar = {
    clad: {
      opacity: inView ? 1: 0.99,
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

  const scaler = {
    clad: {
      scale: inView ? 1 : 0,
      opacity: inView ? 1 : 0,
      transition:{
        type: "spring",
        damping: 10, 
        stiffness: 300,
      }
    }
  }

  const orbitCntn = {
    clad: {
      opacity: inView ? 1: 0.8,
      transition:{
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  }

  const fadeIn = {
    clad: {
      opacity: inView ? 1 : 0,
      transition:{
        ease: "easeIn",
        duration: 0.3,
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

  const parentVariant = {
    init: {
      opacity: 0,
      scaleY: 0
    },
    finale: {
      opacity: 1,
      scaleY: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      }
    },
    exit: {
      opacity: 0,
      x: "50%",
      transition: {
        ease: "easeOut",
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.1,
      }
    }
  }

  const parentFadeIn = {
    init: {
      opacity: 0,
    },
    finale: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    },
    exit: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.1,
        when: "afterChildren",
        staggerChildren: 0.1,
      }
    }
  }

  const fadeInOut = {
    init: {
      opacity: 0,
    },
    finale: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.4,
      }
    },
    exit: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.1,
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
        ease: "easeOut",
        duration: 0.3,
      }
    },
    exit: {
      opacity: 0,
      y: "100%",
      transition: {
        ease: "easeOut",
        duration: 0.1,
      }
    }
  }

  const swipeRight = {
    init: {
      opacity: 0,
      x: "40%"
    },
    finale: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.4,
      }
    },
    exit: {
      opacity: 0,
      y: "100%",
      transition: {
        ease: "easeOut",
        duration: 0.1,
      }
    }
  }

  const scaleUp = {
    init: {
      opacity: 0,
      sacle: 0
    },
    finale: {
      opacity: 1,
      sacle: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300,
      }
    },
    exit: {
      opacity: 0,
      sacle: 0,
      transition: {
        ease: "easeOut",
        duration: 0.1,
      }
    }
  }





    return (
      <motion.section ref={sectionRef} variants={parentVar} animate="clad" className="sect2-home">
        <div className="banner"></div>
        <div className="divider"></div>

        <div style={{overflowY: "hidden"}}><motion.h1 variants={childVarUp}>{text}</motion.h1></div>
        <motion.p variants={childVarSlide} className="instruction">...click on any of the planets to view a litte data about it</motion.p>

        <div className="taskbar">
          <motion.div variants={scaler} className="animationControl" onClick={() => {setAnimationState(prev => !prev); console.log(23);}}><i className={`${animationState ? "icofont-ui-pause": "icofont-ui-play"}`}></i></motion.div>
          <AnimatePresence>
            {displayToggler && (
              <motion.div variants={parentVariant} initial="init" animate="finale" exit="exit" className="planetDataDisplay" style={{backgroundImage: `url(${displayedData?.displayImage})`}}>
                <motion.div variants={parentFadeIn} className="thePlanetdatas" style={{overflow: "hidden"}}>
                  <motion.div variants={scaleUp} onClick={handleCloseDataDisplay} className="planetDataDisplayerCloser"><i className="icofont-close"></i></motion.div>
                  <motion.div variants={fadeInOut}  className="top" style={{backgroundImage: `url(${displayedData?.displayImage})`}}></motion.div>
                  <div className="planetdatabottom">
                    <div style={{overflowY: "hidden"}}><motion.h2 variants={slideUp}>{displayedData?.name} [<span> {displayedData?.astroSign} </span>]</motion.h2></div>
                    <motion.h3 variants={swipeRight}>{displayedData?.note}</motion.h3>
                    <motion.p variants={swipeRight}>Location: <span>{displayedData?.location}</span></motion.p>
                    <motion.p variants={swipeRight}>Satellites: <span>{displayedData?.satellites}</span></motion.p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div variants={slideleft} className="hintBar">
          <div className="first">
            <span className="coloredtile purple"></span>
            <p>A.U. (Astronomical Unit) = 149.6 million km</p>
          </div>
          <div className="first">
            <span className="coloredtile white"></span>
            <p>Planets sizes are not to scale</p>
          </div>
          <div className="first">
            <span className="coloredtile orange"></span>
            <p>Orbital periods are relatively accurate (6s = 365days)</p>
          </div>
        </motion.div>

        <div className="solarDisplay">
          <div className="solarCntn">
            <motion.div variants={fadeIn} className="neptuneOrbit orbit" style={{animationPlayState: `${animationState ? "running" : "paused"}`}}>
              {" "}
              <Image
                src="/neptune2png.png"
                className="theNeptune planet"
                width={315}
                height={200}
                alt="neptune"
                onClick={() => {handleDisplayedData(planetData[8])}}
              />
            </motion.div>
            <motion.div variants={fadeIn} className="uranusOrbit orbit" style={{animationPlayState: `${animationState ? "running" : "paused"}`}}>
              <Image
                src="/uranus.png"
                className="theUranus planet"
                width={200}
                height={200}
                alt="uranus"
                onClick={() => {handleDisplayedData(planetData[7])}}
              />
            </motion.div>
            <motion.div variants={fadeIn} className="saturnOrbit orbit" style={{animationPlayState: `${animationState ? "running" : "paused"}`}}>
              <Image
                src="/saturn.png"
                className="theSaturn planet"
                width={200}
                height={200}
                alt="saturn"
                style={{animationPlayState: `${animationState ? "running" : "paused"}`}}
                onClick={() => {handleDisplayedData(planetData[6])}}
              />
            </motion.div>
            <motion.div variants={fadeIn} className="jupiterOrbit orbit" style={{animationPlayState: `${animationState ? "running" : "paused"}`}}>
              <Image
                src="/jupiter1.png"
                className="theJupiter planet"
                width={200}
                height={200}
                alt="jupiter"
                onClick={() => {handleDisplayedData(planetData[5])}}
              />
            </motion.div>
            <motion.div variants={fadeIn} className="marsOrbit orbit" style={{animationPlayState: `${animationState ? "running" : "paused"}`}}>
              <Image
                src="/mars2png.png"
                className="theMars planet"
                width={200}
                height={200}
                alt="mars"
                onClick={() => {handleDisplayedData(planetData[4])}}
              />
            </motion.div>
            <motion.div variants={fadeIn} className="earthOrbit orbit" style={{animationPlayState: `${animationState ? "running" : "paused"}`}}>
              <Image
                src="/earth1.png"
                className="theEarth planet"
                width={200}
                height={200}
                alt="earth"
                onClick={() => {handleDisplayedData(planetData[3])}}
              />
            </motion.div>
            <motion.div variants={fadeIn} className="venusOrbit orbit" style={{animationPlayState: `${animationState ? "running" : "paused"}`}}>
              <Image
                src="/venus.png"
                className="theVenus planet"
                width={260}
                height={200}
                alt="venus"
                onClick={() => {handleDisplayedData(planetData[2])}}
              />
            </motion.div>
            <motion.div variants={fadeIn} className="mercuryOrbit orbit" style={{animationPlayState: `${animationState ? "running" : "paused"}`}}>
              <Image
                src="/mercury_new.png"
                className="theMercury planet"
                width={260}
                height={200}
                alt="mercury"
                onClick={() => {handleDisplayedData(planetData[1])}}
              />
            </motion.div>
            <motion.div variants={fadeIn} className="sunOrbit" style={{animationPlayState: `${animationState ? "running" : "paused"}`}}>
              <Image
                src="/sun.png"
                className="theSun"
                width={300}
                height={300}
                alt="sun"
                onClick={() => {handleDisplayedData(planetData[0])}}
              />
              <div className="solarFlare1" style={{animationPlayState: `${animationState ? "running" : "paused"}`}}></div>
              <div className="solarFlare2" style={{animationPlayState: `${animationState ? "running" : "paused"}`}}></div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
};

export default Sect2;
