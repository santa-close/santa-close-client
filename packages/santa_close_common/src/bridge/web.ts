import {useEffect} from 'react'
import {Bridge, Callback, CustomWindow} from './types'

declare const window: CustomWindow

const callbackMap = new Map<string, Callback<any>>()

export const bridge: Bridge = (
  action: string,
  params?: unknown,
  callback?: Callback<any>,
) => {
  const bridgeId = new Date().toString() + String(Math.random())

  if (callback) {
    callbackMap.set(bridgeId, callback)
  }

  if (!window.ReactNativeWebView)
    throw new Error('Bridge function can be called in webview environment.')

  window.ReactNativeWebView.postMessage(
    JSON.stringify({
      action,
      params,
      bridgeId,
    }),
  )
}

export const useInitBridge = () => {
  useEffect(() => {
    if (!window.ReactNativeWebView) return () => {}

    const handleMessage = (event: MessageEvent) => {
      const {
        data: {bridgeId, responseData},
      } = event
      const callback = callbackMap.get(bridgeId)

      if (callback) {
        if (responseData) {
          callback(responseData)
          return
        }

        callback()
      }

      callbackMap.delete(bridgeId)
    }

    window.addEventListener('message', handleMessage)
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])
}
