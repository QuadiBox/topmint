import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MiniFooter = () => {
  //Animation Variables
    const parentVar = {
        init: {
            opacity: 0.95,
        },
        finale: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
                duration: 0.05,
            },
        },
    };

    const logoQ = {
        init: {
            y: "-70%",
            opacity: 0,
        },
        finale: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200,
            },
        },
    };
    const logoV = {
        init: {
            y: "100%",
            opacity: 0,
        },
        finale: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200,
            },
        },
    };
    const logoI = {
        init: {
            x: "-70%",
            opacity: 0,
        },
        finale: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200,
            },
        },
    };

    const slideUp = {
        init: {
            y: "100%",
            opacity: 0,
            rotate: 4,
        },
        finale: {
            y: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200,
            },
        },
    };

  return (
    <motion.div initial="init" animate="finale" variants={parentVar} className="nasaIdFooter">
        <motion.div className="logoAbsMain">
            <Link className="theLogo" href={"/"} style={{ overflow: "hidden" }}>
                <motion.div variants={logoQ} className="Q">
                    Quad
                </motion.div>{" "}
                <motion.div variants={logoV} className="V">
                    Verse
                </motion.div>{" "}
                <motion.i variants={logoI} className="icofont-readernaut"></motion.i>
            </Link>
        </motion.div>
        <motion.span variants={slideUp}>
            Made with <i className="icofont-heart-alt"></i> by QuadBox
        </motion.span>

        <motion.p variants={slideUp}>
            mail: <span>oladojaabdquadridamilola@gmail.com</span>
        </motion.p>
    </motion.div>
  );
};

export default MiniFooter;
