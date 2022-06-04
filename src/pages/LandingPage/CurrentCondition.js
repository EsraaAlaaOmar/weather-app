import React from 'react'
import {FiWind} from 'react-icons/fi'
import {WiHumidity} from 'react-icons/wi'
import {AiOutlineCloud} from 'react-icons/ai'
import {HiOutlineLocationMarker} from 'react-icons/hi'

const CurrentCondition = ({data, city}) => {
  return (
      <>
     
        {  !data ? '..loading' :
        <div id='current' className="current-div">
          <h4>{city?"country is":"You Are  in"} {data.nearest_area&&data.nearest_area[0].country[0].value} ..</h4>
          <div class="current-conditions">
          
              <div>
                  <img className='weather-icon' src={data.current_condition&&data.current_condition[0].weatherIconUrl[0].value}  alt='weather icon'/>
                  <span className='temp'>  {data.current_condition&&data.current_condition[0].temp_C} °C </span>
                </div>
                <div className='city-name'>
                    <span><HiOutlineLocationMarker/></span> {data.nearest_area&&data.nearest_area[0].areaName[0].value} 
                </div>
                <div className='weather-desc'> {data.current_condition&&data.current_condition[0].weatherDesc[0].value}</div>
                <div className='properties'>
                <div>
                    <span> <WiHumidity />  </span>
                    {data.current_condition&&data.current_condition[0].humidity}
                </div>
              
                <div>
                    <span> <AiOutlineCloud />  </span>
                    {data.current_condition&&data.current_condition[0].cloudcover}%
                </div>
                <div>
                    <span> <FiWind />  </span>
                    {data.current_condition&&data.current_condition[0].windspeedKmph} km/h
                </div>

            </div>
           
        

              
              
          </div> 
            
        </div>
       
        }
      </>

  )
}

export default CurrentCondition