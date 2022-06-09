import {ReactNode, ChangeEvent} from 'react'
import {CSS} from '@stitches/react'
import {InputComponent, InputContainer} from './style'
import {Flex} from '../Flex'

interface InputProps {
  css: CSS
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  children: ReactNode
  leftSocket: ReactNode
  rightSocket: ReactNode
}

export const Input = ({
  css,
  children,
  leftSocket,
  rightSocket,
  ...props
}: Partial<InputProps>) => (
  <InputContainer css={css}>
    <Flex justify="between" align="center" gap="2">
      {leftSocket}
      <InputComponent {...props} />
      {rightSocket}
    </Flex>
  </InputContainer>
)
