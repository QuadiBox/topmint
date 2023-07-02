import React from 'react'
import Indepth from './Indepth'
import OverviewSect from './OverviewSect'
import Summary from './Summary'
import { motion, AnimatePresence } from 'framer-motion'
import VisualSummary from './VisualSummary'
import Moonlist from './Moonlist'
import { useContext } from 'react';
import { themeContext } from '../../../providers/ThemeProvider';

const MainSect = ({ data, navOption, factor }) => {
    const ctx = useContext(themeContext);
    const { showImageViewer, activeImageViewerData, setShowImageViewer } = ctx;

    //Animation Variables
    const parentVar = {
        init: {
            y: "10%",
            opacity: 0.75
        }, 
        finale: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.25,
            }
        },
        exit: {
            y: "30%",
            opacity: 0.5,
            transition: {
                ease: "easeOut",
                duration: 0.1,
            }
        },
    }
    const scaleUp = {
        init: {
            scale: 0.9,
            opacity: 0.85
        }, 
        finale: {
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.25,
            }
        },
        exit: {
            scale: "30%",
            opacity: 0.5,
            transition: {
                ease: "easeOut",
                duration: 0.1,
            }
        },
    }
    const swipe = {
        init: {
            x: 10,
            opacity: 0
        }, 
        finale: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200,
            }
        },
        exit: {
            x: 10,
            opacity: 0,
            transition: {
                ease: "easeOut",
                duration: 0.1,
            }
        },
    }


    return (
        <section className='systemMainSect'>
            <AnimatePresence mode='wait'>
                {
                    navOption === "overview" && (
                        <OverviewSect data={data?.overview}/>
                    )
                }
                {
                    navOption === "indepth" && (
                        <Indepth data={data?.inDepth} factor={factor}/>
                    )
                }
                {
                    navOption === "summary" && (
                        <Summary data={data?.summary}/>
                    )
                }
                {
                    navOption === "visualSummary" && (
                        <VisualSummary data={data?.visual_summary}/>
                    )
                }
                {
                    navOption === "moonList" && (
                        <Moonlist data={data?.moonList}/>
                    )
                }
            </AnimatePresence>

            <AnimatePresence mode='wait'>
                {
                    showImageViewer && (
                        <motion.div initial="init" animate="finale" exit="exit" variants={parentVar} className="imageViewer">
                            <motion.div variants={scaleUp} className="largeImageDisplayer" style={{backgroundImage: `url(${activeImageViewerData.content})`}}>
                                {/* <img src={activeImageViewerData.content} alt={activeImageViewerData.content.replace("/.jpg|.webp|.gif|.jpeg/gi", "")} /> */}
                            </motion.div>
                            <div className="largeImageDescription">
                                <div className='textCntn'>
                                    <h3>Description :</h3>
                                    <p>{activeImageViewerData.content_description}</p>
                                </div>
                            </div>

                            <motion.button variants={swipe} type='button' className="closeBtnImgViewwer" onClick={() => {setShowImageViewer(prev => !prev)}}><i className="icofont-close-squared-alt"></i></motion.button>
                        </motion.div>
                    )
                }
            </AnimatePresence>

        </section>
    )
}

export default MainSect
