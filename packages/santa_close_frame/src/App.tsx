import React from 'react'
// import {Box} from 'santa_close_uikit'

// import MapApp from 'map-app/MapApp'

const MapApp = React.lazy(() => import('map-app/MapApp'))

const App = () => {
  return (
    <div>
      <h1>{'This is Frame App'}</h1>
      <MapApp />
      {/*<Box />*/}
    </div>
  )
}

export default App
