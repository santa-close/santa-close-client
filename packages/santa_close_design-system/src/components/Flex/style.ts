import {styled} from '@stitches/react'
import {generateVariants} from '../../utils'
import {
  directionVariants,
  alignVariants,
  justifyVariants,
  wrapVariants,
  isGrowVariants,
} from './variants'

export const FlexComponent = styled('div', {
  display: 'flex',

  variants: {
    direction: directionVariants,
    align: alignVariants,
    justify: justifyVariants,
    wrap: wrapVariants,
    isGrow: isGrowVariants,
    gap: generateVariants('gap', 'space'),
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    wrap: 'noWrap',
  },
})
