import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import data from '../../contryWithCitiesdata.json'
const CountryCities = ({country}) => {
  const[search, setSearch] = useState('')
 
   
  
   
  //search city
  const onChange=e=>{setSearch(e.target.value.toLowerCase())}
  const searchResult = country && data[country].filter((el) => {
   
    if (search === '') {
        return el
    }
  
    else {        
        return ( el.toLowerCase().includes(search.toLowerCase()) )           
    }
})  
console.log(searchResult)

const renderedCities=searchResult&&searchResult.map(city=>{
  return<div className="city-box">
      <div>{city}</div>
    <Link to={`city/${city}`}>  <button>View Weather</button></Link>
  </div>
})
  return (
    <div className="cities-dev">
       <h4>List of cities for your country </h4>
       <input placeholder=" search with name or long,lat or IP  " type="search" onChange={(e)=>onChange(e)} />
        <div className="cities">
   
        {renderedCities}
    
        </div>
        {searchResult&&searchResult.length<1 && search!='' &&<div className='not-found'><div> Not found  in Country List </div> <Link to={`city/${search}`}><button>Search  anyway </button></Link></div>}

    </div>
   
  )
}

export default CountryCities