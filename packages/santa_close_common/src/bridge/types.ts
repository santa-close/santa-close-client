export interface CustomWindow extends Window {
  ReactNativeWebView?: {postMessage: (message: string) => void}
}

export type CallbackParams<T> = T & {
  bridgeId: string
}

export type Callback<T = unknown> = (
  params: CallbackParams<T>,
) => void | Promise<void>

export type NavigateParams = {
  to: string
}

export interface Bridge {
  (action: 'navigate', params: NavigateParams, callback?: Callback): void
  (
    action: 'login',
    params: null,
    callback?: Callback<{accessToken: string}>,
  ): void
}
