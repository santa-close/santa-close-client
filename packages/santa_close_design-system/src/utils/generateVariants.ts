import {CSSProperties} from '@stitches/react'
import {Theme, theme} from '../styles'

const createMultipleCSSProp = (cssProp: (keyof CSSProperties)[], value) =>
  Object.fromEntries(cssProp.map((prop) => [prop, value]))

export const generateVariants = <T extends keyof Theme>(
  cssProp: keyof CSSProperties | (keyof CSSProperties)[],
  target: T,
) => {
  const isMultiple = Array.isArray(cssProp) && cssProp.length > 1

  return Object.fromEntries(
    Object.entries(theme[target]).map(([key, value]) => {
      const returnValue = isMultiple
        ? createMultipleCSSProp(cssProp, value)
        : {[cssProp as string]: value}

      return [key, returnValue]
    }),
  )
}
