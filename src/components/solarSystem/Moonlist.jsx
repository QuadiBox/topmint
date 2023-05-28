import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Moonlist = ({ data }) => {
  const [dynamicData, setDynamic] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [maxLoad, setMaxLoad] = useState(24);
  const filterData = dynamicData.filter((elem) => (elem?.name.toLowerCase().includes(searchQuery.toLowerCase())));


  return (
    <section className='moonList'>
      <div className="theTopSection">
        <div className="moonListSearchbox">
          <input type="text" value={searchQuery} className="inpt" placeholder="Enter Moons name" onChange={(e) => {setSearchQuery(e.target.value)}}/>
          <button type="button" className="btn"><i className="icofont-search-2"></i></button>
        </div>
      </div>

      <div className="visualDisplayCntn">
        {
          filterData.map((elem, idx) => { 
            if (idx < maxLoad) {
              return (
                <Link href={elem.href} className="visualDisplayUnit" key={idx * Math.random()} title={`${elem.name}`}>
                  <div className="visualDisplay">
                    {
                      elem.imageSrc ? (
                        <img src={elem.imageSrc} alt={`${elem.name}`} />
                      ) :
                      <i className="icofont-image"></i>
                    }
                    <h1>{elem.name}</h1>
                  </div>
                </Link>
              )
            } else {
              return
            }
          })
        }
      </div>

      {
        filterData.length > maxLoad && (
          <button type='button' className="loadmoreApod" onClick={() => {setMaxLoad(prev => prev + 20)}}>Load More</button>
        )
      }

    </section>
  )
}

export default Moonlist
