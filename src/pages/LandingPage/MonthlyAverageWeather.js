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

    //tables in row 
    const renderedTableRows = data.ClimateAverages&&data.ClimateAverages[0].month.map(mounth=>{
      return( <tr>
                <td>{mounth.name}</td>
                <td>{mounth.absMaxTemp}</td>
                <td>{mounth.avgDailyRainfall*100} %</td>
              </tr>

      )
    })
  return (
   <>
      <div className="title">Monthely Averages Weather  </div>
          <div  ref={svg} className='chart' >

          <table>
            <thead>
              <th>Mounth </th>
              <th>temp  °C</th>
              <th>Daily Rain fall</th>
            </thead>
            {renderedTableRows}
          </table>
              
       </div>
   </>
  )
}

export default MonthlyAverageWeather