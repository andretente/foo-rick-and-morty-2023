import MessageLoader from '@components/_loaders/message-loader'
import { CharacterTypes } from '@globalTypes/rick-morty.types'
import { useFetch } from '@hooks/use-fetch.hook'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import useGlobalState from '../../../../context/use-global-state'
import css from './character.module.css'

export default function Character() {
  const params = useParams()
  const location = useLocation()

  const { state, setState } = useGlobalState()

  const isCached = Boolean(state[location.pathname])

  const { data } = useFetch<CharacterTypes>({
    url: `https://rickandmortyapi.com/api/character/${params.characterId}`,
    bypass: isCached,
  })

  useEffect(() => {
    if (data && !isCached) {
      setState((prevState) => ({
        ...prevState,
        [location.pathname]: data,
      }))
    }
  }, [data, isCached, location.pathname, setState])

  const cachedData = state[location.pathname] as CharacterTypes
  const _data = isCached ? cachedData : data

  if (!_data) {
    return <MessageLoader />
  }

  return (
    <div className={css['root']}>
      <h2 className={clsx('typography-headline-4', css['title'])}>
        {_data.name}
      </h2>

      <img
        alt={`thumbnail of the character${_data.name}`}
        className={css['image']}
        height={300}
        width={300}
        src={_data.image}
      />

      <ul className={clsx('stack', css['details-list'])}>
        <li>Species: {_data.species}</li>

        <li>Status: {_data.status}</li>

        <li>Origin: {_data.origin.name}</li>
      </ul>
    </div>
  )
}
