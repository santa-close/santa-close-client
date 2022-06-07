import {styled} from '@stitches/react'
import {generateVariants} from '../../utils'
import {
  directionVariants,
  alignVariants,
  justifyVariants,
  wrapVariants,
} from './variants'

export const FlexComponent = styled('div', {
  display: 'flex',

  variants: {
    direction: directionVariants,
    align: alignVariants,
    justify: justifyVariants,
    wrap: wrapVariants,
    isGrow: {
      true: {
        '& > *': {
          flexGrow: 1,
        },
      },
    },
    gap: generateVariants('gap', 'space'),
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
  },
})
