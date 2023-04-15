import React from 'react';
import { motion } from 'framer-motion';

const Indepth = ({ data }) => {

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
                    <div className="unitParagraph" key={`${elem.title}${idx}`}>
                        <h2>{elem.title}</h2>

                        {
                            elem?.texts.map((elem, index) => {
                                if (elem?.content_type === "text") {
                                    return (
                                        <>
                                        {elem.head && (
                                            <h3>{elem.head} - </h3>
                                        )}
                                            <p className={index === 0 && idx === 0 ? 'firstText' : ""} key={`${index + 1}text`}>{elem.content}</p>
                                        </>
                                    )
                                } else {
                                    return (
                                        <div className="unitDetailImage" key={`${index + 1}image`}>
                                            <img src={elem.content} alt="BlaBla Vlad image" />
                                            <p className="imageDetails">{elem?.content_description}</p>
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
