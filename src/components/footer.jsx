import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
    const [showPageLinks, setShowPageLinks] = useState(true);



  return (
        <motion.footer className='footerHome'>
            <motion.div layout transition={{ duration: 0.4, ease: "easeInOut" }} className="subfooter">
                {showPageLinks && (
                    <motion.div layout className="footerLinkOptions">
                        <div className="linkCouple">
                            <div className="linkUnit">
                                <div className='linkHeader solarsystem'><Link href={"/Solarsystem"}>Solar System</Link></div>
                                <ul className="linkList">
                                    <li>
                                        <Link className='unitLink' href={"/Solarsystem/Sun"}>
                                            <span className="coloredtile lightred"></span>
                                            <p>Sun</p>
                                        </Link>
                                    </li>
                                    <li><Link className='unitLink' href={"/Solarsystem/Oortcloud"}><span className="coloredtile lightbrown"></span><p>Oort Cloud</p></Link></li>
                                    <li><Link className='unitLink' href={"/Solarsystem/Sun"}><span className="coloredtile darkblue"></span><p>Kuiper Belt</p></Link></li>
                                    <li><Link className='unitLink' href={"/Solarsystem/Eclipses"}><span className="coloredtile brown2"></span><p>Eclipses</p></Link></li>
                                    <li><Link className='unitLink' href={"/Solarsystem/Beyond..."}><span className="coloredtile pitchblack"></span><p>Beyond...</p></Link></li>
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
                                <div className='linkHeader dwarfplanets'><Link href={"/Dwarfplanets"}>Dwarf Planets</Link></div>
                                <ul className="linkList">
                                    <li><Link className='unitLink' href={"/Dwarfplanets/Pluto"}><span className="coloredtile brown2"></span><p>Pluto</p></Link></li>
                                    <li><Link className='unitLink' href={"/Dwarfplanets/Ceres"}><span className="coloredtile grey2"></span><p>Ceres</p></Link></li>
                                    <li><Link className='unitLink' href={"/Dwarfplanets/Makemake"}><span className="coloredtile brown1"></span><p>Makemake</p></Link></li>
                                    <li><Link className='unitLink' href={"/Dwarfplanets/Haumea"}><span className="coloredtile grey"></span><p>Haumea</p></Link></li>
                                    <li><Link className='unitLink' href={"/Dwarfplanets/Eris"}><span className="coloredtile grey3"></span><p>Eris</p></Link></li>
                                </ul>
                            </div>
                            <div className="linkUnit">
                                <div className='linkHeader moons'><Link href={"/Moons"}>Moons</Link></div>
                                <ul className="linkList">
                                    <li><Link className='unitLink' href={"/Moons/Earth"}><span className="coloredtile blue2"></span><p>Earth(1)</p></Link></li>
                                    <li><Link className='unitLink' href={"/Moons/Mars"}><span className="coloredtile brown1"></span><p>Mars(2)</p></Link></li>
                                    <li><Link className='unitLink' href={"/Moons/Jupiter"}><span className="coloredtile brown4"></span><p>Jupiter(80)</p></Link></li>
                                    <li><Link className='unitLink' href={"/Moons/Saturn"}><span className="coloredtile brown3"></span><p>Saturn(83)</p></Link></li>
                                    <li><Link className='unitLink' href={"/Moons/Uranus"}><span className="coloredtile blue1"></span><p>Uranus(27)</p></Link></li>
                                    <li><Link className='unitLink' href={"/Moons/Neptune"}><span className="coloredtile blue2"></span><p>Neptune(14)</p></Link></li>
                                    <li><Link className='unitLink' href={"/Moons/Pluto"}><span className="coloredtile brown2"></span><p>Pluto(5)</p></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="linkCouple">
                            <div className="linkUnit">
                                <div className='linkHeader asteroids'><Link href={"/Asteroids-comets-meteors"}>Asteroids, Comets and Meteors</Link></div>
                                <ul className="linkList">
                                    <li><Link className='unitLink' href={"/Asteroids-comets-meteors/Asteroids"}><span className="coloredtile grey"></span><p>Asteroids</p></Link></li>
                                    <li><Link className='unitLink' href={"/Asteroids-comets-meteors/Comets"}><span className="coloredtile grey3"></span><p>Comets</p></Link></li>
                                    <li><Link className='unitLink' href={"/Asteroids-comets-meteors/Meteors"}><span className="coloredtile brown4"></span><p>Meteors & meteorites</p></Link></li>
                                </ul>
                            </div>
                            <div className="linkUnit">
                                <div className='linkHeader spacemissions'><Link href={"/Space_missions"}>Space Missions</Link></div>
                                <ul className="linkList">
                                    <li><Link className='unitLink' href={"/Space_missions/Voyager_1"}><span className="coloredtile yellow"></span><p>Voyager 1</p></Link></li>
                                    <li><Link className='unitLink' href={"/Space_missions/Voyager_2"}><span className="coloredtile brown3"></span><p>Voyager 2</p></Link></li>
                                    <li><Link className='unitLink' href={"/Space_missions/Cassini"}><span className="coloredtile yellow"></span><p>Cassini</p></Link></li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )}
                <motion.div layout className="footerDetails">
                    <div className="footerDivider" style={{transform: `scaleX(${showPageLinks? "0.5" : "0.85"})`}}></div>
                    <div className="footerheightToggler" onClick={() => {setShowPageLinks(prev => !prev)}}><i className="icofont-stylish-down" style={{transform: `rotateZ(${showPageLinks ? "180deg" : "0deg"})`}}></i></div>
                    <div className="pageLinks">
                        <Link className='unitLink' href={"/Help"}><span className="coloredtile purple"></span><p>Help</p></Link>
                        <Link className='unitLink' href={"/Help"}><span className="coloredtile brown3"></span><p>About</p></Link>
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
