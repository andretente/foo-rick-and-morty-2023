import { InfoTypes } from '@globalTypes/rick-morty.types'
import { EpisodeTypes } from '@globalTypes/rick-morty.types'

export interface EpisodesProps {}

export interface EpisodesTypes {
  info: InfoTypes
  results: EpisodeTypes[]
}
