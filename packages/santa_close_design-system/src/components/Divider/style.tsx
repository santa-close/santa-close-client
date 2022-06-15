import {styled} from '../../styles/stitches.config'
import {generateVariants} from '../../utils'

const makeVairants = (direction: 'horizontal' | 'vertical') => {
  const isHorizontal = direction === 'horizontal'
  const size = isHorizontal ? 'width' : 'height'
  const width = isHorizontal ? 'borderTopWidth' : 'borderRightWidth'

  return {
    '&[data-size=half]': {
      [size]: '$half',
    },
    '&[data-size=full]': {
      [size]: '$full',
    },
    '&[data-width="1"]': {
      [width]: '$1',
    },
    '&[data-width="2"]': {
      [width]: '$2',
    },
    '&[data-width="3"]': {
      [width]: '$3',
    },
  }
}

export const DividerComponent = styled('hr', {
  borderWidth: 0,
  margin: 'auto',
  width: 0,
  height: 0,
  variants: {
    color: generateVariants('borderColor', 'colors'),
    bs: generateVariants('borderStyle', 'borderStyles'),
  },
  '&[data-direction=vertical]': makeVairants('vertical'),
  '&[data-direction=horizontal]': makeVairants('horizontal'),
  defaultVariants: {
    color: 'gray06',
    bs: 'solid',
  },
})
