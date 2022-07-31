import React, {ChangeEvent} from 'react'
import {RecoilRoot, useRecoilState} from 'recoil'
import {sampleState} from 'map_app/atoms'
import {UrqlProvider} from 'santa_close_common'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import {ProtectedRoute} from './components'
import {useAccessToken} from './hooks'

const MapApp = React.lazy(() => import('map_app/MapApp'))

const MapAppContainer = () => {
  const [state, setState] = useRecoilState<string>(sampleState)

  const handleStateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: {value},
    } = event

    setState(value)
  }

  return (
    <div
      style={{
        margin: '10px',
        border: '1px solid blue',
      }}
    >
      <h1>This is Frame App of santa-close-frame with KarrotFrame</h1>
      <React.Suspense fallback="loading...">
        <MapApp />
        <input value={state} onChange={handleStateChange} />
        <h3>{state}</h3>
      </React.Suspense>
    </div>
  )
}

const App = () => {
  const {isAvailable} = useAccessToken()

  return (
    <UrqlProvider>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MapAppContainer />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/protectePath"
              element={
                <ProtectedRoute isAllowed={isAvailable} redirectTo="/login">
                  <div>Protected Page</div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </UrqlProvider>
  )
}

export default App
