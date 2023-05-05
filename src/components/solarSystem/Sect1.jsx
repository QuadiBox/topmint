import { motion } from "framer-motion";


const Sect1 = ({ data }) => {

  //Animation Variables 
  const parentVar = {
    init: {
      opacity: 0.9
    },
    finale: {
      opacity: 1,
      transition: {
        duration: 0.05,
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  }

  const slideUp = {
    init: {
      opacity: 0,
      y: "100%"
    },
    finale: {
      opacity: 1,
      y: 0,
      transition: {
        damping: 30,
        type: "spring",
        stiffness: 200,
      }
    }
  }

  const fadeIn = {
    init: {
      opacity: 0,
      y: 5
    },
    finale: {
      opacity: 1,
      y: 0,
      transition: {
        damping: 30,
        type: "spring",
        stiffness: 200,
      }
    }
  }


  return (
    <motion.section initial="init" animate="finale" variants={parentVar} className='solarSystem-Sect1' style={{backgroundImage: `linear-gradient( 150deg, var(--bg1-opac09),var(--bg1-opac05), var(--bg1-opac02)), url(${data?.baseImgUrl})`}}>
        <div className="heroSect-1">
          <div className="details">
            <div style={{overflow: "hidden"}}>
              <motion.h1 variants={slideUp}>{data?.baseText}</motion.h1>
            </div>
            <motion.p variants={fadeIn}>{data?.subText}</motion.p>
          </div>

          <div className="valueByNumber">
            {
              data.subdata.map((elem, idx) => (
                <div className="unitVBN" key={elem?.key}>
                  <p>{elem?.key}</p>
                  <div style={{overflow: "hidden"}}>
                    <motion.h3 variants={slideUp}>{elem?.value}</motion.h3>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </motion.section>
  )
}

export default Sect1
