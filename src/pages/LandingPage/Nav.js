import React from 'react'
import {a} from 'react-router-dom'
const Nav = ({cities}) => {
  return (
    <div className="nav">
      
      
      
       <a href='#current'><span> Current Weather</span></a>
      
       <a href='#weather'><span> Next 14 day weather</span></a>
       <a href='#mounthly'><span> Monthly Climate Averages</span></a>
       {cities&&<a href='#cities'><span> Cities</span></a>}
      
     

       
    </div>
  )
}

export default Nav