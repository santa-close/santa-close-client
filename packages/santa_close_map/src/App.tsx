import {RecoilRoot} from 'recoil'
import {ApolloProvider, useSampleQuery} from 'santa_close_common'
import MapApp from './MapApp'

const TestComponent = () => {
  const data = useSampleQuery({
    variables: {input: {price: 100}},
  })
  console.log(data)
  return null
}

const App = () => {
  return (
    <ApolloProvider>
      <RecoilRoot>
        <MapApp />
        <TestComponent />
      </RecoilRoot>
    </ApolloProvider>
  )
}

export default App
