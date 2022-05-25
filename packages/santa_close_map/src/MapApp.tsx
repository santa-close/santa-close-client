import {ChangeEvent} from 'react'
import {useRecoilState} from 'recoil'
import {Box, Button} from 'santa_close_design-system'
import {sampleState} from './store'

const MapApp = () => {
  const [state, setState] = useRecoilState(sampleState)

  const handleStateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: {value},
    } = e

    setState(value)
  }

  return (
    <div
      style={{
        margin: '10px',
        border: '1px solid red',
      }}
    >
      <h1>Map App with Recoil</h1>
      <input value={state} onChange={handleStateChange} />
      <p>echo: {state}</p>
      <Box
        bg="sub"
        onClick={(e) => {
          console.log(e)
        }}
      >
        test
      </Box>
      <Button size="xs">button</Button>
      <Button size="sm">button</Button>
      <Button size="md">button</Button>
      <Button size="lg" variant="outline" color="gray01">
        button
      </Button>
    </div>
  )
}

export default MapApp
