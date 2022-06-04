import {
  ReactNode,
  MouseEventHandler,
  ElementType,
  AllHTMLAttributes,
} from 'react'
import {CSS} from '@stitches/react'
import {Theme} from '../../styles'

export interface BoxProps
  extends Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'size'> {
  children: ReactNode
  as: ElementType
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
  w: keyof Theme['sizes']
  h: keyof Theme['sizes']
  size: keyof Theme['sizes']
  css: CSS
  onClick: MouseEventHandler
}
