import React, { useState, useEffect } from 'react';
import MaskedInput from 'react-text-mask'

function Holidays({ setDate }) {
  const [inputValue, setInputValue] = useState(null)

  const maskInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    setDate(inputValue)
  }
  return (
    <div className='m-5'>
      <div>
         <form onSubmit={handleSubmit}>
          <MaskedInput
              className='border border-black'
              mask={[/[1-2]/, /\d/, /\d/, /\d/]}
              value={inputValue}  
              onChange={maskInputChange}
            />
            <button className='border border-blue-500 text-blue-600 px-2 py-1'>Search</button>
         </form>
      </div>
      <div>
        <div>
          <p className='font-bold text-2xl'>Selected year: {inputValue}</p>
          {/* <p className='font-bold text-2xl'>Selected country: {country1.country_name}</p> */}
        </div>
        
        {/* {holidays && holidays.length > 0 && (
        <>
          {holidays.map((holiday) => (
            <li className="border-2" key={holiday.id}>
              <h3 className="text-xl font-bold">{holiday.name}</h3>
              <p>{holiday.description}</p>
              <p>Date: {holiday.date.iso}</p>
            </li>
          ))}
        </>
        )} */}


      </div>
    </div>
  );
}

export default Holidays;
