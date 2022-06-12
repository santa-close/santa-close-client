import {CSSProperties} from '@stitches/react'
import {AriaAttributes} from 'react'

export interface ImageProps extends AriaAttributes {
  src: string
  alt: string
  lazy?: boolean
  fillContainer?: boolean
  width?: number
  height?: number
  objectFit?: CSSProperties['objectFit']
}
