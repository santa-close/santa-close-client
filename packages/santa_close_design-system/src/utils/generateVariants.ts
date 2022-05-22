import {CSSProperties} from '@stitches/react'
import {DefaultTheme, theme} from '../styles'

type CSSPropertyKeys = keyof CSSProperties

const createMultipleCSSProp = <V>(cssProp: CSSPropertyKeys[], value: V) =>
  Object.fromEntries(cssProp.map((prop) => [prop, value]))

export const generateVariants = <
  C extends CSSPropertyKeys,
  T extends keyof DefaultTheme,
>(
  cssProp: C | C[],
  target: T,
) => {
  return Object.fromEntries(
    Object.entries(theme[target]).map(
      ([key, value]: [
        keyof DefaultTheme[T] | string,
        DefaultTheme[T][keyof DefaultTheme[T]],
      ]) => {
        const returnValue = Array.isArray(cssProp)
          ? createMultipleCSSProp<typeof value>(cssProp, value)
          : {[cssProp]: value}

        return [key, returnValue]
      },
    ),
  )
}
