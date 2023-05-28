import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const VisualSummary = ({ data }) => {

  //Animation Variables
  const parentvar = {
    init: {
      x: "20%",
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
      x: "-50%",
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
    <motion.section initial="init" animate="finale" exit="exit"  variants={parentvar} className='visualSummarySect'>
      <h1>{data?.headTitle}</h1>
      <p>{data?.headText}</p>

      <div className="visualDisplayCntn">
        {
          data?.contents.map((elem, idx) => (
            <div className="visualDisplayUnit" key={idx * Math.random()} title={`${elem.name}, moon of ${elem.parentPlanet}`}>
              <div className="visualDisplay">
                <img src={elem.imageSrc.endsWith(".png") ? elem.imageSrc : `${elem.imageSrc}.jpg`} alt={`${elem.name}, moon of ${elem.parentPlanet}`} />
                <h1>{elem.name}</h1>
                <p>(moon of {elem.parentPlanet === "Ida" || elem.parentPlanet === "Didymos" ? <span>{elem.parentPlanet}</span> : (<Link href={`/planets/${elem.parentPlanet.toLowerCase()}`}>{elem.parentPlanet}</Link>)})</p>
              </div>
            </div>
          ))
        }
      </div>
      
    </motion.section>
  )
}

export default VisualSummary
