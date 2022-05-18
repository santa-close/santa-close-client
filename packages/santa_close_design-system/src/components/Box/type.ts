import {ReactNode} from 'react'
import {CSS} from '@stitches/react'
import {Theme} from 'src/styles'

export interface DefaultPros {
  children: ReactNode
  as: never
  bg: keyof Theme['colors']
  p: keyof Theme['space']
  px: keyof Theme['space']
  py: keyof Theme['space']
  m: keyof Theme['space']
  mx: keyof Theme['space']
  my: keyof Theme['space']
  br: keyof Theme['space']
  border: keyof Theme['borderWidths']
  bs: keyof Theme['borderStyles']
  bc: keyof Theme['colors']
  w: keyof Theme['space']
  h: keyof Theme['space']
  size: keyof Theme['space']
}

export type BoxPros = Partial<DefaultPros> & CSS
