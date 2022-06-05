import {MouseEventHandler, ReactNode} from 'react'
import {CSS, styled} from '@stitches/react'
import {ButtonComponent} from './style'
import {buttonVariants, colorVariants, sizeVariants} from './variants'
import {Box} from '../Box'

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

// TODO: Flex component 구현 후 교체
const Wrapper = styled(Box, {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
})

export const Button = ({
  children,
  leftIcon,
  rightIcon,
  ...props
}: Partial<ButtonProps>) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ButtonComponent {...props}>
    <Wrapper>
      {leftIcon}
      {children}
      {rightIcon}
    </Wrapper>
  </ButtonComponent>
)
