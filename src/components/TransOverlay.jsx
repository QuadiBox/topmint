import React from 'react';
import { motion } from 'framer-motion';

const TransOverlay = ({ animateState }) => {
    const parentVar = {
        init: {
            x: 1
        },
        finale: {
            x: 0,
            transition: {
                duration: 0.01,
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.01,
                ease: "easeInOut",
                when: "afterChildren",
                staggerChildren: 0.05
            }
        } 
    }
    
    const specInit = {
        init: {
            opacity: 1
        },
        finale: {
            opacity: 0,
            transition: {
                duration: 0.1,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.1,
                ease: "easeInOut"
            }
        }
    }
    const transitionInit = {
        init: {
            x: 0
        },
        finale: {
            x: "-700%",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        exit: {
            x: "-710%",
            transition: {
                duration: 0.1,
                ease: "easeInOut"
            }
        }
    }

    const transitionExit = {
        init: {
            x: "710%"
        },
        finale: {
            x: "700%",
            transition: {
                duration: 0.07,
            }
        },
        exit: {
            x: 0,
            transition: {
                duration: 0.22,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.div initial="init" animate="finale" exit="exit" variants={parentVar} className="transOverlay">
            <motion.div variants={animateState === "initial" ? transitionInit : transitionExit} className="black"></motion.div>
            <motion.div variants={specInit} className="specTrans"></motion.div>
            <motion.div variants={animateState === "initial" ? transitionInit : transitionExit} className="brown"></motion.div>
            <motion.div variants={animateState === "initial" ? transitionInit : transitionExit} className="black"></motion.div>
            <motion.div variants={animateState === "initial" ? transitionInit : transitionExit} className="brown"><img src="/darkLogosmall.png" alt="" /></motion.div>
            <motion.div variants={animateState === "initial" ? transitionInit : transitionExit} className="black"></motion.div>
            <motion.div variants={animateState === "initial" ? transitionInit : transitionExit} className="brown"></motion.div>
            <motion.div variants={animateState === "initial" ? transitionInit : transitionExit} className="black"></motion.div>

        </motion.div>
    )
}

export default TransOverlay
