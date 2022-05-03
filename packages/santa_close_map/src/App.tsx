import {Box} from 'santa_close_design-system'
import {ApolloProvider, useSampleQuery} from 'santa_close_common'

const TestComponent = () => {
  const {data} = useSampleQuery({
    variables: {input: {price: 100}},
  })
  console.log(data)
  return null
}

const App = () => {
  return (
    <ApolloProvider>
      <div
        style={{
          margin: '10px',
          border: '1px solid red',
        }}
      >
        <h1>This is Map App of santa-close-map</h1>
        <Box />
        <TestComponent />
      </div>
    </ApolloProvider>
  )
}

export default App
