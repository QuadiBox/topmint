import { useRef } from "react";
import { motion, useInView } from "framer-motion";


const Sect3 = () => {
    const backgroundRef = useRef(null);
    const ballRef = useRef(null);
    const sectRef = useRef(null);

    const inView = useInView(sectRef, { once: true, amount: 0.1 });


    const handleBackgroundShift = (e) => {
        const containerRect = sectRef.current.getBoundingClientRect();
        const offsetY = e.clientY - containerRect.top;
        const x = e.clientX / window.innerWidth * 100;
        const y = offsetY / sectRef.current.clientHeight * 100;

        let transX = (x / 26).toFixed(3);
        let transY = (y / 45).toFixed(3);


        const keyframes = {
            transform: `translate(-${transX}%, -${transY}%)`
        }

        backgroundRef.current.animate(keyframes, {
            duration: 1900,
            fill: "forwards",
            timingFunction: "ease-in-out"
        });
    };

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

  return (
    <motion.section variants={parentVar} animate="clad" id="stack" ref={sectRef} className="homethirdSect" onMouseEnter={(e) => {handleCursorTrailer(e, ballRef); handleBackgroundShift(e);}} onMouseMove={(e) => {handleBackgroundShift(e); handleCursorTrailer(e, ballRef);}}>
        <div className="overlaysect">
            <div style={{overflow: "hidden", width: "100%"}}>
                <motion.h2 variants={slideUp}>Tech Stack</motion.h2>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.66 }} whileInView={{ opacity: 1, scale: 1, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.3 }} className="stackDisplay">
                <img ref={backgroundRef} src="/yoda_trans.webp" alt="yoda image {#wisdom_symbol} .webp" />
                <div className="stackdiv1">
                    <p className="unitStackBox1">HTML <span></span> 5</p>
                </div>
                <div className="stackdiv2">
                    <p className="unitStackBox2">TAILWIND <span></span> CSS</p>
                    <p className="unitStackBox3">CSS <span></span> 3</p>
                </div>
                <div className="stackdiv3">
                    <p className="unitStackBox4">JAVASCRIPT <span></span> ESC6</p>
                    <p className="unitStackBox5">THREE <span></span> JS</p>
                </div>
                <div className="stackdiv4">
                    <p className="unitStackBox6">NEXT <span></span> JS</p>
                    <p className="unitStackBox7">REACT <span></span> JS</p>
                </div>
            </motion.div>
            <article className="stackDetail">
                <motion.p initial={{ opacity: 0, y: "100%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.07 }}>I am vastly experienced working with <span>HTML-5</span>, <span>CSS-3</span>, <span>Javascript - ECMAScript6</span>, <span>React-Js</span> and <span>Next-Js</span>. Although, my work experience with <span>Tailwind-CSS</span> and <span>Three-Js</span> is quite sparse, it surely does not diminish my ability and confidence in building and delivering amazing Frontend softwares. Other amazing technologies I have worked with include <span>Git</span>,  <span>GitHub</span>, <span>NPM</span>, <span>Vite</span>. I pride myself to be quite handy with animation libraries like <span>Framer motion</span> & <span>GSAP</span>. Off the codes and logics, I have worked with <span>Figma</span> to create custom logos, graphic cards and more. I have also harnessed the proficiency of <span>AI softwares</span> many times e.g. all images on this page was created or edited using an AI software and the texts were created and edited using another.</motion.p>
                <motion.p initial={{ opacity: 0, y: "100%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.17 }}>My incredible ability to pick up and master a new technology with swift speed and relative ease makes me a formidable asset any recruiter or company would be happy to have increasing their productivity, high-end yield and shear versatility of their work-force exponentially.</motion.p>
                <motion.p initial={{ opacity: 0, y: "100%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.37 }}>I am an investement you will not regret.</motion.p>
            </article>
        </div>
        <motion.div variants={fadeIn}  ref={ballRef} className="bgBall ball3"></motion.div>
    </motion.section>
  )
}

export default Sect3
