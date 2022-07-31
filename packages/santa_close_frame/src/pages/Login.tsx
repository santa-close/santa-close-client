import {useNavigate} from 'react-router-dom'
import {urqlClient} from 'santa_close_common'
import {gql} from 'urql'
import {useKakaoInit, useLocalStorage} from '../hooks'

const SignInDocumnet = gql`
  mutation SignIn($input: SignInAppInput!) {
    signIn(input: $input) {
      accessToken
      expiredAt
    }
  }
`

const Login = () => {
  const navigate = useNavigate()
  const {isLoaded} = useKakaoInit({
    appKey: '1a01c6b9fba660692d7388f0f7c5baaf',
    loadType: 'defer',
  })

  // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
  const [_, setAccessToken] = useLocalStorage('accessToken', {
    accessToken: '',
    expiredAt: '',
  })

  const handleKaKaoLoginClick = () => {
    Kakao.Auth.login({
      success: ({access_token}) => {
        ;(async () => {
          const {
            data: {
              signIn: {accessToken, expiredAt},
            },
          } = await urqlClient
            .mutation(SignInDocumnet, {
              input: {
                code: access_token,
                type: 'KAKAO',
              },
            })
            .toPromise()

          const result = {accessToken, expiredAt}
          setAccessToken(result)
        })()

        navigate('/', {replace: true})
      },
      fail: (error) => {
        console.error('kakao login failed', error)
      },
    })
  }

  if (!isLoaded) return null

  return (
    <div>
      <button type="button" onClick={handleKaKaoLoginClick}>
        login
      </button>
    </div>
  )
}

export default Login
