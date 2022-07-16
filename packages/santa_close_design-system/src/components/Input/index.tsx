import {ReactNode, ChangeEvent} from 'react'
import {CSS} from '@stitches/react'
import {Flex} from '../Flex'
import {InputComponent, InputOuterComponent} from './style'
import {innerSizeVariants, outerSizeVariants} from './variants'

interface InputProps {
  css?: CSS
  size?: keyof typeof innerSizeVariants & keyof typeof outerSizeVariants
  isDisabled?: boolean
  placeholder?: string
  leftSocket?: ReactNode
  rightSocket?: ReactNode
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string | number
}

export const Input = ({
  css,
  leftSocket,
  rightSocket,
  size,
  isDisabled = false,
  onChange,
  value = '',
  placeholder = '',
}: InputProps) => (
  <InputOuterComponent css={css} size={size} isDisabled={isDisabled}>
    <Flex justify="between" align="center" gap="2">
      {leftSocket}
      <InputComponent
        size={size}
        isDisabled={isDisabled}
        onChange={isDisabled ? undefined : onChange}
        value={value}
        placeholder={placeholder}
      />
      {rightSocket}
    </Flex>
  </InputOuterComponent>
)
