import React, { useState } from 'react';
import Navbar from '../navbar';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Image_library_sect1 = () => {
    const [searchFilterParams, setSearchFilterParams] = useState({
        image: true,
        video: false,
        audio: false,
        resultPerPage: 10,
        start_Year: 1920,
        end_Year: 2023
    });
    
    
    const [ mainData, setMainData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState({
        state: false,
        msg: ""
    });
    const [ filtererCount, setFiltererCount ] = useState(10);
    const [ mediaPlayState, setMediaPlayState ] = useState(false);
    
    const [ query, setQuery ] = useState("");
    const [openFilterer, setOpenFilterer] = useState(false);
    const filteredList = mainData?.filter((elem, idx) => idx <= filtererCount - 1);

    const fetcher = async () => {
        setIsLoading(true);
        setFiltererCount(searchFilterParams.resultPerPage);
        try {
            const response = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=${searchFilterParams.image?"image":""}${searchFilterParams.video?",video":""}${searchFilterParams.audio?",audio":""}&page=1&year_start=${searchFilterParams.start_Year}&year_end=${searchFilterParams.end_Year}`);
            const data = await response.json();

            
            if ( data.collection?.items ) {
                console.log(data.collection);
                setMainData(data.collection?.items);
                setIsLoading(false);
            } else if ( data.collection?.items === undefined) {
                console.log('Error fetching data:', data);
                setIsLoading(false);
                setMainData([]);
                setIsError({
                    state: true,
                    msg: data?.reason
                });
            }
        } catch (error) {
            console.error();('Error fetching data:', error);
            setIsLoading(false);
            setMainData([]);
            setIsError({
                state: true,
                msg: data?.reason
            });
        }
    };

    const handleSearchLibrary = (e) => {
        e.preventDefault();
        fetcher();
    }

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
            });;

        } else if (video.getAttribute("src") && mediaPlayState) {
            video.pause();
            setMediaPlayState(prev => !prev);
            console.log("video paused");
            console.log(video.getAttribute("src"));
        }
    };


    //Animation variables
    const parentvar = {
        init: {
            opacity: 0.9
        },
        finale: {
            opacity: 1,
            transition: {
                duration: 0.05,
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        }
    }

    const slideUp = {
        init: {
            y: "120%",
            rotate: 10,
            opacity: 0.3
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
            x: "-60%",
            opacity: 0
        },
        finale: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 200
            }
        }
    }

    const swipeLeft = {
        init: {
            x: "60%",
            y: 0,
            opacity: 0
        },
        finale: {
            x: 0,
            y: "-50%",
            opacity: 1,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200
            }
        }
    }

    const swipeInExit = {
        init: {
            x: "60%",
            opacity: 0
        },
        finale: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 200
            }
        }, 
        exit: {
            x: "-70%",
            transition: {
                ease: "easeInOut",
                duration: 0.15,
            }
        }
    }


  return (
    <section className='imageLibrarySect1'>
        <Navbar/>

        <div className="imgLibrarysection">
            <motion.div variants={parentvar} className="pathHistory" style={{overflowY: "hidden"}}>
                <motion.div variants={slideUp} className="pathLink">
                    <Link href={"/"}>Home</Link>
                </motion.div>
                <motion.i variants={swipeRight} className="icofont-thin-double-right"></motion.i>
                <motion.div variants={slideUp} className="pathLink">
                    <Link href={"/search"}>Search</Link>
                </motion.div>
                <motion.i variants={swipeRight} className="icofont-thin-double-right"></motion.i>
                <motion.div variants={slideUp} className="pathLink">
                    <p>Image_Video Library</p>
                </motion.div>
            </motion.div>

            <div className="searchandFilters">
                <div className="imgLibsearchbox">
                    <motion.form variants={parentvar} className="imgsearchInputCntn" onSubmit={handleSearchLibrary}>
                        <motion.input variants={slideUp} value={query} type="text" onChange={(e) => {setQuery(e.target.value)}} name="imgLibSearch" placeholder='Search for ... (e.g. "Mars")'/>
                        <motion.button variants={swipeLeft} type="submit">Go</motion.button>
                    </motion.form>

                    <motion.div variants={swipeLeft} className="filtererToggler" onClick={() => {setOpenFilterer(prev => !prev)}}>
                        <p>Filter</p>
                        <i className="icofont-filter"></i>
                    </motion.div>
                </div>

                <AnimatePresence mode='wait'>
                    {
                        openFilterer && (
                            <motion.div initial="init" animate="finale" exit="exit" variants={swipeInExit} className="imgLibFiltererCntn">
                                <h2>Filter Results by:</h2>

                                <button type='button' className='filtererCloser' onClick={() => {setOpenFilterer(false)}}><i className="icofont-close"></i></button>

                                <div className="imgLibFilterer">
                                    <div className="filtererGroup">
                                        <div className="filetererUnit">
                                            <motion.label
                                                className="h-45 form-control"
                                            >
                                                <input type="checkbox" checked={searchFilterParams.image}  name="checkbox" onChange={() => {setSearchFilterParams({...searchFilterParams, image: !searchFilterParams.image})}}/>
                                                <p>Image</p>
                                            </motion.label>
                                        </div>
                                        <div className="filetererUnit">
                                            <motion.label
                                                className="h-45 form-control"
                                            >
                                                <input type="checkbox" checked={searchFilterParams.video}  name="checkbox" onChange={() => {setSearchFilterParams({...searchFilterParams, video: !searchFilterParams.video})}}/>
                                                <p>Video</p>
                                            </motion.label>
                                        </div>
                                        <div className="filetererUnit">
                                            <motion.label
                                                className="h-45 form-control"
                                            >
                                                <input type="checkbox" checked={searchFilterParams.audio} name="checkbox" onChange={() => {setSearchFilterParams({...searchFilterParams, audio: !searchFilterParams.audio})}}/>
                                                <p>Audio</p>
                                            </motion.label>
                                        </div>
                                    </div>

                                    <div className="filtererGroup">
                                        <div className="filetererUnit2">
                                            <motion.div
                                                className="filtererinputCntn"
                                            >
                                                <p>Results per search:</p>
                                                <input 
                                                    type="text" 
                                                    value={searchFilterParams.resultPerPage} 
                                                    placeholder='00'
                                                    onChange={(e) => {setSearchFilterParams({...searchFilterParams, resultPerPage: e.target.value})}}
                                                />
                                            </motion.div>
                                        </div>

                                        <div className="filetererUnit2">
                                            <motion.div
                                                className="filtererinputCntn"
                                            >
                                                <p>From ( year ):</p>
                                                <input 
                                                    type="text" 
                                                    value={searchFilterParams.start_Year} 
                                                    placeholder='00'
                                                    onChange={(e) => {setSearchFilterParams({...searchFilterParams, start_Year: e.target.value})}}
                                                />
                                            </motion.div>
                                        </div>

                                        <div className="filetererUnit2">
                                            <motion.div
                                                className="filtererinputCntn"
                                            >
                                                <p>To ( year ):</p>
                                                <input 
                                                    type="text" 
                                                    value={searchFilterParams.end_Year} 
                                                    placeholder='00'
                                                    onChange={(e) => {setSearchFilterParams({...searchFilterParams, end_Year: e.target.value})}}
                                                />
                                            </motion.div>
                                        </div>
                                    </div>


                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>

            </div>

            <div className="imgLibDataSection">
                {
                    mainData?.length <= 0 && isLoading && (
                        <div className="imgLibLoader">
                            <div className="imgloaderCntn">
                                <i className="icofont-spinner-alt-2"></i>
                            </div>
                        </div>
                    )
                }

                <AnimatePresence mode='wait'>
                    {
                        isError.state && (
                            <motion.h3 initial="init" animate="finale" exit="exit" variants={swipeInExit}>Error occurred: {isError.msg}</motion.h3>
                        )
                    }
                </AnimatePresence>

                {
                    mainData?.length > 0 && (
                        <>
                            <h2>Search Results:</h2>
                            {

                                filteredList?.map((elem, idx) => (
                                    <motion.div initial={{ opacity: 0.1, x: "20%" }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, type: "spring", damping: 20, stiffness: 200 } }} viewport={{ once: true, amount: 0.2 }} className="apodHistoryCntn" key={idx}>
                                        <div className="apodHistoryUnit">
                                            <motion.div
                                                className="unitImage" 
                                                initial={{ opacity: 0.1 }} 
                                                whileInView={{ opacity: 1, transition: { type: "spring", damping: 30, stiffness: 200 } }} 
                                                viewport={{ once: true, amount: 0.45 }}
                                            >
                                                { elem?.data[0].media_type === "image" && (
                                                    <img src={`${ elem?.links[0].href }`} alt={`${elem?.data[0].nasa_id} image`} />
                                                )}

                                                { elem?.data[0].media_type === "video" && (
                                                    <>
                                                        <video src="" autoPlay controls poster={`${ elem?.links[0].href }`}></video>
                                                        <div className="mediaPlayPause" onClick={(e) => {handlePlayVideo(e, elem?.href)}}><i className="icofont-play-pause"></i></div>
                                                    </>
                                                )}
                                            </motion.div>
                                            <Link href={`/search/image_video_library/${elem?.data[0].nasa_id}`} className="rightData">
                                                <div style={{overflowY: "hidden"}}>
                                                    <h2
                                                        initial={{ opacity: 0.1, x: "100%" }} 
                                                        whileInView={{ opacity: 1, x: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} 
                                                        viewport={{ once: true, amount: 0.55 }}
                                                    >{elem.data[0].title}</h2>
                                                </div>
                                                <p
                                                    initial={{ opacity: 0, x: 12 }} 
                                                    whileInView={{ opacity: 1, x: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} 
                                                    viewport={{ once: true, amount: 0.35 }}
                                                >
                                                    Date Created: <span>{ new Date(elem?.data[0].date_created).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', }) }</span>
                                                </p>
                                                <p
                                                    initial={{ opacity: 0, x: 12 }} 
                                                    whileInView={{ opacity: 1, x: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} 
                                                    viewport={{ once: true, amount: 0.35 }}
                                                >
                                                    Details: <span>{elem?.data[0].description}</span>
                                                </p>
                                                <p
                                                    initial={{ opacity: 0, x: "100%" }} 
                                                    whileInView={{ opacity: 1, x: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} 
                                                    viewport={{ once: true, amount: 0.25 }}
                                                >
                                                    Nasa-Id: <span>{elem?.data[0].nasa_id}</span>
                                                </p>
                                                <p
                                                    initial={{ opacity: 0, x: "100%" }} 
                                                    whileInView={{ opacity: 1, x: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} 
                                                    viewport={{ once: true, amount: 0.45 }}
                                                >
                                                    Keywords: <span>{elem?.data[0].keywords?.map((elem, idx) => (`${elem},`))}</span>
                                                </p>
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </>
                    )
                }

                {
                    searchFilterParams.resultPerPage < 100 && mainData?.length > 0 && (
                        <button type='button' className="loadmoreApod" onClick={() => {setFiltererCount(prev => prev + 10)}}>Load More</button>
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default Image_library_sect1
