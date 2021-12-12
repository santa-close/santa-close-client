import React from 'react'
// import {Box} from 'santa_close_uikit'

const MapApp = React.lazy(() => import('map-app/MapApp'))

const App = () => {
  return (
    <div
      style={{
        margin: '10px',
        border: '1px solid blue',
      }}
    >
      <h1>{'This is Frame App of santa-close-frame'}</h1>
      <React.Suspense fallback={'Loading...'}>
        <MapApp />
      </React.Suspense>
      {/*<Box />*/}
    </div>
  )
}

export default App
