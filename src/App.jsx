import { useState, useEffect } from 'react'
import './App.css'

import Holidays from './components/Holidays';
import Country from './components/Country'


function App() {
  const [country1, setCountry] = useState('')
  return (
    <div className="lg:bg-[url('src/assets/background.jpg')] h-screen bg-cover backdrop-opacity-5">
      <h1 className='text-center'>First select the year, then select the country</h1>
      <div className='flex flex-wrap-reverse justify-center bg-white'> 
        <Country Query={setCountry} />
        <Holidays  country1={country1} />
      </div>
    </div>
  )
}
export default App
