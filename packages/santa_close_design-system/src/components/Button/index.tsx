import {MouseEventHandler, ReactNode} from 'react'
import {CSS} from '@stitches/react'
import {sizeVariants, ButtonComponent, colorVariants, variants} from './style'

interface ButtonProps {
  children: ReactNode
  css: CSS
  onClick: MouseEventHandler
  size: keyof typeof sizeVariants
  variant: keyof typeof variants
  color: keyof typeof colorVariants
}

export const Button = ({children, ...props}: Partial<ButtonProps>) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ButtonComponent {...props}>{children}</ButtonComponent>
)
