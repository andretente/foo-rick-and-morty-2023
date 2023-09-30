import { episodesStore } from '@store/index'
import { json } from 'react-router-dom'

export default async function episodesLoader() {
  const storeepisodes = episodesStore.get()

  if (storeepisodes?.results?.length) {
    return json(storeepisodes)
  } else {
    const episodes = await fetch('https://rickandmortyapi.com/api/episode')
    const episodesJson = await episodes.json()

    episodesStore.set(episodesJson)

    return json(episodesJson)
  }
}
