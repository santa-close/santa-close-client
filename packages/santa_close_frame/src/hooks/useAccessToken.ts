import {useLocalStorage} from './useLocalStorage'

const validateExpiryDate = (expiredAt: string) => {
  const now = new Date().getTime()
  const expiredAtTime = new Date(expiredAt).getTime()

  return now < expiredAtTime
}

export const useAccessToken = (key = 'accessToken') => {
  const [{accessToken, expiredAt}] = useLocalStorage(key, {
    accessToken: '',
    expiredAt: '',
  })

  if (!accessToken || !expiredAt) {
    return {isAvailable: false, accessToken: {accessToken, expiredAt}}
  }

  const isAvailableToken = validateExpiryDate(expiredAt)
  if (isAvailableToken) {
    return {isAvailable: false, accessToken: {accessToken, expiredAt}}
  }

  return {isAvailable: true, accessToken: {accessToken, expiredAt}}
}
