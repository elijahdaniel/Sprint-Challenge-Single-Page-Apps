import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import LocationCard from './LocationCard'

export default function LocationsList() {
  const [location, setLocation] = useState([])

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/location/')
      .then(res => {
        setLocation(res.data.results)
        console.log('Location', res.data.results)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='location-lists'>
      {location.map(location => {
        return (
          <div className='location-card'>
            <LocationCard location={location} />
          </div>
        )
      })}
    </div>
  )
}
