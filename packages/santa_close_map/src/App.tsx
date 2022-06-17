import {Suspense} from 'react'
import {RecoilRoot} from 'recoil'
import {
  bridge,
  useInitBridge,
  UrqlProvider,
  useSampleQuery,
} from 'santa_close_common'
import {
  Button,
  ToggleGroup,
  globalStyles,
  Box,
  Icon,
  Typography,
  Flex,
  Divider,
} from 'santa_close_design-system'
import IconTest from './components/IconTest'
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
        <IconTest />
        <button type="button" onClick={handleClick}>
          bridge test
        </button>
        <Suspense fallback={<h1>......loading</h1>}>
          <TestComponent />
        </Suspense>
        <ToggleGroup />

        <Box
          bg="sub"
          onClick={(e) => {
            console.log(e)
          }}
        >
          test
        </Box>

        <Button
          size="md"
          leftIcon={<Icon size="16" name="bookmark" color="sub" />}
        >
          button
        </Button>
        <Button size="md" rightIcon={<Icon name="close" />}>
          button
        </Button>
        <Button
          variant="outline"
          color="main"
          size="md"
          leftIcon={<Icon size="16" name="bookmark" color="sub" />}
          rightIcon={<Icon name="close" />}
        >
          button
        </Button>
        <Button size="sm" color="sub">
          button
        </Button>
        <Flex gap={8} isGrow>
          <Button size="sm" variant="outline" color="main">
            button
          </Button>
          <Button size="sm" variant="outline" color="sub">
            button
          </Button>
          <Button size="sm" variant="outline" color="gray01">
            button
          </Button>
          <Button size="sm" variant="outline" color="gray02">
            button
          </Button>
          <Button size="sm" variant="outline" color="gray03">
            button
          </Button>
          <Button size="sm" variant="outline" color="gray04">
            button
          </Button>
          <Button size="sm" variant="outline" color="white">
            button
          </Button>
        </Flex>

        <Button size="lg" variant="solid" color="sub">
          button
        </Button>
        <Button size="lg" variant="solid" color="kakao01">
          button
        </Button>
        <Button size="lg" variant="solid" color="kakao02">
          button
        </Button>
        <Button size="lg" variant="solid" color="apple" />
        <Button size="lg" variant="solid" color="sub">
          button
        </Button>
        <Button size="lg" variant="solid" color="sub">
          button
        </Button>
        <Button size="lg" variant="outline">
          button
        </Button>
        <Button size="md" variant="ghost">
          button
        </Button>
        <Typography>TEST</Typography>
        <Divider />
        <Typography size={1} weight="medium">
          TEST
        </Typography>
        <Divider color="main" bs="dashed" direction="horizontal" w={3} />
        <Divider
          color="gray01"
          bs="dotted"
          direction="vertical"
          w={3}
          size="half"
        />
        <Box w="full" h={7}>
          <Button
            color="kakao01"
            size="full"
            leftIcon={<Icon name="bookmark" />}
          >
            <Typography size={2} weight="bold" color="gray01">
              카카오톡으로 1초만에 시작하기
            </Typography>
          </Button>
        </Box>
        <Box w="full" h={7}>
          <Button color="apple" size="full" leftIcon={<Icon name="bookmark" />}>
            <Typography size={2} weight="bold" color="white">
              Apple로 계속하기
            </Typography>
          </Button>
        </Box>
      </RecoilRoot>
    </UrqlProvider>
  )
}

export default App
