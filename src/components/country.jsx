import React from 'react';
import WorldMap from "react-svg-worldmap";
import { data } from '../data'

function Country({ setCountryCode }) {
    const handleCountryClick = (event) => {
      setCountryCode(event.countryCode)
    }
    
  return ( 
    <div className="flex flex-col m-5">
      <WorldMap
        onClickFunction={handleCountryClick}
        color="red"
        title="Top 10 Populous Countries"
        value-suffix="people"
        size="lg"
        data={data}
      />
      
    </div>
  )
}

export default Country
