import {styled} from '@stitches/react'
import {sizeVariants, defaultVariants, isDisabled} from './variants'

const defaultStyle = {
  outer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '$white',
    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;',
  },
  inner: {
    width: '$full',
    border: 'none',
    color: '$gray01',

    '&::placeholder': {
      color: '$gray04',
      verticalAlign: 'middle',
    },
  },
}

export const InputOuterComponent = styled('div', {
  ...defaultStyle.outer,

  variants: {
    size: sizeVariants.outer,
    isDisabled: isDisabled.outer,
  },

  defaultVariants,
})

export const InputComponent = styled('input', {
  ...defaultStyle.inner,

  variants: {
    size: sizeVariants.inner,
    isDisabled: isDisabled.inner,
  },

  defaultVariants,
})
