import React ,{useState, useEffect}from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom';
import CurrentCondition from '../LandingPage/CurrentCondition';
import MonthlyAverageWeather from '../LandingPage/MonthlyAverageWeather';
import Weather from '../LandingPage/WeatherNext14day';
import Nav from '../LandingPage/Nav';
const CityWeather = () => {
    let { city }  = useParams();
   
        const [data, setData] = useState([]);
        
        const getData = async () => {
            const { data } = await axios.get(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=cea66f33c2f34651b3b211931222605&q=${city}&&format=json &&includelocation=yes`,{
                headers: {
              'Content-Type': 'application/json'
                }
              
              
              });
            setData(data.data);
          };
    
          //get location 
          var x = document.getElementById("demo");
   
        
          useEffect(() => {
           
        
            getData();
          }, [city]);
        
      return (
        <>
    
  
    {!data ?  'loading .. '
    : data.error?<div className='errormsg'> This city Name dosent exist in this system you can try longitud, lattitude  or your ip</div> :<div>
          <Nav />
          <CurrentCondition data={data}  city={true}/>
          <Weather  data={data}/>
          <MonthlyAverageWeather data={data} />
         
      </div>}
      
          
        </>
      )
    }
    


export default CityWeather