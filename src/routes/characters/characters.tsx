import GenericCard from '@components/_cards/generic-card'
import MessageLoader from '@components/_loaders/message-loader'
import { useFetch } from '@hooks/use-fetch.hook'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import css from './characters.module.css'
import type { CharactersTypes } from './characters.types'

export default function Characters() {
  const { data } = useFetch<CharactersTypes>({
    url: 'https://rickandmortyapi.com/api/character',
  })

  if (!data) {
    return <MessageLoader />
  }

  return (
    <ul className={clsx('auto-grid', css['root'])}>
      {data.results?.map((character, index) => {
        return (
          <li key={character.id}>
            <Link
              className={css['link']}
              style={{ animationDelay: `${index * 0.05 + 0.2}s` }}
              to={`/characters/${character.id}`}
            >
              <GenericCard
                as="span"
                imageSrc={character.image}
                name={character.name}
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
