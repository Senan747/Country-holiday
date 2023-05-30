import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Holidays({ country1 }) {
  const [holidays, setHolidays] = useState([]);
  const [iso, setIso] = useState('');
  const [date, setDate] = useState('')
  let params = useParams();

  const fetchHolidays = async () => {
    const response = await fetch(`https://calendarific.com/api/v2/holidays?api_key=88c2e0307392e372379f2234813cc3d62abb2876&country=${country1['iso-3166']}&year=${selectedYear}`);
    const data = await response.json();
    setHolidays(data.response.holidays);
    console.log(data.response.holidays);

  };
  useEffect(() => {
    fetchHolidays();
  }, [country1]);

  console.log(country1);

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedYear, setSelectedYear] = useState('')

  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    const [year, month, day] = dateValue.split('-'); // Extract year, month, and day parts
    setSelectedMonth(month);
    setSelectedDay(day);
    setSelectedYear(year);
  };
  return (
    <div className='m-5'>
      <div>
        <input type="search" />
      </div>
      <div>
        <div>
          <input 
            type="date" 
            onChange={handleDateChange} 
            className="w-96 p-2 border-8 border-spacing-1"
          />
          <p className='font-bold text-2xl'>Selected year: {selectedYear}</p>
          <p className='font-bold text-2xl'>Selected country: {country1.country_name}</p>
        </div>
        
        {holidays && holidays.length > 0 && (
        <>
          {holidays.map((holiday) => (
            <li className="border-2" key={holiday.id}>
              <h3 className="text-xl font-bold">{holiday.name}</h3>
              <p>{holiday.description}</p>
              <p>Date: {holiday.date.iso}</p>
            </li>
          ))}
        </>
        )}


      </div>
    </div>
  );
}

export default Holidays;
