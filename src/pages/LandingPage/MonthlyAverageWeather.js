import React,{useEffect, useRef} from 'react'
import BarChart from './Graph'

const MonthlyAverageWeather = ({data}) => {
    
   
     
    console.log(data.ClimateAverages&&data.ClimateAverages[0])
    const svg = useRef(null);
    useEffect(()=>{
      console.log(data.weather)
        if(data.ClimateAverages&&data.ClimateAverages[0].month.length>0  && svg.current){
       
            svg.current.appendChild( 
              BarChart(data.ClimateAverages[0].month, {
              x: d => d.name,
              y: d => d.absMaxTemp,
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
      <div className="title">Monthely Averages Weather  </div>
          <div  ref={svg} className='chart' >
              
       </div>
   </>
  )
}

export default MonthlyAverageWeather