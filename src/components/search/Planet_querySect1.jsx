import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Planet_querySect1 = () => {
    const [ query, setQuery ] = useState("");
    const [ searchInfo, setSearchInfo ] = useState("Name of the Planet. For example 16 Cygni Bb , Mars, Earth or Kepler-7 b.");
    const [ placeHolderText, setPlaceHolderText ] = useState('Search for ... (e.g. "Earth")');
    const [ pQParams, setPQParams ] = useState({
        name: true,
        min_mass: false,
        max_mass: false,
        min_rad: false,
        max_rad: false,
        min_temp: false,
        max_temp: false,
        min_period: false,
        max_period: false,
        min_distance: false,
        max_distance: false,
    });

    const [ planetData, setPlanetData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState({
        state: false,
        msg: ""
    });

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4ce9e43e39mshe3bda1663a5f8f0p16b219jsn6c70ea38b9d1',
            'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com'
        }
    };

    const fetcher = () => {
        fetch(`https://planets-by-api-ninjas.p.rapidapi.com/v1/planets?${pQParams.name?`name=${query}`:""}${pQParams.min_mass?`min_mass=${query}`:""}${pQParams.max_mass?`max_mass=${query}`:""}${pQParams.min_rad?`min_radius=${query}`:""}${pQParams.max_rad?`max_radius=${query}`:""}${pQParams.min_period?`min_period=${query}`:""}${pQParams.max_period?`max_period=${query}`:""}${pQParams.min_temp?`min_temperature=${query}`:""}${pQParams.max_temp?`min_temperature=${query}`:""}${pQParams.min_distance?`min_distance_light_year=${query}`:""}${pQParams.max_distance?`max_distance_light_year=${query}`:""}`, options)
                .then(response => response.json())
                .then(response => {
                    if (Array.isArray(response) && response?.length > 0) {
                        setIsError({ status:false, msg: response?.body});
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
                        setIsError({ state:true, msg: response.body});
                        console.log("error:", response.body);
                        setQuery("");
                    }
                })
                .catch(err => {
                    console.error("error:", err.body);
                    setIsError({ state:true, msg: `${err}`})
                });
    }



    const handleQueryParams = (e) => {
        switch(e.target.value) {
            case "name":
                setPlaceHolderText('Search for ... (e.g. "Earth")');
                setSearchInfo('Name of the Planet. For example 16 Cygni Bb , Mars, Earth or Kepler-7 b.');
                setPQParams({
                    name: true,
                    min_mass: false,
                    max_mass: false,
                    min_rad: false,
                    max_rad: false,
                    min_temp: false,
                    max_temp: false,
                    min_period: false,
                    max_period: false,
                    min_distance: false,
                    max_distance: false,
                });
              break;
            case "minMass":
                setPlaceHolderText('Search for ... (e.g. 6)');
                setSearchInfo('Minimum mass of the planets in Jupiters (1 Jupiter = 1.898 * 10^27 kg).');
                setPQParams({
                    name: false,
                    min_mass: true,
                    max_mass: false,
                    min_rad: false,
                    max_rad: false,
                    min_temp: false,
                    max_temp: false,
                    min_period: false,
                    max_period: false,
                    min_distance: false,
                    max_distance: false,
                });
              break;
            case "maxMass":
                setPlaceHolderText('Search for ... (e.g. 100)');
                setSearchInfo('Maximum mass of the planets in Jupiters (1 Jupiter = 1.898 * 10^27 kg).');
                setPQParams({
                    name: false,
                    min_mass: false,
                    max_mass: true,
                    min_rad: false,
                    max_rad: false,
                    min_temp: false,
                    max_temp: false,
                    min_period: false,
                    max_period: false,
                    min_distance: false,
                    max_distance: false,
                });
              break;
            case "minRad":
                setPlaceHolderText('Search for ... (e.g. 0.5)');
                setSearchInfo('Minimum average radius of the planets in Jupiters (1 Jupiter = 69911 km).');
                setPQParams({
                    name: false,
                    min_mass: false,
                    max_mass: false,
                    min_rad: true,
                    max_rad: false,
                    min_temp: false,
                    max_temp: false,
                    min_period: false,
                    max_period: false,
                    min_distance: false,
                    max_distance: false,
                });
              break;
            case "maxRad":
                setPlaceHolderText('Search for ... (e.g. 100)');
                setSearchInfo('Maximum average radius of the planets in Jupiters (1 Jupiter = 69911 km).');
                setPQParams({
                    name: false,
                    min_mass: false,
                    max_mass: false,
                    min_rad: false,
                    max_rad: true,
                    min_temp: false,
                    max_temp: false,
                    min_period: false,
                    max_period: false,
                    min_distance: false,
                    max_distance: false,
                });
              break;
            case "minPeriod":
                setPlaceHolderText('Search for ... (e.g. 0.5)');
                setSearchInfo('Minimum orbital period of the planet in Earth days.');
                setPQParams({
                    name: false,
                    min_mass: false,
                    max_mass: false,
                    min_rad: false,
                    max_rad: false,
                    min_temp: false,
                    max_temp: false,
                    min_period: true,
                    max_period: false,
                    min_distance: false,
                    max_distance: false,
                });
              break;
            case "maxPeriod":
                setPlaceHolderText('Search for ... (e.g. 300)');
                setSearchInfo('Maximum orbital period of the planet in Earth days.');
                setPQParams({
                    name: false,
                    min_mass: false,
                    max_mass: false,
                    min_rad: false,
                    max_rad: false,
                    min_temp: false,
                    max_temp: false,
                    min_period: false,
                    max_period: true,
                    min_distance: false,
                    max_distance: false,
                });
              break;
            case "minTemp":
                setPlaceHolderText('Search for ... (e.g. 1)');
                setSearchInfo('Minimum average surface temperature of the planet in Kelvin.');
                setPQParams({
                    name: false,
                    min_mass: false,
                    max_mass: false,
                    min_rad: false,
                    max_rad: false,
                    min_temp: true,
                    max_temp: false,
                    min_period: false,
                    max_period: false,
                    min_distance: false,
                    max_distance: false,
                });
              break;
            case "maxTemp":
                setPlaceHolderText('Search for ... (e.g. 5000)');
                setSearchInfo('Maximum average surface temperature of the planet in Kelvin.');
                setPQParams({
                    name: false,
                    min_mass: false,
                    max_mass: false,
                    min_rad: false,
                    max_rad: false,
                    min_temp: false,
                    max_temp: true,
                    min_period: false,
                    max_period: false,
                    min_distance: false,
                    max_distance: false,
                });
              break;
            case "minDistance":
                setPlaceHolderText('Search for ... (e.g. 0.2)');
                setSearchInfo('minimum distance the planet is from Earth in light years.');
                setPQParams({
                    name: false,
                    min_mass: false,
                    max_mass: false,
                    min_rad: false,
                    max_rad: false,
                    min_temp: false,
                    max_temp: false,
                    min_period: false,
                    max_period: false,
                    min_distance: true,
                    max_distance: false,
                });
              break;
            case "maxDistance":
                setPlaceHolderText('Search for ... (e.g. 1000)');
                setSearchInfo('Maximum distance the planet is from Earth in light years.');
                setPQParams({
                    name: false,
                    min_mass: false,
                    max_mass: false,
                    min_rad: false,
                    max_rad: false,
                    min_temp: false,
                    max_temp: false,
                    min_period: false,
                    max_period: false,
                    min_distance: false,
                    max_distance: true,
                });
              break;
            default:
              return;
        }
    }

    const handleGetPlanetData = (e) => {
        e.preventDefault();
        setIsError({state: false, msg: ""});
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
                <p>Planet Query</p>
            </motion.div>
        </motion.div>

        <div className="imgLibsearchbox">
            <motion.div variants={parentvar} style={{overflow: "hidden"}}>
                <motion.form className="imgsearchInputCntn" onSubmit={handleGetPlanetData}>
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
                        <option value={null}>Query Parameters</option>
                        <option value="name">Name ( String )</option>
                        <option value="minMass">Min_mass ( Number )</option>
                        <option value="maxMass">Max_mass ( Number )</option>
                        <option value="minRad">Min_radius ( Number )</option>
                        <option value="maxRad">Max_radius ( Number )</option>
                        <option value="minPeriod">Min_period ( Number )</option>
                        <option value="maxPeriod">Max_period ( Number )</option>
                        <option value="minTemp">Min_temperature ( Number )</option>
                        <option value="maxTemp">Max_temperature ( Number )</option>
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
                    <motion.h1 variants={slideUp}>Search Results:</motion.h1>

                    <div className="planetsGridntn">
                        {
                            planetData?.map((elem, idx) => (
                                <motion.div initial={{ opacity: 0.2, y: "20%" }} whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 30, stiffness: 200 } }} viewport={{ once: true, amount: 0.1 }}  className="planetUnitDataCntn" key={`${elem.name}${idx}`}>
                                    <div className="planetUnitData">
                                        <h2>{elem?.name}</h2>
                                        <p>Mass: <span>{elem?.mass} Jupiter&apos;s ({(elem?.mass*1.898).toFixed(5)} * 10<sup>27</sup> km)</span></p>
                                        <p>Average Temperature: <span>{elem?.temperature? `${elem?.temperature}k`: "unknown"}</span></p>
                                        <p>Average Radius: <span>{elem?.radius ? `${elem?.radius} Jupiter's (${(elem?.radius*69911).toFixed(3)} km)` : "unknown"}</span></p>
                                        <p>Orbital Period: <span>{elem?.period ? elem?.period : `${elem?.period}`} Earth days</span></p>
                                        <p>Semi-Major Axis: <span>{elem?.semi_major_axis? elem?.semi_major_axis : `${elem?.semi_major_axis} AU.`}</span></p>
                                        <p>Distance from Earth: <span>{elem?.distance_light_year} light year ({(elem?.distance_light_year*9.46*1000).toFixed(5)} * 10<sup>9</sup> km)</span></p>
                                        <p>Mass of Host Star: <span>{elem?.host_star_mass ? `${elem?.host_star_mass} solar mass ( ${(2*1.989).toFixed(3)} * 10^30 kg )`: "null"}</span></p>
                                        <p>Temperature of Host Star: <span>{elem?.host_star_temperature ? `${elem?.host_star_temperature}C`: "null"}</span></p>
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

export default Planet_querySect1
