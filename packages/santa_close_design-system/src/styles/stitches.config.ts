import {createStitches} from '@stitches/react'

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
      kakao01: '#FFDC00',
      kakao02: '#3C1E1E',
      apple: '#191919',
    },
    radii: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      half: '50%',
      full: '100%',
    },
    borderWidths: {
      1: '1px',
      2: '2px',
      3: '3px',
    },
    borderStyles: {
      solid: 'solid',
      dotted: 'dotted',
    },
    fonts: {
      pretendard:
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
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      full: '100%',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
      9: '80px',
      10: '96px',
      half: '50%',
      full: '100%',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
})

type DefaultThemeIndex =
  | 'colors'
  | 'radii'
  | 'borderWidths'
  | 'borderStyles'
  | 'fonts'
  | 'fontSizes'
  | 'fontWeights'
  | 'space'
  | 'sizes'
  | 'zIndices'
export type Theme = typeof theme
export type DefaultTheme = Pick<Theme, DefaultThemeIndex>
