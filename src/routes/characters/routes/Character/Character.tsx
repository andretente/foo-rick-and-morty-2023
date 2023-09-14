import './character.css'

import { CharacterTypes } from '@globalTypes/rick-morty.types'
import { useLoaderData } from 'react-router-dom'

export default function Character() {
  // Doesn't seem like useLoaderData accepts generics so we have to cast it
  const data = useLoaderData() as CharacterTypes

  return (
    <div className="character__card">
      <h2 className="character__title">{data.name}</h2>

      <img
        alt={`thumbnail of the character${data.name}`}
        className="character__image"
        height={300}
        width={300}
        src={data.image}
      />

      <ul className="character__details-list">
        <li>Species: {data.species}</li>

        <li>Status: {data.status}</li>

        <li>Origin: {data.origin.name}</li>
      </ul>
    </div>
  )
}
