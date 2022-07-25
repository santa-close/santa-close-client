import React, {ChangeEvent, useEffect} from 'react'
import {RecoilRoot, useRecoilState} from 'recoil'
import {sampleState} from 'map_app/atoms'
import {UrqlProvider, urqlClient} from 'santa_close_common'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import gql from 'graphql-tag'

const MapApp = React.lazy(() => import('map_app/MapApp'))

const Login = () => {
  const handleKaKaoLoginClick = () => {
    Kakao.Auth.login({
      success({access_token}) {
        const foo = async () => {
          const result = await urqlClient
            .mutation(
              gql`
                mutation SignIn($input: SignInAppInput!) {
                  signIn(input: $input) {
                    accessToken
                    expiredAt
                  }
                }
              `,
              {
                input: {
                  code: access_token,
                  type: 'KAKAO',
                },
              },
            )
            .toPromise()

          localStorage.setItem('token', JSON.stringify(result.data.signIn))
        }

        foo()
      },
      fail(err) {
        console.log('err', err)
      },
    })
  }

  useEffect(() => {
    const initKakaoScript = async () => {
      const scriptInitResult = new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.defer = true
        document.head.appendChild(script)

        script.addEventListener('load', () => {
          resolve({isLoaded: true, isError: false})
        })

        script.addEventListener('error', () => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({isLoaded: false, isError: true})
        })
      })

      await scriptInitResult

      Kakao.init('1a01c6b9fba660692d7388f0f7c5baaf')
      console.log(Kakao.isInitialized())
    }

    initKakaoScript()
  }, [])

  return (
    <div>
      <button type="button" onClick={handleKaKaoLoginClick}>
        login
      </button>
    </div>
  )
}

const MapAppContainer = () => {
  const [state, setState] = useRecoilState<string>(sampleState)

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
        border: '1px solid blue',
      }}
    >
      <h1>This is Frame App of santa-close-frame with KarrotFrame</h1>
      <React.Suspense fallback="loading...">
        <MapApp />
        <input value={state} onChange={handleStateChange} />
        <h3>{state}</h3>
      </React.Suspense>
    </div>
  )
}

const App = () => {
  return (
    <UrqlProvider>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MapAppContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </UrqlProvider>
  )
}

export default App
