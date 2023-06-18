import React from 'react';
import { motion } from 'framer-motion';

const ScrollButton = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    //Animation Variables
    const PopUp = {
        init: {
            y: "100%",
            opacity: 0,
        },
        finale: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 200
            }
        },
        exit: {
            y: "100%",
            opacity: 0,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200
            }
        }
    }

    return (
        <motion.button onClick={scrollToTop} initial="init" animate="finale" exit="exit" variants={PopUp} className="scrollToTopButton" title='Scroll To Top'>
            <motion.i className="icofont-bubble-up"></motion.i>
        </motion.button> 
    )
}

export default ScrollButton
