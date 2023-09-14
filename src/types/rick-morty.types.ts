export interface InfoTypes {
  count: number
  pages: number
  next: string
}

export interface CharacterTypes {
  id: number
  created: string
  episodes: string[]
  gender: string
  image: string
  name: string
  origin: { name: string }
  status: string
  species: string
  url: string
}

export interface CharactersResponse {
  info: InfoTypes
  results: CharacterTypes[]
}

export interface EpisodeTypes {
  id: number
  created: string
  episodes: string[]
  gender: string
  image: string
  name: string
  status: string
  species: string
  url: string
}

export interface EpisodesResponse {
  info: InfoTypes
  results: EpisodeTypes[]
}
