import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Sect2 = () => {
  const backgroundRef = useRef(null);
  const ballRef = useRef(null);
  const SectRef = useRef(null);

  const inView = useInView(SectRef, { once: true, amount: 0.23 });


  const handleCursorTrailer = (e, vlad) => {
      vlad.current.style.opacity = 1;
      const containerRect = SectRef.current.getBoundingClientRect();
      const offsetY = e.clientY - containerRect.top;

      const x = e.clientX / SectRef.current.clientWidth * 100;
      const y = offsetY / SectRef.current.clientHeight * 100;

  
      const keyframes = {
        top: `${y}%`,
        left: `${x}%`
      }
  
      vlad.current.animate(keyframes, {
        duration: 600,
        fill: "forwards"
      });
  }

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

  //animation variables
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
        duration: 0.9,
      }
    }
  }

  const scaleUp = {
    clad: {
      scale: inView ? 1 : 0.5,
      opacity: inView? 1: 0,
      transition:{
        ease: "easeInOut",
        duration: 0.9,
      }
    }
  }

  const fadeIn = {
    clad: {
      opacity: inView ? 1: 0,
      transition:{
        ease: "easeInOut",
        duration: 0.9,
      }
    }
  }


  return (
    <motion.section variants={parentVar} animate="clad" id="about" ref={SectRef} className="homeSecondSect" onMouseEnter={(e) => {handleCursorTrailer(e, ballRef); handleBackgroundShift(e);}} onMouseMove={(e) => {handleBackgroundShift(e); handleCursorTrailer(e, ballRef);}}>
      <div className="overlaysect">
        <motion.div variants={scaleUp} ref={backgroundRef} className="aboutImage"><img  src="/groot_trans.png" alt="groot image {#personality_symbol}" /></motion.div>
        <motion.div  className="aboutDetails">
          <div style={{overflow: "hidden"}}>
            <motion.h2 variants={slideUp}>Coding is my <br /> Passion</motion.h2>
          </div>
          <div style={{overflow: "hidden"}}>
            <motion.p variants={slideUp}>Hi, I&apos;m Quadri, a passionate Frontend Web Developer with 1year+ programming experience in creating unique, well-crafted software masterpieces solving specific problems. My skills in coding, design-thinking and problem solving have been honed over months of programming repititions, allowing me to create stunning, performant, optimized, highly-interactive and valuable digital softwares.</motion.p>
          </div>
          <div style={{overflow: "hidden"}}>
            <motion.p variants={slideUp}>I love programming, art, country music, space science, ciphers and sci-fi movies/characters.</motion.p>
          </div>

          <motion.a variants={slideUp} href="#works" className="viewMyWork">
            <p>View My Work</p>
            <span href="#works" className="viewWorkLink"><img src="/arrowside.svg" alt="arrow-right image .svg" /></span>
          </motion.a>
        </motion.div>
      </div>
      <motion.div variants={fadeIn} ref={ballRef} className="bgBall ball2"></motion.div>
    </motion.section>
  )
}

export default Sect2
