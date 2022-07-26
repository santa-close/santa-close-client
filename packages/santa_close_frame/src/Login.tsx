import {useEffect, useState} from 'react'
import {urqlClient} from 'santa_close_common'
import {gql} from 'urql'

const SignInDocumnet = gql`
  mutation SignIn($input: SignInAppInput!) {
    signIn(input: $input) {
      accessToken
      expiredAt
    }
  }
`

const useKakaoSDKInit = ({
  appKey,
  isLazy = false,
}: {
  appKey: string
  isLazy: boolean
}) => {
  const [initResult, setInitResult] = useState({
    isLoaded: false,
    isError: false,
  })

  useEffect(() => {
    const kakaoSdkScript = document.getElementById('kakao-sdk')
    if (kakaoSdkScript) return

    const initKakaoScript = async () => {
      const scriptInitResult = new Promise<{
        isLoaded: boolean
        isError: boolean
      }>((resolve, reject) => {
        const script = document.createElement('script')
        script.id = 'kakao-sdk'
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'

        if (isLazy) {
          script.defer = true
        }

        document.head.appendChild(script)

        script.addEventListener('load', () => {
          resolve({isLoaded: true, isError: false})
        })

        script.addEventListener('error', () => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({isLoaded: false, isError: true})
        })
      })

      const result = await scriptInitResult
      setInitResult(result)

      Kakao.init(appKey)
    }

    initKakaoScript()
  }, [appKey, isLazy])

  return initResult
}

const Login = () => {
  const handleKaKaoLoginClick = () => {
    Kakao.Auth.login({
      success({access_token}) {
        ;(async () => {
          const result = await urqlClient
            .mutation(SignInDocumnet, {
              input: {
                code: access_token,
                type: 'KAKAO',
              },
            })
            .toPromise()

          localStorage.setItem('token', JSON.stringify(result.data.signIn))
        })()
      },
      fail(error) {
        console.error(error)
      },
    })
  }

  const {isLoaded} = useKakaoSDKInit({
    appKey: '1a01c6b9fba660692d7388f0f7c5baaf',
    isLazy: true,
  })

  if (!isLoaded) {
    console.log('loading')
  }

  return (
    <div>
      <button type="button" onClick={handleKaKaoLoginClick}>
        login
      </button>
    </div>
  )
}

export default Login
