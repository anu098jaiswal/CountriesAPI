import React from 'react'

export default function Searchbar({setText}) {
  return (
    <div className="search-container">
    <i className="fa-solid fa-magnifying-glass"></i>
    <input onChange={(e)=>setText(e.target.value.toLowerCase())} 
    type="text" placeholder='Search For a country..'/>

      
    </div>
  );
}
