import { useState, useEffect } from 'react'
import './App.css'

import Country from './components/Country';
import Holidays from './components/Holidays';


function App() {
  const [country1, setCountry] = useState('')
  return (
    <>

       <Country Query={setCountry} />
       <Holidays country1={country1}/>
    </>
  )
}

export default App
