import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = ({ bg }) => {
    const [showPageLinks, setShowPageLinks] = useState(true);



  return (
        <motion.footer className='footerHome' style={{backgroundColor: `${bg}`}}>
            <motion.div layout transition={{ duration: 0.4, ease: "easeInOut" }} className="subfooter">
                {showPageLinks && (
                    <motion.div layout className="footerLinkOptions">
                        <div className="linkCouple">
                            <div className="linkUnit">
                                <div className='linkHeader solarsystem'><Link href={"/solarsystem"}>Solar System</Link></div>
                                <ul className="linkList">
                                    <li>
                                        <Link className='unitLink' href={"/solarsystem/sun"}>
                                            <span className="coloredtile lightred"></span>
                                            <p>Sun</p>
                                        </Link>
                                    </li>
                                    <li><Link className='unitLink' href={"/solarsystem/0ort_cloud"}><span className="coloredtile lightbrown"></span><p>Oort Cloud</p></Link></li>
                                    <li><Link className='unitLink' href={"/solarsystem/kuiper_belt"}><span className="coloredtile darkblue"></span><p>Kuiper Belt</p></Link></li>
                                    <li><Link className='unitLink' href={"/solarsystem/eclipses"}><span className="coloredtile brown2"></span><p>Eclipses</p></Link></li>
                                    <li><Link className='unitLink' href={"/solarsystem/beyond..."}><span className="coloredtile pitchblack"></span><p>Beyond...</p></Link></li>
                                </ul>
                            </div>

                            <div className="linkUnit">
                                <div className='linkHeader planets'><Link href={"/Planets"}>Planets</Link></div>
                                <ul className="linkList">
                                    <li><Link className='unitLink' href={"/Planets/Mercury"}><span className="coloredtile grey2"></span><p>Mercury</p></Link></li>
                                    <li><Link className='unitLink' href={"/Planets/Venus"}><span className="coloredtile brown3"></span><p>Venus</p></Link></li>
                                    <li><Link className='unitLink' href={"/Planets/Earth"}><span className="coloredtile blue2"></span><p>Earth</p></Link></li>
                                    <li><Link className='unitLink' href={"/Planets/Mars"}><span className="coloredtile brown1"></span><p>Mars</p></Link></li>
                                    <li><Link className='unitLink' href={"/Planets/Jupiter"}><span className="coloredtile brown4"></span><p>Jupiter</p></Link></li>
                                    <li><Link className='unitLink' href={"/Planets/Saturn"}><span className="coloredtile brown3"></span><p>Saturn</p></Link></li>
                                    <li><Link className='unitLink' href={"/Planets/Uranus"}><span className="coloredtile blue1"></span><p>Uranus</p></Link></li>
                                    <li><Link className='unitLink' href={"/Planets/Neptune"}><span className="coloredtile blue2"></span><p>Neptune</p></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="linkCouple">
                            <div className="linkUnit">
                                <div className='linkHeader dwarfplanets'><Link href={"/dwarf_planets"}>Dwarf Planets</Link></div>
                                <ul className="linkList">
                                    <li><Link className='unitLink' href={"/dwarf_planets/pluto"}><span className="coloredtile brown2"></span><p>Pluto</p></Link></li>
                                    <li><Link className='unitLink' href={"/dwarf_planets/ceres"}><span className="coloredtile grey2"></span><p>Ceres</p></Link></li>
                                    <li><Link className='unitLink' href={"/dwarf_planets/makemake"}><span className="coloredtile brown1"></span><p>Makemake</p></Link></li>
                                    <li><Link className='unitLink' href={"/dwarf_planets/haumea"}><span className="coloredtile grey"></span><p>Haumea</p></Link></li>
                                    <li><Link className='unitLink' href={"/dwarf_planets/eris"}><span className="coloredtile grey3"></span><p>Eris</p></Link></li>
                                </ul>
                            </div>
                            <div className="linkUnit">
                                <div className='linkHeader moons'><Link href={"/moons"}>Moons</Link></div>
                                <ul className="linkList">
                                    <li><Link className='unitLink' href={"/moons/earth"}><span className="coloredtile blue2"></span><p>Earth(1)</p></Link></li>
                                    <li><Link className='unitLink' href={"/moons/mars"}><span className="coloredtile brown1"></span><p>Mars(2)</p></Link></li>
                                    <li><Link className='unitLink' href={"/moons/jupiter"}><span className="coloredtile brown4"></span><p>Jupiter(80)</p></Link></li>
                                    <li><Link className='unitLink' href={"/moons/saturn"}><span className="coloredtile brown3"></span><p>Saturn(83)</p></Link></li>
                                    <li><Link className='unitLink' href={"/moons/uranus"}><span className="coloredtile blue1"></span><p>Uranus(27)</p></Link></li>
                                    <li><Link className='unitLink' href={"/moons/neptune"}><span className="coloredtile blue2"></span><p>Neptune(14)</p></Link></li>
                                    <li><Link className='unitLink' href={"/moons/pluto"}><span className="coloredtile brown2"></span><p>Pluto(5)</p></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="linkCouple">
                            <div className="linkUnit">
                                <div className='linkHeader asteroids'><Link href={"/asteroids-comets-meteors"}>Asteroids, Comets and Meteors</Link></div>
                                <ul className="linkList">
                                    <li><Link className='unitLink' href={"/asteroids_comets_meteors/asteroids"}><span className="coloredtile grey"></span><p>Asteroids</p></Link></li>
                                    <li><Link className='unitLink' href={"/asteroids_comets_meteors/comets"}><span className="coloredtile grey3"></span><p>Comets</p></Link></li>
                                    <li><Link className='unitLink' href={"/asteroids_comets_meteors/meteors"}><span className="coloredtile brown4"></span><p>Meteors & meteorites</p></Link></li>
                                </ul>
                            </div>
                            <div className="linkUnit">
                                <div className='linkHeader spacemissions'><Link href={"/space_missions"}>Space Missions</Link></div>
                                <ul className="linkList">
                                    <li><Link className='unitLink' href={"/space_missions/voyager_1"}><span className="coloredtile yellow"></span><p>Voyager 1</p></Link></li>
                                    <li><Link className='unitLink' href={"/space_missions/voyager_2"}><span className="coloredtile brown3"></span><p>Voyager 2</p></Link></li>
                                    <li><Link className='unitLink' href={"/space_missions/vassini"}><span className="coloredtile yellow"></span><p>Cassini</p></Link></li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )}
                <motion.div layout className="footerDetails">
                    <div className="footerDivider" style={{transform: `scaleX(${showPageLinks? "0.5" : "0.85"})`}}></div>
                    <div className="footerheightToggler" onClick={() => {setShowPageLinks(prev => !prev)}}><i className="icofont-stylish-down" style={{transform: `rotateZ(${showPageLinks ? "180deg" : "0deg"})`}}></i></div>
                    <div className="pageLinks">
                        <Link className='unitLink' href={"/help"}><span className="coloredtile purple"></span><p>Help</p></Link>
                        <Link className='unitLink' href={"/about"}><span className="coloredtile brown3"></span><p>About</p></Link>
                        <p><i className="icofont-email"></i> <span>quadvox0@gmail.com</span></p>
                        <a className="twitter" href="https://twitter.com/Quadvox" target="_blank"><i className="icofont-twitter"></i></a>
                        <a className="twitter" href='https://github.com/QuadiBox' target="_blank"><i className="icofont-github"></i></a>
                    </div>
                    <p>©2023 QuadVerse. All Rights Reserved.</p>
                </motion.div>
            </motion.div>
        </motion.footer>
    )
}

export default Footer
