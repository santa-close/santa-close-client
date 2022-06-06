import {CSS} from '@stitches/react'
import {Theme} from '../../styles'

export interface TypoProps {
  children: string | number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label'
  size: keyof Theme['fontSizes']
  weight: keyof Theme['fontWeights']
  color: keyof Theme['colors']
  css?: CSS
}
