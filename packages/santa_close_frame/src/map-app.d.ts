/// <reference types="react" />

declare module 'map-app/MapApp' {
  const MapApp: React.ComponentType

  export default MapApp
}

declare module 'map-app/atoms' {
  import {RecoilState} from 'recoil'

  export const sampleState: RecoilState<any>
}
