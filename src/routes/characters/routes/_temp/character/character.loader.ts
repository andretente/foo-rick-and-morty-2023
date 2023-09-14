import { charactersStore } from '@store/index'
import { json } from 'react-router-dom'

export default async function characterLoader({
  params,
}: {
  params: { characterId?: string | undefined }
}) {
  const storeCharacters = charactersStore.get()

  const character = storeCharacters?.results?.find((character) => {
    return character.id === Number(params.characterId)
  })

  if (character) {
    return json(character)
  } else {
    const characters = await fetch(
      `https://rickandmortyapi.com/api/character/${params.characterId}`
    )
    const charactersJson = await characters.json()

    charactersStore.set(charactersJson)

    return json(charactersJson)
  }
}
