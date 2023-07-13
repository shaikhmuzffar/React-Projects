import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Weather from './Weather.jsx'
import './App.css'

function App() {
  const [long,setLong] = useState([]);
  const [lat,setLat] = useState([]);
  const [data,setData] = useState([]);
  let componentMounted=true;

  const fetchData = async () =>{
    navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
      console.log(long)
      console.log(lat)
    })

    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=83408c61e04d375a7021bcaf411896a5
    `);
    if(componentMounted){
      setData(await response.json());
      console.log(data)
    }
    return () => {
      componentMounted = false;
    }
  }

  useEffect(()=>{
    fetchData();
  },[lat,long]);
  return (
    <>
    {
      (typeof data.main !='undefined') ? (<Weather weatherData={data} />) :<div>....loading</div>
    }
    </>
  )
}

export default App
