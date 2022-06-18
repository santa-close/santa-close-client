import {styled} from '../../styles/stitches.config'
import {generateVariants} from '../../utils'

export const TypoComponent = styled('span', {
  fontFamily: '$pretendard',
  variants: {
    size: generateVariants('fontSize', 'fontSizes'),
    weight: generateVariants('fontWeight', 'fontWeights'),
    color: generateVariants('color', 'colors'),
  },
  defaultVariants: {
    size: '3',
    weight: 'regular',
    color: 'gray01',
  },
})
