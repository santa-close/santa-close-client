import {ReactNode, MouseEventHandler} from 'react'
import {CSS} from '@stitches/react'
import {Theme} from '../../styles'

export interface BoxProps {
  children: ReactNode
  as: 'div' | 'span'
  bg: keyof Theme['colors']
  p: keyof Theme['space']
  px: keyof Theme['space']
  py: keyof Theme['space']
  m: keyof Theme['space']
  mx: keyof Theme['space']
  my: keyof Theme['space']
  br: keyof Theme['radii']
  border: keyof Theme['borderWidths']
  bs: keyof Theme['borderStyles']
  bc: keyof Theme['colors']
  w: keyof Theme['space']
  h: keyof Theme['space']
  size: keyof Theme['space']
  css: {[K in keyof CSS]: CSS[K]}
  onClick: MouseEventHandler
}
