import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, useParams } from "react-router-dom";
import Country from '../src/components/country'
import Holiday from '../src/components/holiday';

function App() {

  // let params = useParams();
  // const [details, setDetails] = useState({})
  // const [activeTab, setActiveTab] = useState('instructions')
  // const fetchDetails = async () => {
  //   const data = await fetch(`https://calendarific.com/api/v2/holidays?api_key=8bee5c2e957fb61bfa758cee06f35f9eda1f14a0&country=US&year=2019`);
  //   const detailData = await data.json();
  //   setDetails(detailData);
  //   console.log(detailData)
  // };

  // useEffect(() => {
  //     fetchDetails();
  // }, [params.name])

  return (
    <>
       <Country country="country" />
       <Holiday country="country" />
    </>
  )
}

export default App
