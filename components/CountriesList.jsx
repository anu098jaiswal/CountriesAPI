import React from 'react'
import countriesData from '../countriesData'
import Countrycard from './Countrycard'

export default function CountriesList() {
  return (<div classname="countries-container">
    {countriesData.map((country) =>{
      return(<Countrycard key ={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}/>

  )
})}
  </div>
  )
}

  
    