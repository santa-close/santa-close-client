import {MouseEventHandler} from 'react'
import {Theme} from '../../styles/stitches.config'
import {
  directionVariants,
  alignVariants,
  justifyVariants,
  wrapVariants,
} from './variants'
import {DefaultComponentProps} from '../../interface'

export interface FlexProps extends DefaultComponentProps {
  direction: keyof typeof directionVariants
  align: keyof typeof alignVariants
  justify: keyof typeof justifyVariants
  wrap: keyof typeof wrapVariants
  gap: keyof Theme['space']
  isGrow: boolean
  onClick: MouseEventHandler
}
