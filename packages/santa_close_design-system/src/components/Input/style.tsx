import {styled} from '@stitches/react'
import {
  outerSizeVariants,
  innerSizeVariants,
  defaultVariants,
  isDisabled,
} from './variants'

const defaultOuterStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$white',
  boxShadow:
    'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;',
}

const defaultInnerStyle = {
  width: '$full',
  border: 'none',
  color: '$gray01',

  '&::placeholder': {
    color: '$gray04',
    verticalAlign: 'middle',
  },
}

export const InputOuterComponent = styled('div', {
  ...defaultOuterStyle,

  variants: {
    size: outerSizeVariants,
    isDisabled: isDisabled.outer,
  },

  defaultVariants,
})

export const InputComponent = styled('input', {
  ...defaultInnerStyle,

  variants: {
    size: innerSizeVariants,
    isDisabled: isDisabled.inner,
  },

  defaultVariants,
})
