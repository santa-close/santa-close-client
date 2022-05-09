import {RecoilRoot} from 'recoil'
import {
  ApolloProvider,
  useSampleQuery,
  bridge,
  useInitBridge,
} from 'santa_close_common'
import {Button, ToggleGroup} from 'santa_close_design-system'
import MapApp from './MapApp'

const TestComponent = () => {
  const {data} = useSampleQuery({
    variables: {input: {price: 100}},
  })
  return <h2>{data?.sample.name}</h2>
}

const App = () => {
  const handleClick = () => {
    bridge('navigate', {to: 'Home'}, ({bridgeId}) => {
      console.log('callback', bridgeId)
    })
  }
  useInitBridge()
  return (
    <ApolloProvider>
      <RecoilRoot>
        <MapApp />
        <button type="button" onClick={handleClick}>
          bridge test
        </button>
        <TestComponent />
        <Button>Hello</Button>
        <ToggleGroup />
      </RecoilRoot>
    </ApolloProvider>
  )
}

export default App
