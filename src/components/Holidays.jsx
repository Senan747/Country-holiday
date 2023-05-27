import React, { useContext, useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'




function Holidays({ country1 }) {
  const [holidays, setHolidays] = useState([])
  const [iso, setIso] = useState('')
  let params = useParams();
  
  

  const fetchHolidays = async () => {
      const response = await fetch(`https://calendarific.com/api/v2/holidays?api_key=88c2e0307392e372379f2234813cc3d62abb2876&country=${iso}&year=2019`);
      const data = await response.json();
      setHolidays(data.response.holidays);
      console.log(data.response.holidays);
    };
  useEffect(() => {
      setIso(country1.iso-3166);
      fetchHolidays();
  }, [params.name])

  

  console.log(country1)
  return (
    <div>
      <div>
        <input type="search" />
      </div>
      <div>
          {country1.total_holidays}
          {country1.iso-3166}
          {country1.country_name}
          {iso && (
            <>
          {holidays.map((holiday) => (
            <li class="border-2 ">
                <h3>{holiday.name}</h3>
                <p>{holiday.description}</p>
            </li>
          ))}
          </>
          )}
      </div>
    </div>
  )
}

export default Holidays