import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        setCharacters(res.data.results)
        console.log('Characters', characters)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <section className='character-list grid-view'>
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characters.map(char => {
        return (
          <div>
            <CharacterCard key={char.id} characters={char} />
          </div>
        )
      })}
    </section>
  )
}
