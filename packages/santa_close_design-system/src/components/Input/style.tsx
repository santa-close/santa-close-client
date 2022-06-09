import {styled} from '@stitches/react'
import {
  // buttonVariants,
  // colorVariants,
  // compoundVariants,
  // defaultVariants,
  sizeVariants,
} from './variants'

// const defaultStyle = {
//   display: 'inline-flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   userSelect: 'none',
//   whiteSpace: 'nowrap',
//   verticalAlign: 'middle',
// }

export const InputContainer = styled('div', {
  padding: '$4',

  variants: {
    size: sizeVariants,
  },
})

export const InputComponent = styled('input', {
  // ...defaultStyle,
  width: '$full',
  border: 'none',

  // variants: {
  //   size: sizeVariants,
  //   color: colorVariants,
  //   variant: buttonVariants,
  // },
  // compoundVariants,
  // defaultVariants,
})
