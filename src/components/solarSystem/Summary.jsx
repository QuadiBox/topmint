import React from 'react'
import { motion } from 'framer-motion';

const Summary = ({ data }) => {
    
    //Animation Variables
    const parentvar = {
        init: {
            x: "30%",
            opacity: 0.85
        }, 
        finale: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200,
                staggerChildren: 0.23
            }
        },
        exit: {
            x: "-70%",
            opacity: 0.5,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200,
                staggerChildren: 0.23
            }
        },
    }



    return (
        <motion.section initial="init" animate="finale" exit="exit" variants={parentvar}  className='summarySystemSect'>
            {
                data.map((elem, idx) => (
                    <div className="unitSummary" key={`${elem.head}${idx}`}>
                        <div>
                            <h2>{elem.head}</h2>
                        </div>

                        <div className="summaryUnitDetail">
                            {
                                elem.keyValue.map((element, index) => (
                                    <p key={`${element.key}${index}${idx}`}>{element?.key}: <span>{element?.value}</span></p>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </motion.section>
    )
}

export default Summary
