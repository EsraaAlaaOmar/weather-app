import React from 'react'

const CurrentCondition = ({data}) => {
  return (
      <>
        {  !data ? '..loading' :<div class="current-conditions">
       
        <div>
              <span>  </span>
              {data.nearest_area&&data.nearest_area[0].areaName[0].value} 
          </div>
          <div>
              <span> humidity  </span>
              {data.current_condition&&data.current_condition[0].humidity}
          </div>
          <div>
              <span> temp  </span>
              {data.current_condition&&data.current_condition[0].temp_C} °C
          </div>
          <div>
              <span> visibility  </span>
              {data.current_condition&&data.current_condition[0].visibility}
          </div>
          <img className='weathe-icon' src={data.current_condition&&data.current_condition[0].weatherIconUrl[0].value}  alt='weather icon'/>

           
           
        </div> 
        }
      </>

  )
}

export default CurrentCondition