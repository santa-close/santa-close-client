import React from 'react'
import {Navigator, Screen} from '@karrotframe/navigator'
// import {Box} from 'santa_close_design-system'

const MapApp = React.lazy(() => import('map-app/MapApp'))

const Page1 = () => {
  return <h1>Here is PAGE1</h1>
}

const Page2 = () => {
  return <h1>Here is PAGE2</h1>
}

const MapAppContainer = () => {
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
      </React.Suspense>
    </div>
  )
}

const App = () => {
  return (
    <Navigator onClose={console.log}>
      <Screen component={MapAppContainer} path="/" />
      <Screen component={Page1} path="/page1" />
      <Screen component={Page2} path="/page2" />
    </Navigator>
  )
}

export default App
