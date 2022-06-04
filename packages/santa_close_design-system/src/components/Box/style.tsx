import {styled} from '@stitches/react'
import {generateVariants} from '../../utils'

export const BoxComponent = styled('div', {
  variants: {
    bg: generateVariants('backgroundColor', 'colors'),

    p: generateVariants('padding', 'space'),
    px: generateVariants(['paddingLeft', 'paddingRight'], 'space'),
    py: generateVariants(['paddingTop', 'paddingBottom'], 'space'),

    m: generateVariants('margin', 'space'),
    mx: generateVariants(['marginLeft', 'marginRight'], 'space'),
    my: generateVariants(['marginTop', 'marginBottom'], 'space'),

    border: generateVariants('border', 'borderWidths'),
    br: generateVariants('borderRadius', 'radii'),
    bs: generateVariants('borderStyle', 'borderStyles'),
    bc: generateVariants('borderColor', 'colors'),

    w: generateVariants('width', 'sizes'),
    h: generateVariants('height', 'sizes'),
    size: generateVariants(['width', 'height'], 'sizes'),
  },
})
