import { useState, useEffect } from 'react'

import Holidays from './components/Holidays';
import Country from './components/Country'


function App() {
  const [countryCode, setCountryCode] = useState(null)
  const [date, setDate] = useState(null)
  const [holidays, setHolidays] = useState(null)
  useEffect(() => {
    if(countryCode != null && date != null){
      fetch(`https://calendarific.com/api/v2/holidays?api_key=3a32d298644ff1b7206835885a3216d29a2260e6&country=${countryCode}&year=${date}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.response.holidays);
        setHolidays(data.response.holidays)
      })
      // console.log(date, countryCode.toUpperCase());  
    }
    }, [date, countryCode])
  return (
    <div className="h-screen bg-cover backdrop-opacity-5">
      <h1 className='text-center'>First select the year, then select the country</h1>
      <div className='flex flex-wrap-reverse justify-center bg-white'> 
        <Country setCountryCode={setCountryCode} countryCode={countryCode} />
        <Holidays  setDate={setDate}/>
      </div>
      {holidays && holidays.length > 0 && (
        <>
          {holidays.map((holiday) => (
            <li className="border-2" key={holiday.id}>
              <h3 className="text-xl font-bold">{holiday.name}</h3>
              <p>{holiday.description}</p>
              {/* <p>Date: {holiday.date.iso}</p> */}
              //yeah bitch come on baby
            </li>
          ))}
        </>
        )}
    </div>
  )
}
export default App
