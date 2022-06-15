import {CSS} from '@stitches/react'
import {Theme} from '../../styles/stitches.config'

export interface DividerProps {
  direction: 'horizontal' | 'vertical'
  color: keyof Theme['colors']
  bs: keyof Theme['borderStyles']
  size: keyof Theme['sizes']
  w: keyof Theme['borderWidths']
  css: CSS
}
