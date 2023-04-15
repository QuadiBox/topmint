import React from 'react'
import Navbar from '../navbar'

const Sect1 = ({ data }) => {


  return (
    <section className='solarSystem-Sect1'>
        <div className="heroSect-1">
          <div className="details">
            <div>
              <h1>{data?.baseText}</h1>
            </div>
            <p>{data?.subText}</p>
          </div>

          <div className="valueByNumber">
            {
              data.subdata.map((elem, idx) => (
                <div className="unitVBN" key={elem?.key}>
                  <p>{elem?.key}</p>
                  <h3>{elem?.value}</h3>
                </div>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default Sect1
