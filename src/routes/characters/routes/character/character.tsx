import ErrorMessage from '@components/_errors/error-message'
import MessageLoader from '@components/_loaders/message-loader'
import { CharacterTypes } from '@globalTypes/rick-morty.types'
import useRouteGlobalData from '@hooks/use-route-global-data'
import clsx from 'clsx'
import { useParams } from 'react-router-dom'

import css from './character.module.css'

export default function Character() {
  const params = useParams()

  const { data, error } = useRouteGlobalData<CharacterTypes>(
    `https://rickandmortyapi.com/api/character/${params.characterId}`
  )

  if (error) {
    return <ErrorMessage error={error.message} />
  }

  if (!data) {
    return <MessageLoader />
  }

  return (
    <div className={css['root']}>
      <h2 className={clsx('typography-headline-4', css['title'])}>
        {data.name}
      </h2>

      <img
        alt={`thumbnail of the character${data.name}`}
        className={css['image']}
        height={300}
        width={300}
        src={data.image}
      />

      <ul className={clsx('stack', css['details-list'])}>
        <li>Species: {data.species}</li>

        <li>Status: {data.status}</li>

        <li>Origin: {data.origin.name}</li>
      </ul>
    </div>
  )
}
