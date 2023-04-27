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
                        <p className={"paragraph"} key={idx}>{elem}</p>
                    ))
                }
            </div>

            {
                data?.iframeLink && (
                    <div className="sectionIframe">

                        {
                            data?.iframeLink.type === "iframe" && (
                                <>
                                    <div className="iframeCntn">
                                        <iframe src={data?.iframeLink.content} frameborder="0" 
                                        scrolling='no' width="900" height="600"></iframe>
                                    </div>
                                    <p><i className="icofont-info-square"> </i>   Interact with this interface to explore an relatively immersive 3d view of the Solar System. Click on any of the element to get a better view of it. Scroll up/down(pinch up/down) to zoom in/out.</p>
                                </>
                            )
                        }

                        {
                            data?.iframeLink.type === "image" && (
                                <div className="unitDetailImage">
                                    <img src={data?.iframeLink.content} alt="BlaBla Vlad image" />
                                    <p className="imageDetails">{data?.iframeLink.content_description}</p>
                                </div>
                            )
                        }
                    </div>
                )
            }


            <div className="planetDataSection">
                <h1>12 Facts About {data?.name}:</h1>

                <div className="planetsGridntn">
                    {
                        data?.facts_12.map((elem, idx) => (
                            <motion.div className="planetUnitDataCntn" key={`${elem.headText}${idx}`}>
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





        </motion.div>
    )
}

export default OverviewSect
