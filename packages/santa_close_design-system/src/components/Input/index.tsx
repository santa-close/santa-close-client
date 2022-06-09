import {MouseEventHandler, ReactNode} from 'react'
import {CSS} from '@stitches/react'
import {InputComponent, InputContainer} from './style'
import {buttonVariants, colorVariants, sizeVariants} from './variants'
import {Flex} from '../Flex'

interface InputProps {
  css: CSS
  onClick: MouseEventHandler
  size: keyof typeof sizeVariants
  variant: keyof typeof buttonVariants
  color: keyof typeof colorVariants
  // type: HTMLInputTypeAttribute
  placeholder: string
  children: ReactNode
  leftIcon: ReactNode
  rightIcon: ReactNode
}

export const Input = ({
  placeholder,
  children,
  leftIcon,
  rightIcon,
  size,
  ...props
}: Partial<InputProps>) => (
  <InputContainer size={size}>
    <Flex justify="between" align="center" gap="2">
      {leftIcon}
      <InputComponent {...props} placeholder={placeholder} />
      {rightIcon}
    </Flex>
  </InputContainer>
)
