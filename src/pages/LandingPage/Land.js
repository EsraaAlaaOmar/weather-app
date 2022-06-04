import React ,{useState, useEffect}from 'react'

import Nav from './Nav'
import axios from 'axios'
import WeatherNext14day from './WeatherNext14day'
import MonthlyAverageWeather from './MonthlyAverageWeather'
import CurrentCondition from './CurrentCondition'
import CountryCities from './CountryCities'
const Land = () => {
    const [data, setData] = useState([]);
    const[long,setLong] = useState()
    const[lat,setLat] = useState()
    const getData = async () => {
        const { data } = await axios.get(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=cea66f33c2f34651b3b211931222605&q=${lat},${long}&&format=json &&includelocation=yes`,{
            headers: {
          'Content-Type': 'application/json'
            }
          
          
          });
        setData(data.data);
      };

      //get location 
      var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
console.log(long,lat)
function showPosition(position) {
setLat( position.coords.latitude) 
setLong( position.coords.longitude);
}
    
      useEffect(() => {
       
        getLocation()
        getData();
      }, [long,lat]);
      console.log(data
        )
  return (
    <>
{!data ?  'loading .. '
:!long ? <div className='errormsg'>Please Allow Location in Your Device </div>
    :  <div>
          <Nav cities={true} />
          <CurrentCondition data={data} />
          <CountryCities country={data.nearest_area&&data.nearest_area[0].country[0].value} />
          <WeatherNext14day  data={data}/>
          <MonthlyAverageWeather data={data} />
         
      </div>}
      
    </>
  )
}

export default Land