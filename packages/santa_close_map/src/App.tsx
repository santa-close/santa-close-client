import {RecoilRoot} from 'recoil'
import {UrqlProvider} from 'santa_close_common'
import {globalStyles} from 'santa_close_design-system'
import {ComponentTest} from './components'
import MapApp from './MapApp'

const App = () => {
  globalStyles()

  return (
    <UrqlProvider>
      <RecoilRoot>
        This is Map App of santa-close-map
        <MapApp />
        <ComponentTest />
      </RecoilRoot>
    </UrqlProvider>
  )
}

export default App
