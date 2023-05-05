import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';


const Star_questSect1 = () => {
    const [ query, setQuery ] = useState("");
    const [ searchInfo, setSearchInfo ] = useState("Name of the Star. For example Vega , Sirius, Alpha Centauri A. or Arcturus.");
    const [ placeHolderText, setPlaceHolderText ] = useState('Search for ... (e.g. "Vega")');
    const [ pQParams, setPQParams ] = useState({
        name: true,
        min_Mag: false,
        max_Mag: false,
        constellation: false,
        min_distance: false,
        max_distance: false,
        min_App_Mag: false,
        max_App_Mag: false,
    });

    const [ planetData, setPlanetData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState({
        state: false,
        msg: ""
    });

    const handleQueryParams = (e) => {
        switch(e.target.value) {
            case "name":
                setPlaceHolderText('Search for ... (e.g. "Vega")');
                setSearchInfo('Name of the Star. For example Vega , Sirius, Alpha Centauri A. or Arcturus.');
                setPQParams({
                    name: true,
                    min_Mag: false,
                    max_Mag: false,
                    constellation: false,
                    min_distance: false,
                    max_distance: false,
                    min_App_Mag: false,
                    max_App_Mag: false,
                });
              break;
            case "constellation":
                setPlaceHolderText('Search for ... (e.g. Andromeda)');
                setSearchInfo('The constellation the star belongs to. For exmaple Andromeda, Ursa Major,Ursa Minor, Orion.');
                setPQParams({
                    name: false,
                    min_Mag: false,
                    max_Mag: false,
                    constellation: true,
                    min_distance: false,
                    max_distance: false,
                    min_App_Mag: false,
                    max_App_Mag: false,
                });
              break;
            case "minMag":
                setPlaceHolderText('Search for ... (e.g. -30)');
                setSearchInfo('Minimum absolute magnitude brightness of the star. Negative values are for very bright stars and vice versa');
                setPQParams({
                    name: false,
                    min_Mag: true,
                    max_Mag: false,
                    constellation: false,
                    min_distance: false,
                    max_distance: false,
                    min_App_Mag: false,
                    max_App_Mag: false,
                });
              break;
            case "maxMag":
                setPlaceHolderText('Search for ... (e.g. 50)');
                setSearchInfo('Maximum absolute magnitude brightness of the star. Negative values are for very bright stars and vice versa');
                setPQParams({
                    name: false,
                    min_Mag: false,
                    max_Mag: true,
                    constellation: false,
                    min_distance: false,
                    max_distance: false,
                    min_App_Mag: false,
                    max_App_Mag: false,
                });
              break;
            case "minAppMag":
                setPlaceHolderText('Search for ... (e.g. -30)');
                setSearchInfo('Minimum apparent brightness of the star in night sky to the naked eye. Negative values are for very bright stars and vice versa');
                setPQParams({
                    name: false,
                    min_Mag: false,
                    max_Mag: false,
                    constellation: false,
                    min_distance: false,
                    max_distance: false,
                    min_App_Mag: true,
                    max_App_Mag: false,
                });
              break;
            case "maxAppMag":
                setPlaceHolderText('Search for ... (e.g. 50)');
                setSearchInfo('Maximum apparent brightness of the star in night sky to the naked eye. Negative values are for very bright stars and vice versa');
                setPQParams({
                    name: false,
                    min_Mag: false,
                    max_Mag: false,
                    constellation: false,
                    min_distance: false,
                    max_distance: false,
                    min_App_Mag: false,
                    max_App_Mag: true,
                });
              break;
            case "minDistance":
                setPlaceHolderText('Search for ... (e.g. 0.5)');
                setSearchInfo('Minimum distance the star is from Earth in light years.');
                setPQParams({
                    name: false,
                    min_Mag: false,
                    max_Mag: false,
                    constellation: false,
                    min_distance: true,
                    max_distance: false,
                    min_App_Mag: false,
                    max_App_Mag: false,
                });
              break;
            case "maxDistance":
                setPlaceHolderText('Search for ... (e.g. 50)');
                setSearchInfo('Maximum distance the star is from Earth in light years.');
                setPQParams({
                    name: false,
                    min_Mag: false,
                    max_Mag: false,
                    constellation: false,
                    min_distance: false,
                    max_distance: true,
                    min_App_Mag: false,
                    max_App_Mag: false,
                });
              break;
            default:
              return;
        }
    };

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4ce9e43e39mshe3bda1663a5f8f0p16b219jsn6c70ea38b9d1',
            'X-RapidAPI-Host': 'stars-by-api-ninjas.p.rapidapi.com'
        }
    };

    const fetcher = () => {
        fetch(`https://stars-by-api-ninjas.p.rapidapi.com/v1/stars?${pQParams.name?`name=${query}`:""}${pQParams.constellation?`constellation=${query}`:""}${pQParams.min_Mag?`min_absolute_magnitude=${query}`:""}${pQParams.max_Mag?`max_absolute_magnitude=${query}`:""}${pQParams.min_App_Mag?`min_apparent_magnitude=${query}`:""}${pQParams.max_App_Mag?`max_apparent_magnitude=${query}`:""}${pQParams.min_distance?`min_distance_light_year=${query}`:""}${pQParams.max_distance?`max_distance_light_year=${query}`:""}`, options)
                .then(response => response.json())
                .then(response => {
                    if (Array.isArray(response) && response?.length > 0) {
                        setIsError({ status:false, msg: ""});
                        setIsLoading(false);
                        setPlanetData(response);
                        setQuery("");
                    } else if (Array.isArray(response) && response?.length <= 0) {
                        setIsLoading(false);
                        setIsError({ state:true, msg: "No Matching Data"});
                        setPlanetData(response);
                        setQuery("");
                    } else {
                        setIsLoading(false);
                        setIsError({ state:true, msg: response.error});
                        console.log("error:", response);
                        setQuery("");
                    }
                })
                .catch(err => {
                    setIsLoading(false);
                    console.error("error:", err);
                    setIsError({ state:true, msg: `${err}`})
                });
    }

    const handleGetStarData = (e) => {
        e.preventDefault();
        setIsError({ status:false, msg: ""});
        setIsLoading(true);
        setPlanetData([]);
        fetcher();
    }

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
            rotate: 5,
            opacity: 0.05
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
    <section className='planetQuerySect1'>
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
                <p>Star Quest</p>
            </motion.div>
        </motion.div>

        <div className="imgLibsearchbox">
            <motion.div variants={parentvar}  style={{overflowX: "hidden"}}>
                <motion.form className="imgsearchInputCntn" onSubmit={handleGetStarData}>
                    <motion.input variants={slideUp} value={query} type="text" onChange={(e) => {setQuery(e.target.value)}} name="imgLibSearch" placeholder={placeHolderText}/>
                    <motion.button variants={swipeLeft} type="submit">Go</motion.button>
                </motion.form>
                <motion.p variants={swipeRight}><i className="icofont-info-circle"></i> {" "}  {searchInfo}</motion.p>
            </motion.div>
            
            <div className="planetFilterer">
                <motion.div variants={slideUp} className="select">
                    <select
                        name="choose"
                        id="filterProducts"
                        onChange={handleQueryParams}
                    >
                        <option value={null}>Quest Parameters</option>
                        <option value="name">Name ( String )</option>
                        <option value="constellation">Constellation ( String )</option>
                        <option value="minAppMag">Min_apparent_magnitude ( Number )</option>
                        <option value="maxAppMag">Max_apparent_magnitude ( Number )</option>
                        <option value="minMag">Min_absolute_magnitude ( Number )</option>
                        <option value="maxMag">Max_absolute_magnitude ( Number )</option>
                        <option value="minDistance">Min_distance_light_year ( Number )</option>
                        <option value="maxDistance">Max_distance_light_year ( Number )</option>
                    </select>
                </motion.div>
            </div>

        </div>

        {
            isLoading && (
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
                    <motion.h3 initial="init" animate="finale" exit="exit" variants={swipeInExit} style={{color: "#ff5882", textAlign: "center", fontSize: "3em", fontWeight: "300"}}>Error occurred: {isError.msg}</motion.h3>
                )
            }
        </AnimatePresence>


        {
            planetData.length > 0 && (
                
                <div className="planetDataSection">
                    <h1>Search Results:</h1>

                    <div className="planetsGridntn">
                        {
                            planetData?.map((elem, idx) => (
                                <motion.div initial={{  y: "20%", opacity: 0.3, }} whileInView={{  y: 0, opacity: 1, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.07 }} className="planetUnitDataCntn" key={`${elem.name}${idx}`}>
                                    <div className="planetUnitData">
                                        <h2>{elem?.name}</h2>
                                        <p>Constallation: <span>{elem?.constellation?elem?.constellation: `${elem?.constellation}`}</span></p>
                                        <p>Apparent Brightness Magnitude: <span>{elem?.apparent_magnitude? elem?.apparent_magnitude : "unknown"}</span></p>
                                        <p>Absolute Brightness Magnitude: <span>{elem?.absolute_magnitude? elem?.absolute_magnitude: "unknown"}</span></p>
                                        <p>Distance from Earth: <span>{elem?.distance_light_year} light year ({(elem?.distance_light_year*9.46).toFixed(5)} * 10<sup>12</sup> km)</span></p>
                                        <p>Right Ascension(Astronomical equivalent of longitude): <span>{elem?.right_ascension? elem?.right_ascension : "unknown"}</span></p>
                                        <p>Declination(Astronomical equivalent of latitude): <span>{elem?.declination? elem?.declination: `${elem?.declination}`}</span></p>
                                        <p>Spectral Class: <span>{elem?.spectral_class ? elem?.spectral_class: `${elem?.spectral_class}`}</span></p>
                                    </div>
                                </motion.div>
                            ))
                        }
                        
                    </div>
                </div>
            )
        }

    </section>
  )
}

export default Star_questSect1
