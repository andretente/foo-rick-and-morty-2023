import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import useGlobalState from '../context/use-global-state'
import { useFetch } from './use-fetch'

export default function useRouteGlobalData<DataType>(apiUrl: string) {
  const location = useLocation()

  const { state, setState } = useGlobalState()

  const cachedRouteData = state[location.pathname]

  const hasCachedRouteData = Boolean(cachedRouteData)

  const { data, error } = useFetch<DataType>({
    url: apiUrl,
    bypass: Boolean(cachedRouteData),
  })

  useEffect(() => {
    if (data && !hasCachedRouteData) {
      setState((prevState) => ({
        ...prevState,
        [location.pathname]: data,
      }))
    }
  }, [data, hasCachedRouteData, location.pathname, setState])

  const _data = (hasCachedRouteData ? cachedRouteData : data) as DataType

  return { data: _data, error }
}
