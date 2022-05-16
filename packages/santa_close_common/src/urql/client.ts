import {createClient} from 'urql'

export const urqlClient = createClient({
  url: 'http://localhost:4000/graphql',
  suspense: true,
  // TODO: login 작업시 필요한 옵션
  // fetchOptions: () => {
  //   const token = getToken()
  //   return {
  //     headers: {authorization: token ? `Bearer ${token}` : ''},
  //   }
  // },
})
