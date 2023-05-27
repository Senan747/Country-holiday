import React, { useState, useEffect, useContext } from 'react';
import { useParams} from 'react-router-dom';


function Country({ Query }) {
    const [countries, setCountries] = useState([])
    const [input, setInput] = useState('')

    let params = useParams();




    const fetchCountries = async () => {
        const response = await fetch(`https://calendarific.com/api/v2/countries?api_key=88c2e0307392e372379f2234813cc3d62abb2876`);
        const data = await response.json();
        setCountries(data.response.countries);
        console.log(data.response.countries);
      };
    useEffect(() => {
        fetchCountries();
    }, [params.name])
    
    const handleInputChange = (e) =>{
        setInput(e.target.value)
    }
    const handleChoose =  (country) => {
        console.log(country.country_name)
        Query(country)
    }
    const filteredCountries = countries.filter((country) => 
        country.country_name.toLowerCase().includes(input.toLowerCase())
    )
    
  return ( 
    <>
    <input 
      type="search" 
      class="w-96 p-2 border border-spacing-1 bg-red" 
      placeholder='Search country'
      value={input}
      onChange={handleInputChange}
    />
    <div class='w-96 h-96 overflow-y-auto border border-slate-300 hover:border-indigo-300 '>
        {
           filteredCountries.map((country) => (
            <li 
              class="border border-slate-300 hover:border-indigo-300 cursor-pointer" 
              key={country.country_name}
              onClick={() => handleChoose(country)}
            >
              <div class="text-blue-800 p-5">{country.country_name}</div>
            </li>
          ))  
        
        }
    </div>
  
    </>
  )
}

export default Country