import {Suspense} from 'react'
import {RecoilRoot} from 'recoil'
import {
  bridge,
  useInitBridge,
  UrqlProvider,
  useSampleQuery,
} from 'santa_close_common'
import {Button, ToggleGroup, globalStyles} from 'santa_close_design-system'
import MapApp from './MapApp'

const TestComponent = () => {
  const [{data}, reexcuteQuery] = useSampleQuery({
    variables: {input: {price: 100}},
  })
  console.log(data)
  console.log(reexcuteQuery)
  return (
    <>
      <h2>{data?.sample.name}</h2>
      <button type="button" onClick={reexcuteQuery}>
        refetch
      </button>
    </>
  )
}

const App = () => {
  globalStyles()
  const handleClick = () => {
    bridge('navigate', {to: 'Home'}, ({bridgeId}) => {
      console.log('callback', bridgeId)
    })
  }
  useInitBridge()
  return (
    <UrqlProvider>
      <RecoilRoot>
        <MapApp />
        <button type="button" onClick={handleClick}>
          bridge test
        </button>
        <Suspense fallback={<h1>......loading</h1>}>
          <TestComponent />
        </Suspense>
        <Button>Hello</Button>
        <ToggleGroup />
      </RecoilRoot>
    </UrqlProvider>
  )
}

export default App
