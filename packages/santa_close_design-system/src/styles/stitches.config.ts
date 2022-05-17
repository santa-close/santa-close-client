import {createStitches, PropertyValue, ScaleValue} from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      main: '#27B492',
      sub: '#318CB5',
      gray01: '#333333',
      gray02: '#828282',
      gray03: '#BDBDBD',
      gray04: '#E0E0E0',
      white: '#FFFFFF',
    },
    radii: {
      1: '8px',
      2: '16px',
      round: '50%',
    },
    fonts: {
      untitled:
        'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif',
    },
    fontSizes: {
      1: '13px',
      2: '14px',
      3: '16px',
      4: '20px',
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    space: {
      1: '4px',
      2: '8px',
    },
    sizes: {
      1: '20px',
      2: '24px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  utils: {
    // FIXME: 유틸 작동 안하는중 - 원인파악중
    // An abbreviated property for border-radius
    br: (value: ScaleValue<'borderRadius'>) => ({borderRadius: value}),
    // An abbreviated property for border-radius
    bgColor: (value: ScaleValue<'colors'>) => ({
      backgroundColor: value,
    }),
    // A property for applying width/height together
    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
  },
})

export type Theme = typeof theme
