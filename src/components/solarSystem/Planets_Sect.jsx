import React from 'react'
import Link from 'next/link';



const Planets_Sect = ({ planetsListData }) => {
    return (
        <section className='PlanetListSect'>
            <h1>{planetsListData.title} In Our Solar System</h1>
            <div className="planetLists">
                {
                    planetsListData.the_data.map((elem) => (
                        <Link href={elem.link} key={elem.id}>
                            {
                                elem?.icon && (
                                    <i className={elem?.icon} style={{color: elem.color}}></i>
                                )
                            }
                            <img src={elem?.image_src} alt={elem?.name} />
                            <div className="planetListDetail">
                                <h3 style={{color: elem.color}}>{elem?.name}</h3>
                                <p>{elem?.note}</p>
                            </div>
                        </Link>

                    ))
                }
            </div>
        </section>
    )
}

export default Planets_Sect
