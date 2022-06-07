import {styled} from '@stitches/react'
import {generateVariants} from '../../utils'
import {
  directionVariants,
  alignVariants,
  justifyVariants,
  wrapVariants,
} from './variants'

export const FlexComponent = styled('div', {
  variants: {
    direction: directionVariants,
    align: alignVariants,
    justify: justifyVariants,
    wrap: wrapVariants,
    gap: generateVariants('gap', 'space'),
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
  },
})
