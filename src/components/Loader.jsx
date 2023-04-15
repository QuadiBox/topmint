import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
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

  return (
    <motion.div variants={fadeIn} className='loader'>
        <div className="loadBox">
            <i className="icofont-spinner-alt-2"></i>
        </div>
    </motion.div>
  )
}

export default Loader
