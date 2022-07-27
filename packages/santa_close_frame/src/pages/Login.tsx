import {urqlClient} from 'santa_close_common'
import {gql} from 'urql'
import {useKakaoInit} from '../hooks'

const SignInDocumnet = gql`
  mutation SignIn($input: SignInAppInput!) {
    signIn(input: $input) {
      accessToken
      expiredAt
    }
  }
`

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

        console.log('kakao login success')
      },
      fail(error) {
        console.error('kakao login failed', error)
      },
    })
  }

  const {isLoaded} = useKakaoInit({
    appKey: '1a01c6b9fba660692d7388f0f7c5baaf',
    loadType: 'defer',
  })

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
