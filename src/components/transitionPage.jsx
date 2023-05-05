import React from 'react'
import TransitionPageSect from './transitionPageSect';
import { motion } from 'framer-motion';

const TransitionPage = ({ animateState }) => {
    const sectNum = [1,2,3,4,5,6,7,8,9,];

    const transitionInit = {
        init: {
            x: 0
        },
        finale: {
            x: "-100%",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        },
        exit: {
            x: "-110%",
            transition: {
                duration: 0.1,
                ease: "easeInOut"
            }
        }
    }

    const transitionExit = {
        init: {
            x: "110%"
        },
        finale: {
            x: "100%",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        exit: {
            x: 0,
            transition: {
                duration: 0.11,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.div initial="init" animate="finale" exit="exit" variants={animateState === "initial" ? transitionInit : transitionExit} className='transitionPage'>
            {sectNum.map((elem, idx) => (
                <>
                    <TransitionPageSect Determiner={idx%2 === 0? 24 : 0} keysy={1} index={idx}/>
                    <TransitionPageSect Determiner={idx%3 === 0? 24 : 0} keysy={2}  index={idx}/>
                </>
            ))}
        </motion.div>
    )
}

export default TransitionPage
