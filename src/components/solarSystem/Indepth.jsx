import React from 'react';
import { motion } from 'framer-motion';

const Indepth = ({ data, factor }) => {

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
        <motion.section initial="init" animate="finale" exit="exit"  variants={parentvar} className='inDepthSect'>

            {
                data?.map((elem, idx) => (
                    <div className="unitParagraph" key={idx / factor}>
                        <h2>{elem.title}</h2>

                        {
                            elem?.texts.map((elem, index) => {
                                if (elem?.content_type === "text") {
                                    return (
                                        <div key={index / 2.4567}>
                                            {elem.head && (
                                                <motion.h3 initial={{ opacity: 0.2, rotate: 2, y: "20%" }} whileInView={{ opacity: 1, rotate: 0, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.2 }} >{elem.head} - </motion.h3>
                                            )}
                                            <motion.p initial={{ opacity: 0.2, rotate: 1, y: "10%" }} whileInView={{ opacity: 1, rotate: 0, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.07 }} className={index === 0 && idx === 0 ? 'firstText' : ""} key={`${index + 1}text`}>{elem.content}</motion.p>
                                        </div>
                                    )
                                } else if (elem?.content_type === "image") {
                                    return (
                                        <motion.div initial={{ opacity: 0.2, y: "20%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.1 }} className="unitDetailImage" key={`${index + 1}image`}>
                                            <img src={elem.content} alt="BlaBla Vlad image" />
                                            <p className="imageDetails">{elem?.content_description}</p>
                                        </motion.div>
                                    )
                                } else if (elem?.content_type === "video") {
                                    return (
                                        <motion.div initial={{ opacity: 0.2, y: "20%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.1 }} className="unitDetailImage" key={`${index + 1}image`}>
                                            <video src={elem.content} autoPlay loop></video>
                                            <p className="imageDetails">{elem?.content_description}</p>
                                        </motion.div>
                                    )
                                } else {
                                    return(
                                        <div className="iframeCntn-indepth" key={index * 2.12345}>
                                            <iframe src={`https://www.youtube.com/embed/${elem.content}`} frameBorder="0" 
                                            scrolling='no' width="900" height="600"></iframe>
                                        </div>
                                    )
                                }
                            })
                        }

                    </div>

                ))
            }


        </motion.section>
    )
}

export default Indepth
