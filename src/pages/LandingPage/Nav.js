import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className="nav">
       <Link to='#weather'><span> Monthly Climate Averages</span></Link>
       <Link to='#weather'><span> Next 14 day weather</span></Link>
       <Link to='#weather'><span> Weather Alerts</span></Link>
       <Link to='#weather'><span> Air Quality Data</span></Link>
       <Link to='#weather'><span> Time Zone </span></Link>
     

       
    </div>
  )
}

export default Nav