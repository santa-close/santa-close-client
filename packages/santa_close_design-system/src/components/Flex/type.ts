import {ElementType, MouseEventHandler} from 'react'
import {CSS} from '@stitches/react'
import {Theme} from '../../styles/stitches.config'
import {
  directionVariants,
  alignVariants,
  justifyVariants,
  wrapVariants,
} from './variants'

export interface FlexProps {
  as: ElementType
  direction: keyof typeof directionVariants
  align: keyof typeof alignVariants
  justify: keyof typeof justifyVariants
  wrap: keyof typeof wrapVariants
  gap: keyof Theme['space']
  css: CSS
  onClick: MouseEventHandler
}
