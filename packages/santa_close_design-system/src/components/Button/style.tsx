import {styled} from '@stitches/react'
import {
  buttonVariants,
  colorVariants,
  compoundVariants,
  defaultVariants,
  sizeVariants,
} from './variants'

const defaultStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
}

export const ButtonComponent = styled('button', {
  ...defaultStyle,

  variants: {
    size: sizeVariants,
    color: colorVariants,
    variant: buttonVariants,
  },
  compoundVariants,
  defaultVariants,
})
