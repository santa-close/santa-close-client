import {ReactNode, MouseEventHandler} from 'react'
import {Theme} from '../../styles'
import {DefaultComponentProps} from '../../interface'

export interface BoxProps extends DefaultComponentProps {
  children: ReactNode
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
  onClick: MouseEventHandler
}
