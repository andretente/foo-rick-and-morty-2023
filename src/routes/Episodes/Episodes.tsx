import './episodes.css'

import CardGrid, { CardGridItem } from '@components/_cards/card-grid'
import GenericCard from '@components/_cards/generic-card'
import { Link, useLoaderData } from 'react-router-dom'

import type { EpisodesTypes } from './episodes.types'
export default function Episodes() {
  // Doesn't seem like useLoaderData accepts generics so we have to cast it
  const data = useLoaderData() as EpisodesTypes

  return (
    <CardGrid as="ul">
      {data?.results.map((episode, index) => {
        return (
          <CardGridItem key={episode.id}>
            <Link
              className="episodes__link"
              style={{ animationDelay: `${index * 0.05 + 0.2}s` }}
              to={`/episode/${episode.id}`}
            >
              <GenericCard imageSrc={episode.image} name={episode.name} />
            </Link>
          </CardGridItem>
        )
      })}
    </CardGrid>
  )
}
