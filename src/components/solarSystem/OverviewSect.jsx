import React from 'react';
import { motion } from 'framer-motion';

const OverviewSect = ({ data }) => {


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
        <motion.div initial="init" animate="finale" exit="exit" variants={parentvar} className='oversiewSection'>
            {data?.topBox && (
                <div className="topBoxSystem">
                    <h2 className="headtext">{data?.topBox.headText}</h2>
                    <div className="bodyText">{data?.topBox.text}</div>
                </div>
            )}

            <div className="paragraphSect">
                {
                    data.paragraphs.map((elem, idx) => (
                        <motion.p initial={{ opacity: 0.1, y: "10%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.07 }} className={"paragraph"} key={idx * 6}>{elem}</motion.p>
                    ))
                }
            </div>

            {
                data?.iframeLink && (
                    <div className="sectionIframe">

                        {
                            data?.iframeLink.type === "iframe" && (
                                <>
                                    <motion.div initial={{ opacity: 0.2, y: "10%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.1 }} className="iframeCntn">
                                        <iframe src={data?.iframeLink.content} frameBorder="0" 
                                        scrolling='no' width="900" height="600"></iframe>
                                    </motion.div>
                                    <p><i className="icofont-info-square"> </i>   Interact with this interface to explore an relatively immersive 3d view of the Solar System. Click on any of the element to get a better view of it. Scroll up/down(pinch up/down) to zoom in/out.</p>
                                </>
                            )
                        }

                        {
                            data?.iframeLink.type === "image" && (
                                <motion.div initial={{ opacity: 0.2, y: "10%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.1 }} className="unitDetailImage">
                                    <img src={data?.iframeLink.content} alt="BlaBla Vlad image" />
                                    <p className="imageDetails">{data?.iframeLink.content_description}</p>
                                </motion.div>
                            )
                        }
                    </div>
                )
            }

            {
                data?.facts_12 && (
                    <div className="planetDataSection">
                        <h1>{data?.facts_12.length} Facts About {data?.name}:</h1>

                        <div className="planetsGridntn">
                            {
                                data?.facts_12.map((elem, idx) => (
                                    <motion.div initial={{ opacity: 0.2, y: "20%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.1 }} className="planetUnitDataCntn" key={`${elem.headText}${idx}`}>
                                        <div className="planetUnitData">
                                            <div className="factNumber">{idx + 1}</div>
                                            <h4>{elem?.headText}</h4>
                                            <span>{elem?.text}</span>
                                        </div>
                                    </motion.div>
                                ))
                            }
                            
                        </div>
                    </div>

                )
            }







        </motion.div>
    )
}

export default OverviewSect
