import {useState, useEffect} from 'react'

type ScriptLoadType = 'async' | 'defer'

const createKakaoScript = (loadType?: ScriptLoadType) => {
  const script = document.createElement('script')
  script.id = 'kakao-sdk'
  script.src = 'https://developers.kakao.com/sdk/js/kakao.js'

  if (loadType) {
    script[loadType] = true
  }

  return script
}

const appendScriptIntoHeaders = (script: HTMLScriptElement) => {
  document.head.appendChild(script)
}

export const useKakaoInit = ({
  appKey,
  loadType,
}: {
  appKey: string
  loadType?: ScriptLoadType
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
        const script = createKakaoScript(loadType)
        appendScriptIntoHeaders(script)

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
  }, [appKey, loadType])

  return initResult
}
