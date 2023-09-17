import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()

  return (
    <div className="stack center">
      <h1 className="typography-headline-4">Oops!</h1>

      <p>Sorry, an unexpected error has occurred.</p>

      <p>{JSON.stringify(error)}</p>
    </div>
  )
}
