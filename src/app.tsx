import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import Characters from './routes/characters'
// import Character, {
//   characterLoader,
// } from './routes/characters/routes/Character'
// import Episodes, { episodesLoader } from './routes/Episodes'
import Error from './routes/Error'
import Layout from './routes/layout'
// import StopWatch from './routes/StopWatch'

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layout />} errorElement={<Error />}>
            <Route path="characters">
              <Route index element={<Characters />} />
              {/* <Route
                path=":characterId"
                element={<Character />}
                loader={characterLoader}
              /> */}
            </Route>

            {/* <Route
              path="episodes"
              element={<Episodes />}
              loader={episodesLoader}
            /> */}

            {/* <Route path="stopwatch" element={<StopWatch />} /> */}
          </Route>
        )
      )}
    />
  )
}

export default App
