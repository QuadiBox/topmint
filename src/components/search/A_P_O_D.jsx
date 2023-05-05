import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Loader from "../Loader";

const Sect1 = ({ apodDisplay, setApodDisplay, LSData , setLSData }) => {
    const defaultApod = {
        title: "Pillars of Creation",
        date: "Inifity",
        copyright: "None",
        explanation:
        "An elephant trunks of interstellar gas and dust in the Eagle Nebula, in the Serpens constellation, some 6,500-7,000 light-years (2,000-2,100 pc; 61-66 Em) from Earth. Photograph taken by Hubble's Telescope on April 1, 1995.",
        hdurl: "/pillarsofcreation.png",
    };

    const Error = {
        title: "Error !!!",
        date: "Today",
        copyright: "None",
        hdurl: "/error.png",
        media_type: "image"
    };

    const Loading = {
        title: "Loading ...",
        date: "Today",
        copyright: "None",
        hdurl: "/error.png",
        media_type: "element"
    };

    const dateFormatter = (vlad, clad) => {
        const dateUtil = new Date(vlad);
        const nd = dateUtil.getDate();
        const nm = dateUtil.getMonth();
        const ny = dateUtil.getFullYear();

        if (nd - clad <= 0) {
            if ( nm === 1) {
                dateUtil.setMonth(nm - 1);
                dateUtil.setDate(28 + (nd - clad));
            } else if ( nm === 8 || nm === 3 || nm === 5 || nm === 10) {
                dateUtil.setMonth(nm - 1);
                dateUtil.setDate(30 + (nd - clad));
            } else if ( nm === 11 || nm === 2 || nm === 4 || nm === 6 || nm === 7 || nm === 9) {
                dateUtil.setMonth(nm - 1);
                dateUtil.setDate(31 + (nd - clad));
            } else if ( nm === 0) {
                date.setYear(ny - 1)
                dateUtil.setMonth(11);
                dateUtil.setDate(31 + (nd - clad));
            }
             else {
                dateUtil.setDate(nd - clad);
            }
        } else {
            dateUtil.setDate(nd - clad);
        }


        const myDate = new Date(dateUtil);
        const dayOfMonth = myDate.getDate();
        const month = myDate.getMonth();
        const year = myDate.getFullYear();

        function pad(n) {
            return n < 10 ? "0" + n : n;
        }

        const ddmmyyyy = year + "-" + pad(month + 1) + "-" + pad(dayOfMonth);

        return ddmmyyyy;
    };


    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [ddmmyyyy, setDDMMYYYY] = useState("2023-04-01");



    useEffect(() => {
        const date = dateFormatter(new Date(), 0);

        setDDMMYYYY(date);

        const fetcher = async () => {
            try {
                const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=enHpDWxtD5yefBSZ24PQey3jlAkE24zKrHDl6Eq4&date=${date}`);
                const data = await response.json();
                
                if ( data.hdurl ) {
                    setApodDisplay(data);
                } else if ( data.msg ) {
                    console.error('Error fetching data:', data);
                    const utilObj = {...Error, ...data};

                    setApodDisplay(utilObj);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                const utilObj = {...Error, ...error};

                setApodDisplay(utilObj);
            }
        };
        fetcher();

        const localApodData = JSON.parse(localStorage.getItem("APOD_Data"));
        if (localApodData) {
            setLSData(localApodData);
        } else {
            setLSData([]);
        }

    }, []);

    useEffect(() => {

        const fetcher = async () => {
            setApodDisplay(Loading);
            try {
                const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=enHpDWxtD5yefBSZ24PQey3jlAkE24zKrHDl6Eq4&date=${ddmmyyyy}`);
                const data = await response.json();
                
                if ( data.hdurl || data.url ) {
                    setApodDisplay(data);

                    let util = [data, ...LSData];
                    let uniqueArr = util.filter( (obj, index, self) => self.findIndex((t) => t.date === obj.date) === index );

                    setLSData(uniqueArr);

                    let stringify = JSON.stringify(uniqueArr);
                    localStorage.setItem("APOD_Data", stringify);
                } else if ( data.msg ) {
                    console.error('Error fetching data:', data);
                    const utilObj = {...Error, ...data};

                    setApodDisplay(utilObj);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                const utilObj = {...Error, ...error};

                setApodDisplay(utilObj);
            }
        };
        fetcher();
    }, [ddmmyyyy]);

    const inputHandler = (e, vlad, clad, blad) => {
        if (e.target.value.charAt(0) > blad) {
            return;
        } else if (e.target.value.length >= vlad) {
            return;
        } else {
            clad(e.target.value);
        }
    }

    const handledateSubmit = (e) => {
        e.preventDefault();

        if ( day !== "" && month !== "" && year !== "") {
            setDDMMYYYY(dateFormatter(`${year}-${month}-${day}`, 0));
        };
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
            y: "100%",
            rotate: 20,
            opacity: 0.3
        },
        finale: {
            y: 0,
            opacity: 1,
            rotate: 0,
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

    const rotateX = {
        init: {
            rotateX: "-60%",
            opacity: 0
        },
        finale: {
            rotateX: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 200
            }
        } 
    }

    const fadeIn = {
        init: {
            opacity: 0.3
        },
        finale: {
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    }

    const scaleX = {
        init: {
            scaleY: 0.01,
            opacity: 0.4
        }, 
        finale: {
            scaleY: 1,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 200,
                when: "beforeChildren",
            }
        }
    }



    return (
        <section className="Sect1-apod" id="apodTop">            
            <div className="apodSection">
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
                        <p>Apod</p>
                    </motion.div>
                </motion.div>

                <motion.div variants={scaleX} tabIndex="1" className="apodDisplayer">
                    <motion.div variants={fadeIn} className="borderLineApod"></motion.div>
                    <div className="panOverlay"></div>
                    <motion.div variants={fadeIn} className="dragger"></motion.div>
                    <motion.div variants={fadeIn} className="dragger2"></motion.div>

                    {apodDisplay?.media_type === "video" && (
                        <motion.iframe
                            className="apodVid"
                            variants={fadeIn}
                            src={apodDisplay?.url}
                        ></motion.iframe>
                    )}

                    {apodDisplay?.media_type === "image" &&  (
                        <motion.div
                            className="apodImg"
                            variants={fadeIn}
                            style={{
                                backgroundImage: `url(${
                                apodDisplay?.hdurl ? apodDisplay?.hdurl : apodDisplay?.url
                                })`,
                            }}
                        ></motion.div>
                    )}

                    {apodDisplay?.media_type === "element" && (
                        <Loader/>
                    )}

                    {apodDisplay?.media_type === "image" && (
                        <div className="apodDetails">
                            <div className="leftDetails">
                                <h2>{apodDisplay?.title}</h2>
                                <p>
                                    Details: <span>{apodDisplay?.explanation ? apodDisplay?.explanation : apodDisplay?.msg}</span>
                                </p>
                                <p>
                                    Date: <span>{apodDisplay?.date}</span>
                                </p>
                                <p>
                                    Copyright: <span>{apodDisplay?.copyright ? apodDisplay?.copyright : "none"}</span>
                                </p>
                            </div>
                            <div
                                className="rightDetails"
                                style={{ backgroundImage: `url(${apodDisplay?.hdurl})` }}
                            ></div>
                        </div>
                    )}
                </motion.div>

                <motion.div variants={parentvar} className="simpleSearcOptions">
                    <motion.span variants={swipeLeft} className="afterHover" onClick={() => {setDDMMYYYY(dateFormatter(new Date(), 2))}}>Two-days ago</motion.span>
                    <motion.span variants={swipeLeft} className="afterHover" onClick={() => {setDDMMYYYY(dateFormatter(new Date(), 1))}}>Yesterday</motion.span>
                    <motion.span variants={swipeLeft} className="afterHover" onClick={() => {setDDMMYYYY(dateFormatter(new Date(), 0))}}>Today</motion.span>
                </motion.div>
                <motion.form  className="dateInputGroup" onSubmit={handledateSubmit}>
                    <motion.div variants={parentvar} className="dayInputUnit monthday">
                        <motion.input
                            type="text" 
                            placeholder="00" 
                            value={day}
                            variants={rotateX}
                            onChange={(e) => {inputHandler(e, 3, setDay, 3)}}
                        />
                        <motion.label variants={rotateX}>dd</motion.label>
                    </motion.div>

                    <motion.i variants={fadeIn} className="icofont-drag3"></motion.i>

                    <motion.div variants={parentvar} className="dayInputUnit monthday">
                        <motion.input 
                            type="text" 
                            placeholder="00" 
                            value={month}
                            variants={rotateX}
                            onChange={(e) => {inputHandler(e, 3, setMonth, 1)}}
                        />
                        <motion.label variants={rotateX}>mm</motion.label>
                    </motion.div>

                    <motion.i variants={fadeIn} className="icofont-drag3"></motion.i>

                    <motion.div variants={parentvar} className="dayInputUnit year">
                        <motion.input 
                            type="text" 
                            placeholder="0000" 
                            value={year}
                            variants={rotateX}
                            onChange={(e) => {inputHandler(e, 5, setYear, 2)}}
                        />
                        <motion.label variants={rotateX}>yyyy</motion.label>
                    </motion.div>

                    <motion.button variants={swipeRight} type="submit" className="apodSearchBtn afterHover" style={{overflowY: "hidden"}}>
                        <motion.p variants={slideUp}>Go</motion.p>
                    </motion.button>

                </motion.form>
            </div>

            <motion.div variants={swipeRight} className="hintcard">
                <div className="first">
                    <span className="coloredtile orange"></span>
                    <p>MIN_DATE: June 16, 1995.</p>
                </div>
                <div className="first">
                    <span className="coloredtile purple"></span>
                    <p>MAX_DATE: Today.</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Sect1;
