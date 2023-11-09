import {useEffect, useRef} from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from "@emailjs/browser";

const Sect5 = ({ setMsg, msg }) => {
    const ballRef = useRef(null);
    const backgroundRef = useRef(null);
    const SectRef = useRef(null);
    const formRef = useRef(null);
    const footerRef = useRef(null);

    const inView = useInView(SectRef, { once: true, amount: 0.12 });
    const inView2 = useInView(formRef, { once: true, amount: 0.22 });
    const inView3 = useInView(footerRef, { once: true, amount: 0.42 });

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

    const handleInputFocus = () => {
        const input = document.querySelector(".nameInput");

        input?.scrollIntoView({ behavior: 'auto', block: "center" });
        input.focus();
    }

    const handleBackgroundShift = (e) => {
        const x = e.clientX / window.innerWidth * 100;
    
        let transX = (x / 25).toFixed(3);
    
    
        const keyframes = {
          transform: `translateX(-${transX}%)`
        }
    
        backgroundRef.current.animate(keyframes, {
          duration: 1900,
          fill: "forwards",
          timingFunction: "ease-in-out"
        });
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setMsg({
            text: "",
            color: "#a706f1",
          })
        }, 4000);
    
        return () => {
          clearTimeout(timeoutId);
        };
    }, [msg]);

    const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs
        .sendForm(
          "service_sguscc2",
          "template_f9p75lg",
          formRef.current,
          "Zp0CfEWsESXaa7Ury"
        )
        .then(
          (result) => {
            setMsg({
                text: "Message Sent Succesfully",
                color1: "#ffa86a",
                color2: "#6226002d",
                color3: "#ffa86a7f",
            });
            formRef.current.reset();
          },
          (error) => {
            console.log(error.text);
            setMsg({
                text: "Message Not Sent",
                color1: "#ea0303fc",
                color2: "#5b010125",
                color3: "#7b212187",
            });
            formRef.current.reset();
          }
        ); 
    };

    //Animation Variables
    const parentVar = {
        clad: {
            opacity: inView ? 1: 0.99,
            transition:{
                duration: 0.01,
            }
        }
    }
    const parentVar2 = {
        clad: {
            opacity: inView2 ? 1: 0.99,
            transition:{
                duration: 0.01,
                staggerChildren: 0.15
            }
        }
    }
    const parentVar3 = {
        clad: {
            opacity: inView3 ? 1: 0.99,
            transition:{
                duration: 0.01,
                staggerChildren: 0.15
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

    const slideUp2 = {
        clad: {
            y: inView2 ? 0: "100%",
            opacity: inView2? 1: 0,
            transition:{
                ease: "easeInOut",
                duration: 0.7,
            }
        }
    }
    const slideUp3 = {
        clad: {
            y: inView3 ? 0: "100%",
            opacity: inView3? 1: 0,
            transition:{
                ease: "easeInOut",
                duration: 0.7,
            }
        }
    }
    const swipeRight = {
        clad: {
            x: inView3 ? 0: "-60%",
            opacity: inView3? 1: 0,
            transition:{
                ease: "easeInOut",
                duration: 0.5,
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
    const fadeIn2 = {
        clad: {
            opacity: inView2 ? 1: 0,
            transition:{
                ease: "easeInOut",
                duration: 0.8,
            }
        }
    }

    const scaleUp2 = {
        clad: {
            scale: inView2 ? 1: 0.5,
            opacity: inView2? 1: 0,
            transition:{
                ease: "easeInOut",
                duration: 0.7,
            }
        }
    }



    return (
        <motion.section variants={parentVar} animate="clad" id='contact' ref={SectRef} className="homefifthSect" onMouseEnter={(e) => {handleCursorTrailer(e, ballRef), handleBackgroundShift(e);}} onMouseMove={(e) => {handleCursorTrailer(e, ballRef), handleBackgroundShift(e);}}>
            <div className="overlaysect">
                <div style={{overflow: "hidden", width: "100%", display: "flex"}}>
                    <motion.h2 variants={slideUp} onClick={handleInputFocus}>Let's Talk</motion.h2>
                </div>
                <motion.form variants={parentVar2} animate="clad" ref={formRef} className="contactForm" onSubmit={sendEmail}>
                    <div style={{overflow: "hidden", width: "100%", display: "flex"}}>
                        <motion.input variants={slideUp2}  className='nameInput' type="text" name="user_name" id="name" placeholder="Your Name here..."/>
                    </div>
                    <div style={{overflow: "hidden", width: "100%", display: "flex"}}>
                        <motion.input variants={slideUp2} type="email" name="user_email" id="email" placeholder="Your Email here..."/>
                    </div>
                    <div style={{overflow: "hidden", width: "100%", display: "flex"}}>
                        <motion.textarea variants={slideUp2} name="message" id="message" cols="30" rows="4" placeholder="What you'd like to say..."></motion.textarea>
                    </div>
                    <motion.button variants={fadeIn2} type="submit">Send</motion.button>
                    <motion.img variants={scaleUp2} ref={backgroundRef} src="/lion.webp" alt="lion webp" />
                </motion.form>

                <footer ref={footerRef} className='homeFooter'>
                    <motion.p variants={slideUp3} animate="clad">oladojaabdquadridamilola@gmail.com | +234-90-6369-9656</motion.p>
                    <motion.div variants={parentVar3} animate="clad" className="footersocialLinks">
                        <motion.a variants={swipeRight} className="twitter" href="https://twitter.com/Quadvox" target="_blank">TWITTER</motion.a>
                        <motion.a variants={swipeRight} className="github" href='https://github.com/QuadiBox' target="_blank">GITHUB</motion.a>
                        <motion.a variants={swipeRight} className="twitter" href='https://www.instagram.com/oladojaabdquadri/' target="_blank">INSTAGRAM</motion.a>
                    </motion.div>
                </footer>
            </div>
            <motion.div variants={fadeIn} ref={ballRef} className="bgBall ball5"></motion.div>
        </motion.section>
    )
}

export default Sect5
