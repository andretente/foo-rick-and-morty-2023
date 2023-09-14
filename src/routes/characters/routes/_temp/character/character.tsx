import MessageLoader from '@components/_loaders/message-loader'
import { CharacterTypes } from '@globalTypes/rick-morty.types'
import { useFetch } from '@hooks/use-fetch.hook'
import { useParams } from 'react-router-dom'

import css from './character.module.css'

export default function Character() {
  const params = useParams()

  const { data } = useFetch<CharacterTypes>({
    url: `https://rickandmortyapi.com/api/character/${params.characterId}`,
  })

  if (!data) {
    return <MessageLoader />
  }

  return (
    <div className={css['root']}>
      <h2 className={css['title']}>{data.name}</h2>

      <img
        alt={`thumbnail of the character${data.name}`}
        className={css['image']}
        height={300}
        width={300}
        src={data.image}
      />

      <ul className={css['details-list']}>
        <li>Species: {data.species}</li>

        <li>Status: {data.status}</li>

        <li>Origin: {data.origin.name}</li>
      </ul>
    </div>
  )
}
