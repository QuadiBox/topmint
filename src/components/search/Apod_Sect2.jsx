import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Apod_Sect2 = ({ apodDisplay, setApodDisplay, LSData, setLSData  }) => {
    const [listCount, setListCount] = useState(2);
    const filteredList = LSData.filter((elem, idx) => idx <= listCount - 1);
    const sectionRef = useRef(null);

    const inView = useInView(sectionRef, { once: true, amount: 0.22 });


    const handleClearApodHistory = () => {
        localStorage.removeItem("APOD_Data");
        setLSData([]);
    }


    //Animation Variables
    const parentvar = {
        clad: {
            opacity: inView ? 1 : 0.96,
            transition: {
                duration: 0.05,
                staggerChildren: 0.3
            }

        }
    }

    const slideUp = {
        clad: {
            y: inView? 0: "100%",
            rotate: inView? 0 : 5,
            transition: {
                damping: 30,
                type: "spring",
                stiffness: 200
            }
        }
    }

    const swipeLeft = {
        clad: {
            x: inView? 0: "100%",
            opacity: inView? 1 : 0,
            transition: {
                damping: 30,
                type: "spring",
                stiffness: 200
            }
        }
    }

    const fadeIn = {
        clad: {
            opacity: inView? 1 : 0,
            transition: {
                damping: 30,
                type: "spring",
                stiffness: 200
            }
        }
    }



    return (
        <motion.section animate="clad" variants={parentvar} ref={sectionRef} className='Sect2-apod'>
            <div className="top">
                <div style={{overflow: "hidden"}}>
                    <motion.h2 variants={slideUp}>A.P.O.D Search History</motion.h2>
                </div>

                <motion.p variants={swipeLeft} onClick={handleClearApodHistory}><i className="icofont-ui-delete"></i> <span>Clear History</span></motion.p>
            </div>
            {
                LSData.length <= 0 && (
                    <div className="apodHistoryError">
                        <motion.i variants={fadeIn} className="icofont-space"></motion.i>
                        <div style={{overflowY: "hidden"}}>
                            <motion.h4 variants={slideUp}>
                                Your A.P.O.D search history is empty.
                            </motion.h4>
                        </div>
                    </div>
                )
            }

            {
                LSData.length > 0 && (
                    filteredList.map((elem, idx) => (
                        <motion.a initial={{ opacity: 0.1, x: "20%" }} whileInView={{ opacity: 1, x: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.2 }} href='#apodTop' className="apodHistoryCntn" onClick={() => {setApodDisplay(elem)}} key={idx}>
                            <div className="apodHistoryUnit">
                                {
                                    apodDisplay?.media_type === "image" && (
                                        <motion.div
                                            className="unitImage" 
                                            initial={{ opacity: 0.1 }} 
                                            whileInView={{ opacity: 1, transition: { type: "spring", damping: 30, stiffness: 200 } }} 
                                            viewport={{ once: true, amount: 0.45 }}
                                        >
                                            <img src={`${ elem?.hdurl ? elem?.hdurl : elem?.url }`} alt="" />
                                        </motion.div>
                                    )
                                }
                                <div className="rightData">
                                    <div style={{overflowY: "hidden"}}>
                                        <h2>{elem.title}</h2>
                                    </div>
                                    <p>
                                        Details: <span>{elem?.explanation}</span>
                                    </p>
                                    <p>
                                        Date: <span>{elem?.date}</span>
                                    </p>
                                    <p>
                                        Copyright: <span>{elem?.copyright ? elem?.copyright : "none"}</span>
                                    </p>
                                </div>
                            </div>
                        </motion.a>
                    ))
                )
            }

            {
                listCount < LSData.length && (
                    <button type='button' className="loadmoreApod" onClick={() => {setListCount(prev => prev + 2)}}>Load More</button>
                )
            }

        </motion.section>
    )
}

export default Apod_Sect2
