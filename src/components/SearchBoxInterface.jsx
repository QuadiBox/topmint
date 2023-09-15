import { useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { termsData } from '../utilities/glossaryData';
import Link from 'next/link';

const SearchBoxInterface = ({ imageLink }) => {
    const [interfaceOpenState, setinterfaceOpenState] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [interfaceStateMonitor, setInterfaceStateMonitor] = useState("Default");
    const [mainSearchRes, setMainSearchRes] = useState([]);
    const [subSearchRes, setSubSearchRes] = useState([]);
    const [searchFocusMonitor, setSearchFocusMonitor] = useState(false);



    const sortedData = termsData.sort((a, b) => a.term.localeCompare(b.term)).filter(
        (obj, index, self) =>
          self.findIndex((t) => t.term === obj.term) === index
    );
    const filterSearchOption = sortedData.filter((elem) => (elem.term.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery.toLowerCase().includes(elem.term.toLowerCase())));

    const handleSearchBarToggles = (e) => {
        if (e.target.className === "interfaceSearhBox" || e.target.className === "interfaceSearchInput") {
          setSearchFocusMonitor(true);
        } else {
          setSearchFocusMonitor(false);
        }
    }

    const handleQuerySetter = (vlad) => {
        setSearchQuery(vlad);
        const util_filter = sortedData.filter((elem) => (elem.term.toLowerCase().includes(vlad.toLowerCase()) || vlad.toLowerCase().includes(elem.term.toLowerCase())));
        setMainSearchRes(util_filter);
        const util_subFilter = sortedData.filter((elem) => {
            let util_arr = elem.keywords.split(", ");
            let checker_filter = util_arr.filter((elem) => (elem.toLowerCase().includes(vlad.toLowerCase()) || vlad.toLowerCase().includes(elem.toLowerCase())));

            if (checker_filter.length > 0) {
            return elem;
            } 
        });

        if (util_subFilter.length < 1) {
            let checker_filter = sortedData.filter((elem) => (elem?.meaning.toLowerCase().includes(vlad.toLowerCase() || elem?.relevance.toLowerCase().includes(vlad.toLowerCase()))));

            let uniqueArr = checker_filter.filter((elem) => (
            util_filter.findIndex((t) => t.term === elem.term) === -1
            ));

            setSubSearchRes(uniqueArr);

        } else {
            let uniqueArr = util_subFilter.filter((elem) => (
            util_filter.findIndex((t) => t.term === elem.term) === -1
            ))
            setSubSearchRes(uniqueArr);
        }

        setInterfaceStateMonitor("SearchMode");
    };

    const handleComplexSearchOperation = (e) => {
        e?.preventDefault();
        const util_filter = sortedData.filter((elem) => (elem.term.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery.toLowerCase().includes(elem.term.toLowerCase())));
        setMainSearchRes(util_filter);
        const util_subFilter = sortedData.filter((elem) => {
          let util_arr = elem.keywords.split(", ");
          let checker_filter = util_arr.filter((elem) => (elem.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery.toLowerCase().includes(elem.toLowerCase())));
    
          if (checker_filter.length > 0) {
            return elem;
          } 
        });
    
        if (util_subFilter.length < 1) {
          let checker_filter = sortedData.filter((elem) => (elem?.meaning.toLowerCase().includes(searchQuery.toLowerCase() || elem?.relevance.toLowerCase().includes(searchQuery.toLowerCase()))));
    
          let uniqueArr = checker_filter.filter((elem) => (
            util_filter.findIndex((t) => t.term === elem.term) === -1
          ));
    
          setSubSearchRes(uniqueArr);
    
        } else {
          let uniqueArr = util_subFilter.filter((elem) => (
            util_filter.findIndex((t) => t.term === elem.term) === -1
          ))
          setSubSearchRes(uniqueArr);
        }
    
        setInterfaceStateMonitor("SearchMode");
    
      }

      //animation variables
    const textFadeIn = {
        init: {
            scale: 0.8,
            opacity: 0.7
        }, 
        finale: {
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.15,
                delay: 0.15
            }
        }
    }

    const popOut = {
        init: {
            opacity: 0,
        },
        finale: {
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.4,
            }
        },
        exit : {
            opacity: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.4,
            }
        }
    }

  return (
    <motion.div variants={popOut} initial="init" animate="finale" exit="exit" style={{backgroundColor: "transparent"}}>
        <div className={`grandinterfaceCntn ${interfaceOpenState ? "expand" : "collapse"}`}>
            <div className='searchBoxInterface' onClick={(e) => {handleSearchBarToggles(e)}}>
                <img src={imageLink ? imageLink : "./astronaut-interface.svg"} alt="astronaut image" />
                <button type="button" className='interfaceCloseBtn' onClick={() => {setinterfaceOpenState(prev => !prev)}}><i className="icofont-close"></i></button>
                <div className="mainInterfaceContent">
                    <h3>Powered By: <span>*</span><Link href={"./glossary"}>Glossary</Link><span>*</span></h3>
                    <div className="interfaceSearchArea">
                        {
                            filterSearchOption.length > 0 && searchQuery.length > 0 && searchFocusMonitor && (
                                <div className="searchSuggestionList">
                                    <ul >
                                        {
                                            filterSearchOption.map((elem) => (
                                                <li key={`${elem.term}_#intfacesrchOtp`} onClick={() => {handleQuerySetter(elem.term)}}>{elem.term}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        <motion.form className="interfaceSearhBox" onSubmit={handleComplexSearchOperation}>
                            <motion.input className='interfaceSearchInput' placeholder='Search anything space-ish Here...😉'  type="text" name="imgLibSearch" value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}}/>
                            <motion.button className='interfaceSearchButton'  type="submit">Go</motion.button>
                        </motion.form>
                    </div>

                    <div className="interfaceSearchReslutCntn">
                        {
                            interfaceStateMonitor === "Default" ? (
                                <p>Type what you wish to know the meaning to in the searchbox above and get the result here. There are 1600+ space related terms available to search through.</p>
                            ) : (
                                <div className="searchResultInterfaceCntn">
                                    {
                                        mainSearchRes.length > 0 ? (
                                            <>
                                                <h4>Here are matching results: </h4>
                                                {
                                                    mainSearchRes.map((elem) => (
                                                        <div  className={`unitsearchword`} key={`${elem.term}_#intfacesubSearch_unit`}>
                                                            <h5>{elem?.term}</h5>
                                                            <div className="meaningSect">
                                                                <h5><button className='utilButton' type='button'>MEANING</button></h5>
                                                                <p>{elem?.meaning}</p>
                                                            </div>
                                                            {
                                                                elem.relevance && (
                                                                    <div className="meaningSect rel">
                                                                        <h6>RELEVANCE(s)</h6>
                                                                        <p>{elem?.relevance}</p>
                                                                    </div>
                                                                )
                                                            }
                                                            
                                                        </div>
                                                    ))
                                                }
                                            </>

                                        ) : (
                                            <>
                                                <h4>There was no match for <span>"{searchQuery}"</span>. {subSearchRes.length > 0 ? "Here are some related results to what you searched for:" : ""}</h4>
                                                {
                                                    subSearchRes.map((elem) => (
                                                        <div  className={`unitsearchword`} key={`${elem.term}_#intfacerender_unit`}>
                                                            <h5>{elem?.term}</h5>
                                                            <div className="meaningSect">
                                                                <h5><button className='utilButton' type='button'>MEANING</button></h5>
                                                                <p>{elem?.meaning}</p>
                                                            </div>
                                                            {
                                                                elem.relevance && (
                                                                    <div className="meaningSect rel">
                                                                        <h6>RELEVANCE(s)</h6>
                                                                        <p>{elem?.relevance}</p>
                                                                    </div>
                                                                )
                                                            }
                                                            
                                                        </div>
                                                    ))
                                                }
                                            </>
                                        )
                                    }
            
                                </div>

                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        {
            !interfaceOpenState && (
                <motion.button variants={textFadeIn} initial="init" animate="finale" type="button" className='interfaceCollapseBtn' onClick={() => {setinterfaceOpenState(prev => !prev)}}><motion.img className='imageInthebtn'  src="/LogoVerse.svg" alt="Quadverse logo" /></motion.button>
            )
        }

    </motion.div>
  )
}

export default SearchBoxInterface
