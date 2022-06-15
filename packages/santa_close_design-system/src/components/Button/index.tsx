import {ForwardedRef, forwardRef, MouseEventHandler, ReactNode} from 'react'
import {CSS} from '@stitches/react'
import {ButtonComponent} from './style'
import {buttonVariants, colorVariants, sizeVariants} from './variants'
import {Flex} from '../Flex'

interface ButtonProps {
  css: CSS
  onClick: MouseEventHandler
  size: keyof typeof sizeVariants
  variant: keyof typeof buttonVariants
  color: keyof typeof colorVariants
  children: ReactNode
  leftIcon: ReactNode
  rightIcon: ReactNode
}

export const Button = forwardRef(
  (
    {children, leftIcon, rightIcon, ...props}: Partial<ButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <ButtonComponent ref={ref} {...props}>
      <Flex align="center" gap="2">
        {leftIcon}
        {children}
        {rightIcon}
      </Flex>
    </ButtonComponent>
  ),
)
