import {CallbackParams, NavigateParams} from './types'

type ParsedData<A, P = never> = CallbackParams<{action: A; params: P}>

export const parseBridgeData = (data: string) => {
  const parsedData = JSON.parse(data)
  switch (parsedData.action) {
    case 'navigate':
      return parsedData as ParsedData<'navigate', NavigateParams>
    case 'login':
      return parsedData as ParsedData<'login'>
    default:
      throw new Error('Invalid action is provided.')
  }
}
