import React, { useState } from "react";
import { motion } from "framer-motion";

const NasaIdSect1 = ({ details }) => {
    const [mediaPlayState, setMediaPlayState] = useState(false);
    const [ isHovered, setIsHovered ] = useState(false);

    const utilFetch = async (vlad) => {
        try{ 
            const res = await fetch (vlad); 
            const data = await res.json();

            const filterer = data.filter((elem) => elem.endsWith(".mp4"))
            return filterer[0];

        } catch (err) {
            console.error();('Error fetching data:', err);
            return err;
        }
    }


    const handlePlayVideo = (e, vlad) => {
        let video = e.target.parentElement.childNodes[0];

        if (video.getAttribute("src") && !mediaPlayState) {
            video.play();
            setMediaPlayState(prev => !prev);
            console.log("video played");
        } else if (!video.getAttribute("src") && !mediaPlayState ) {
            utilFetch(vlad).then(data => {
                console.log("Data received:", data); 
                video.setAttribute("src", data);
                video.play();
                setMediaPlayState(prev => !prev);
            });
        } else if (video.getAttribute("src") && mediaPlayState) {
            video.pause();
            setMediaPlayState(prev => !prev);
            console.log("video paused");
            console.log(video.getAttribute("src"));
        }
    }

    //Animation Variables
    const hoverer = {
        clad: {
            x: isHovered? [4,0,4,0]: 0
        }
    }

    const parentVar = {
        init: {
            opacity: 0.95
        },
        finale: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
                duration: 0.05
            }
        }
    }

    const slideUp = {
        init: {
            y: "40%",
            opacity: 0,
            rotate: 4
        },
        finale: {
            y: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200
            }
        }
    }

    const swipeRight = {
        init: {
            x: "-100%",
            opacity: 0
        },
        finale: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200
            }
        }
    }



    return (
        <motion.section initial="init" animate="finale" variants={parentVar} className="NasaId-sect1">
            <div className="gobackBox">
                <motion.div variants={swipeRight} onMouseEnter={() => {setIsHovered(prev => !prev)}} onMouseLeave={() => {setIsHovered(prev => !prev)}} onClick={() => {history.back()}}><span className="backIconCntn"><motion.i animate="clad" variants={hoverer} className="icofont-swoosh-left"></motion.i></span> <p>Back</p></motion.div>
            </div>
            <div className="nasaIdDetailsCntn">
                <motion.div variants={swipeRight} className="leftDisplayImg">
                    { details?.data[0].media_type === "image" && (
                        <>
                            <img src={`${ details?.links[0].href }`} alt={`${details?.data[0].nasa_id} image`} />
                        </>
                    )}

                    { details?.data[0].media_type === "video" && (
                        <>
                            <video src="" autoPlay controls poster={`${ details?.links[0].href }`}></video>
                            <div className="mediaPlayPause" onClick={(e) => {handlePlayVideo(e, details?.href)}}><i className={`${mediaPlayState?"icofont-ui-pause":"icofont-ui-play"}`}></i></div>
                        </>
                    )}
                </motion.div>

                <div className="rightDisplayImg">
                    <div style={{ overflow: "hidden" }}>
                        <motion.h2 variants={slideUp}>
                            {details?.data[0].title}
                        </motion.h2>
                    </div>
                    <motion.h3 variants={slideUp}>
                        Date Created:{" "}
                        <span>
                            {new Date(details?.data[0].date_created).toLocaleDateString(
                                "en-US",
                                { day: "numeric", month: "long", year: "numeric" }
                            )}.
                        </span>
                    </motion.h3>
                    <motion.p variants={slideUp}>
                        Details: <span>{details?.data[0].description}</span>
                    </motion.p>
                    <motion.p variants={slideUp}>
                        Nasa-Id: <span>{details?.data[0].nasa_id}</span>
                    </motion.p>
                    <motion.p variants={slideUp}>
                        Location: <span>{details?.data[0].location ? details?.data[0].location : "null"}</span>,   Center: <span>{details?.data[0].center?details?.data[0].center:"null"}</span>
                    </motion.p>
                    <motion.p variants={slideUp}>
                        Photographer: <span>{details?.data[0].photographer?details?.data[0].photographer:"null"}</span>
                    </motion.p>
                    <motion.p variants={slideUp}>
                        Keywords:{" "}
                        <span>
                            {details?.data[0].keywords?.map((elem, idx) => `${elem}, `)}
                        </span>
                    </motion.p>
                </div>
            </div>

        </motion.section>
    );
};

export default NasaIdSect1;
