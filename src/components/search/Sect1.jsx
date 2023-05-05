import Navbar from '../navbar'
import Link from 'next/link';
import { motion } from 'framer-motion';

const Sect1 = () => {

    //Animation Variables
    const ParentVar = {
        init: {
            opacity: 0.9
        },
        finale: {
            opacity: 1,
            transition: {
                duration: 0.1,
                delay: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    }

    const slideUp = {
        init: {
          y: "100%",
          opacity: 0.6
        },
        finale: {
          y: 0,
          opacity: 1,
            transition: {
                type: "spring",
              damping: 30,
              stiffness: 200
            }
        }
    }

    const swipe = {
        init: {
            x: "40%",
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
        <motion.section initial="init" animate="finale" variants={ParentVar} className="sect1-search">
            <Navbar/>
            <div className="theSearch">
                <div style={{overflowY: "hidden"}}><motion.h1 variants={slideUp}>Search</motion.h1></div>
            </div>
            <div className="searchLinks">
                <motion.div variants={swipe} className="searchOptCntn">
                    <Link href={"/search/apod"} className="searchlinkUnit">
                        <h2>A.P.O.D.</h2>
                        <p>Browse through all the past astronomy pictures of the day, just input the day date and get to view that day&apos;s A.P.O.D.</p>
                    </Link>
                </motion.div>
                <motion.div variants={swipe} className="searchOptCntn">
                    <Link href={"/search/image_video_library"} className="searchlinkUnit">
                        <h2>Image/Video Library</h2>
                        <p>Browse through a vast data of images and videos from NASA&apos;s images and videos library. By passing a search query, you gain acces to all corresponding image/video data in the NASA image database.</p>
                    </Link>
                </motion.div>
                <motion.div variants={swipe} className="searchOptCntn">
                    <Link href={"/search/planet_query"} className="searchlinkUnit">
                        <h2>Planet Query</h2>
                        <p>Get little details about any planet you search for, search can also be made with provided filter options.</p>
                    </Link>
                </motion.div>
                <motion.div variants={swipe} className="searchOptCntn">
                    <Link href={"/search/star_quest"} className="searchlinkUnit">
                        <h2>Stars Quest</h2>
                        <p>Similar to our &quot;Planet Query&quot; search option but only gets you data about stars and their constellations.</p>
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Sect1
