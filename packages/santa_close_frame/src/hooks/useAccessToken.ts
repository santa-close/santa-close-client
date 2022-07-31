import {useLocalStorage} from './useLocalStorage'

export const useAccessToken = (key = 'accessToken') => {
  const [{accessToken, expiredAt}] = useLocalStorage(key, {
    accessToken: '',
    expiredAt: '',
  })

  if (!accessToken || !expiredAt) {
    return {isAvailable: false, accessToken: {accessToken, expiredAt}}
  }

  const now = new Date().getTime()
  const expiredAtTime = new Date(expiredAt).getTime()

  if (now > expiredAtTime) {
    return {isAvailable: false, accessToken: {accessToken, expiredAt}}
  }

  return {isAvailable: true, accessToken: {accessToken, expiredAt}}
}
