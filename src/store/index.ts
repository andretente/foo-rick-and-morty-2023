import {
  CharactersResponse,
  EpisodesResponse,
} from '@globalTypes/rick-morty.types'
import { atom } from 'nanostores'

export const charactersStore = atom<CharactersResponse | null>(null)

export const episodesStore = atom<EpisodesResponse | null>(null)
