import GenericCard from '@components/_cards/generic-card'
import clsx from 'clsx'
import { useCallback, useMemo, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

import ControlsBar from '../characters/components/controls-bar'
import css from './episodes.module.css'
import type { EpisodesTypes } from './episodes.types'

export default function Episodes() {
  // Doesn't seem like useLoaderData accepts generics so we have to cast it
  const data = useLoaderData() as EpisodesTypes

  const [sort, setSort] = useState<'a-z' | 'z-a'>('a-z')
  const [currentSearchValue, setCurrentSearchValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  // ! WARNING: This is a very contrived, useCallback added for demo purposes
  const updateSearchValue = useCallback((value: string) => {
    setCurrentSearchValue(value)
    // setSearchValue(value)
  }, [])

  // ! WARNING: This is a very contrived, useCallback added for demo purposes
  const executeSearch = useCallback(() => {
    setSearchValue(currentSearchValue)
  }, [currentSearchValue])

  const updateSort = (value: string) => {
    setSort(value as 'a-z' | 'z-a')
  }

  // ! WARNING: This is a very contrived example, useMemo added for demo purposes
  const filteredEpisodes = useMemo(
    () =>
      data?.results.filter((episode) => {
        return episode.name.toLowerCase().includes(searchValue.toLowerCase())
      }),
    [data?.results, searchValue]
  )

  sort === 'a-z'
    ? filteredEpisodes?.sort((a, b) => a.name.localeCompare(b.name))
    : filteredEpisodes?.sort((a, b) => b.name.localeCompare(a.name))

  return (
    <>
      <ControlsBar
        onChangeSearch={updateSearchValue}
        onSubmitSearch={executeSearch}
        onChangeSort={updateSort}
      />

      <ul className={clsx('auto-grid', css['root'])}>
        {filteredEpisodes?.map((episode, index) => {
          return (
            <li key={episode.id}>
              <Link
                className="link"
                style={{ animationDelay: `${index * 0.05 + 0.2}s` }}
                to={`/episode/${episode.id}`}
              >
                <GenericCard
                  as="span"
                  imageSrc={episode.image}
                  name={episode.name}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
