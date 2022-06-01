import React,{useEffect, useRef} from 'react'
import BarChart from './Graph'

const Weather = ({data}) => {
     
 
    

   
     
    
      const svg = useRef(null);
      useEffect(()=>{
        console.log(data.weather)
          if(data.weather&&data.weather.length>0  && svg.current){
         
              svg.current.appendChild( 
                BarChart(data.weather, {
                x: d => d.date,
                y: d => d.maxtempC,
                yFormat: "",
                yLabel: "↑ °C",
                width:1000,
                height: 500,
                color: "#abd4ff",
                duration: 750 // slow transition for demonstration
              }))
          } 
      }, [data]);
      
      return (
        <>
           <div className="title">Weather Forcasting  Next  14 day </div>
          <div  ref={svg} className='chart' >
              
              </div>
        
        </>
          
      );
      
}

export default Weather