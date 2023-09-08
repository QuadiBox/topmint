import { useEffect, useState } from 'react';
import { termsData } from '../../utilities/glossaryData';
import { AnimatePresence, delay, motion } from 'framer-motion';



const GlossSect1 = ({ searchFocusMonitor, setSearchFocusMonitor }) => {
  const [rendererMonitor, setRendererMonitor] = useState("A");
  const [contentTypeMonitor, setContentTypeMonitor] = useState("Default");
  const [searchQuery, setSearchQuery] = useState("");
  const [mainSearchRes, setMainSearchRes] = useState([]);
  const [subSearchRes, setSubSearchRes] = useState([]);
  const [ subsearchCount, setsubsearchCount] = useState(10);
  const [sidebarMonitor, setSideNavMonitor] = useState(false);


  const sortedData = termsData.sort((a, b) => a.term.localeCompare(b.term)).filter(
    (obj, index, self) =>
      self.findIndex((t) => t.term === obj.term) === index
  );
  const filteredData = sortedData.filter((elem) => elem.identifier === rendererMonitor);
  const filterSearchOption = sortedData.filter((elem) => (elem.term.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery.toLowerCase().includes(elem.term.toLowerCase())));
  const filteredRelatedSearchRes = subSearchRes.filter((elem, idx) => idx <= subsearchCount);
  

  const id_Styler = {
    A: "odd",
    B: "even",
    C: "odd",
    D: "even",
    E: "odd",
    F: "even",
    G: "odd",
    H: "even",
    I: "odd",
    J: "even",
    K: "odd",
    L: "even",
    M: "odd",
    N: "even",
    O: "odd",
    P: "even",
    Q: "odd",
    R: "even",
    S: "odd",
    T: "even",
    U: "odd",
    V: "even",
    W: "odd",
    X: "even",
    Y: "odd",
    Z: "even"
  }

  const handleTextExpansion = (e) => {
    const the_target = e.target
    const parent = the_target.parentElement;


    if (parent.style.display === "-webkit-box") {
      parent.style.display = "block";
      the_target.children[0].classList.remove("icofont-dotted-down");
      the_target.children[0].classList.add("icofont-dotted-up");
      the_target.setAttribute("title", "Collapse");
    } else {
      parent.style.display = "-webkit-box";
      the_target.children[0].classList.remove("icofont-dotted-up");
      the_target.children[0].classList.add("icofont-dotted-down");
      the_target.setAttribute("title", "Expand");
    }
  }

  const handleRendererSet = (vlad) => {
    setContentTypeMonitor("Default");
    setSearchQuery("");
    setRendererMonitor(vlad);

    const child = document.querySelector(".headercntn");
    const wordListItems = document.querySelectorAll('.theList_gloss li');
    const firstWordWithLetter = [...wordListItems].find(item => item.innerText.startsWith(vlad));

    firstWordWithLetter?.scrollIntoView({ behavior: 'auto', block: "center" });
    if (child) {
      firstWordWithLetter?.querySelector("button").focus();
      child?.scrollIntoView({ behavior: 'auto', block: "center" });
    }
    
  }

  const handleWordScroll = (vlad, clad) => {
    setRendererMonitor(clad);
    setContentTypeMonitor("Default");
    setSearchQuery("");

    const wordContainer = document.querySelector(`.centerGlossaryTab`);
    if (wordContainer) {
      const filterer = sortedData.filter((elem) => elem.identifier === clad);
      const finder = filterer.findIndex((elem) => elem.term === vlad);

      const wordSelected = wordContainer?.children[finder + 2];
      wordSelected?.scrollIntoView({ behavior: 'auto', block: "center" })
      wordSelected?.querySelector("#utilButton").focus();
    }

  }

  const handleQuerySetter = (vlad) => {
    setSearchQuery(vlad);
    const util_filter = sortedData.filter((elem) => (elem.term.toLowerCase().includes(vlad.toLowerCase()) || vlad.toLowerCase().includes(elem.term.toLowerCase())));
    setMainSearchRes(util_filter);
    setsubsearchCount(10);
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

    setContentTypeMonitor("SearchMode");
  }

  const handleComplexSearchOperation = (e) => {
    e?.preventDefault();
    const util_filter = sortedData.filter((elem) => (elem.term.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery.toLowerCase().includes(elem.term.toLowerCase())));
    setMainSearchRes(util_filter);
    setsubsearchCount(10);
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

    setContentTypeMonitor("SearchMode");

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

  const springslideUp = {
    init: {
      y: "50%",
      opacity: 0
    },
    finale: {
      y: "0%",
      opacity: 1,
      transition: {
          type: "spring",
          damping: 20,
          stiffness: 300,
          delay: 0.2
      }
    }
  }

  const openBtnSwipeLeft = {
    init: {
      x: "30%",
      opacity: 0
    },
    finale: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
        delay:0.1
      }
    }
  }

  const swipeLeftUp = {
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

  const swipeLeftExit = {
      init: {
        x: "2%",
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
        x: "-1%",
        opacity: 0,
        transition: {
          type: "spring",
          damping: 30,
          stiffness: 200,
        }
      }
  }
  const sideAlphaLeftExit = {
    init: {
      x: "50%",
      opacity: 0
    },
    finale: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
        delay: 0.4
      }
    },
  }

  const textSwipeUp = {
    init: {
      y: "100%",
      opacity: 0
    }, 
    finale: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
      }
    }
  }
  const textSwipedown = {
    init: {
      y: "-100%",
      opacity: 0
    }, 
    finale: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
      }
    }
  }
  const textFadeIn = {
    init: {
      y: 4,
      opacity: 0
    }, 
    finale: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
        delay:0.3
      }
    }
  }


  return (
    <section className={`GlossSect1 ${sidebarMonitor ? "" : "griChange"}`}>
      <aside className='wordList_gloss' style={{border: `${sidebarMonitor ? "0.5px dashed #a706f165" : "none"}`, backgroundColor:  `${sidebarMonitor ? "#2418228f" : "transparent"}`, backdropFilter: `${sidebarMonitor ? "blur(18px)" : "blur(0px)"}`}}>
        
        {
          !sidebarMonitor ? (
            <button className="hamburger_Btn" type='button' title='Open Side-Tab' onClick={() => {setSideNavMonitor(prev => !prev)}}>
              <motion.div variants={springslideUp} initial="init" animate="finale"><i class="icofont-justify-left" ></i></motion.div>
            </button>
          ) : (
            <>
              <motion.button variants={openBtnSwipeLeft} initial="init" animate="finale" className="mininize-Btn" type='button' title='Close Side-Tab' onClick={() => {setSideNavMonitor(prev => !prev)}} ><i className="icofont-double-left"></i></motion.button>
              <ul className="theList_gloss">
                {sortedData.map((elem, idx) => (
                  <li key={`${elem.term}_${idx}_picker`} onClick={() => {handleWordScroll(elem.term, elem.identifier)}}><button><i className="icofont-bubble-right"></i></button> <span>{elem.term}</span></li>
                ))}
              </ul>
            </>
          )
        }
      </aside>
      <div className="centerGlossaryTab">
        <motion.div variants={parentvar} initial="init" animate="finale" className='glossSearchBox'>
          <motion.form className="imgsearchInputCntn" onSubmit={handleComplexSearchOperation}>
            <motion.input className='glossSearchInput' variants={slideUp} value={searchQuery} type="text" name="imgLibSearch" onChange={(e) => {setSearchQuery(e.target.value)}}/>
            <motion.button className='glossSearchButton' variants={swipeLeftUp} type="submit">Go</motion.button>
          </motion.form>
          
          <AnimatePresence>
            {
              filterSearchOption.length > 0 && searchFocusMonitor && searchQuery.length > 0 && (
                <div style={{overflowX: "hidden"}}>
                  <motion.ul className='glossSearchOptionList' variants={swipeLeftExit} initial="init" animate="finale" exit="exit">
                    {
                      filterSearchOption.map((elem) => (
                        <li className='glossSearchOptionUnit' key={`${elem.term}_#srchOtp`} onClick={() => (handleQuerySetter(elem.term))}>{elem.term}</li>
                      ))
                    }
                  </motion.ul>
                </div>
              )
            }
          </AnimatePresence>
        </motion.div>
        {
          contentTypeMonitor === "Default" && (
            <>
              <div id={`${rendererMonitor}`} className={`headercntn ${id_Styler[rendererMonitor] === "even"? "left" : ""}`}>
                <h3>{rendererMonitor}</h3>
                <span></span>
              </div>
              {
                filteredData.map((elem) => (
                  <div key={`${elem.term}_#render_unit`} className={`unitGlossWord ${id_Styler[elem.identifier] === "even"? "left" : ""} ${elem.term}`}>
                    <h4 >{elem.term}</h4>
                    <div className="meaningSect">
                      <h5><button id='utilButton' className='utilButton' type='button'>MEANING</button></h5>
                      <p>{elem.meaning}</p>
                    </div>
                    {
                      elem?.relevance && (
                        <div className="meaningSect rel">
                          <h6>RELEVANCE(s)</h6>
                          <p style={{display: `${elem.relevance.length > 250 ? "-webkit-box" : "block"}`}}>{elem.relevance} {elem.relevance.length > 250 && (<button title='expand' type="button" onClick={handleTextExpansion}><i className="icofont-dotted-down"></i></button>)}</p>
                        </div>
                      )
                    }
                  </div>
                ))
              }
            </>
          )
        }
        {
          contentTypeMonitor === "SearchMode" && (
            <>
              <div className="mainSearchArea">
                <h3>Search Results :</h3>
                {
                  mainSearchRes.length > 0 ? (
                    
                    mainSearchRes?.map((elem) => (
                      <div key={`${elem.term}_#search_unit`} className={`unitGlossWord ${id_Styler[elem.identifier] === "even"? "left" : ""} ${elem.term}`}>
                        <h4 >{elem.term}</h4>
                        <div className="meaningSect">
                          <h5><button className='utilButton' type='button'>MEANING</button></h5>
                          <p>{elem.meaning}</p>
                        </div>
                        {
                          elem?.relevance && (
                            <div className="meaningSect rel">
                              <h6>RELEVANCE(s)</h6>
                              <p style={{display: `${elem.relevance.length > 250 ? "-webkit-box" : "block"}`}}>{elem.relevance} {elem.relevance.length > 250 && (<button title='expand' type="button" onClick={handleTextExpansion}><i className="icofont-dotted-down"></i></button>)}</p>
                            </div>
                          )
                        }
                      </div>
                    ))
                    

                  ) :
                  (
                    <div className="emptyGlossSearchArea">
                      <div className="bgSpacecraftCntn">
                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        <img src="./empty_gloss_spacecraft.svg" alt="a hovering spacestation"/>
                      </div>

                      <motion.div className="emptyGlossTextBox">
                        <div className="borderLineGloss"></div>
                        <div className='nomatchTextCntn'>
                          <motion.p variants={textSwipeUp} initial="init" animate="finale">No</motion.p>
                          <motion.p variants={textSwipedown} initial="init" animate="finale">Match</motion.p>
                        </div>
                        <motion.p variants={textFadeIn} initial="init" animate="finale">Try searching for another term or check the spelling of the searched term for correction.</motion.p>
                      </motion.div>
                    </div>

                  )
                }
              </div>
              {
                subSearchRes.length > 0 && (
                  <div className='mainSearchArea related'>
                    <h3>Related Search Results :</h3>
                    {
                      filteredRelatedSearchRes?.map((elem) => (
                        <div key={`${elem.term}_#search_unit`} className={`unitGlossWord ${id_Styler[elem.identifier] === "even"? "left" : ""} ${elem.term}`}>
                          <h4 >{elem.term}</h4>
                          <div className="meaningSect">
                            <h5><button className='utilButton' type='button'>MEANING</button></h5>
                            <p>{elem.meaning}</p>
                          </div>
                          {
                            elem?.relevance && (
                              <div className="meaningSect rel">
                                <h6>RELEVANCE(s)</h6>
                                <p style={{display: `${elem.relevance.length > 250 ? "-webkit-box" : "block"}`}}>{elem.relevance} {elem.relevance.length > 250 && (<button title='expand' type="button" onClick={handleTextExpansion}><i className="icofont-dotted-down"></i></button>)}</p>
                              </div>
                            )
                          }
                        </div>
                      ))
                    }
                    <div className="relatedSearchResBtnCntn">
                      {
                        subsearchCount < subSearchRes.length && (
                          <button type="button" className='LoadMore' onClick={() => {setsubsearchCount(prev => prev + 12)}}>Load more</button>
                        )
                      }
                      {
                        subsearchCount > 10 && (
                          <button type="button" className='LoadLess' onClick={() => {setsubsearchCount(10)}}>Load less</button>
                        )
                      }
                    </div>
                    <p>
                      Note: <span>All the related search results are gotten from skimming through the keywords related to the terms, their relevance text and meanings to find matching element for the search query.</span>
                    </p>
                  </div>
                )
              }
            </>
          )
        }
        
      </div>
      <motion.div variants={sideAlphaLeftExit} initial="init" animate="finale" className="sideAlphabetTab">
        <button onClick={() => {handleRendererSet("A")}} type='button'>A</button>
        <button onClick={() => {handleRendererSet("B")}} type='button'>B</button>
        <button onClick={() => {handleRendererSet("C")}} type='button'>C</button>
        <button onClick={() => {handleRendererSet("D")}} type='button'>D</button>
        <button onClick={() => {handleRendererSet("E")}} type='button'>E</button>
        <button onClick={() => {handleRendererSet("F")}} type='button'>F</button>
        <button onClick={() => {handleRendererSet("G")}} type='button'>G</button>
        <button onClick={() => {handleRendererSet("H")}} type='button'>H</button>
        <button onClick={() => {handleRendererSet("I")}} type='button'>I</button>
        <button onClick={() => {handleRendererSet("J")}} type='button'>J</button>
        <button onClick={() => {handleRendererSet("K")}} type='button'>K</button>
        <button onClick={() => {handleRendererSet("L")}} type='button'>L</button>
        <button onClick={() => {handleRendererSet("M")}} type='button'>M</button>
        <button onClick={() => {handleRendererSet("N")}} type='button'>N</button>
        <button onClick={() => {handleRendererSet("O")}} type='button'>O</button>
        <button onClick={() => {handleRendererSet("P")}} type='button'>P</button>
        <button onClick={() => {handleRendererSet("Q")}} type='button'>Q</button>
        <button onClick={() => {handleRendererSet("R")}} type='button'>R</button>
        <button onClick={() => {handleRendererSet("S")}} type='button'>S</button>
        <button onClick={() => {handleRendererSet("T")}} type='button'>T</button>
        <button onClick={() => {handleRendererSet("U")}} type='button'>U</button>
        <button onClick={() => {handleRendererSet("V")}} type='button'>V</button>
        <button onClick={() => {handleRendererSet("W")}} type='button'>W</button>
        <button onClick={() => {handleRendererSet("X")}} type='button'>X</button>
        <button onClick={() => {handleRendererSet("Y")}} type='button'>Y</button>
        <button onClick={() => {handleRendererSet("Z")}} type='button'>Z</button>
      </motion.div>
    </section>
  )
}

export default GlossSect1
