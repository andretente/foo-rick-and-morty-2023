import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import GlobalStateProvider from './context/global-state'
import Characters from './routes/characters'
import Character from './routes/characters/routes/character'
import Episodes, { episodesLoader } from './routes/episodes'
import Error from './routes/error'
import Layout from './routes/layout'
import StopWatch from './routes/stop-watch'

function App() {
  return (
    <GlobalStateProvider>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<Layout />} errorElement={<Error />}>
              <Route path="characters">
                <Route index element={<Characters />} />
                <Route path=":characterId" element={<Character />} />
              </Route>

              <Route
                path="episodes"
                element={<Episodes />}
                loader={episodesLoader}
              />

              <Route path="stop-watch" element={<StopWatch />} />
            </Route>
          )
        )}
      />
    </GlobalStateProvider>
  )
}

export default App
