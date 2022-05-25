import {styled} from '@stitches/react'

const defaultStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
}

export const sizeVariants = {
  xs: {
    height: '$6',
    paddingLeft: '$2',
    paddingRight: '$2',
    fontSize: '$1',
  },
  sm: {
    height: '$7',
    paddingLeft: '$3',
    paddingRight: '$3',
    fontSize: '$2',
  },
  md: {
    height: '$8',
    paddingLeft: '$4',
    paddingRight: '$4',
    fontSize: '$3',
  },
  lg: {
    height: '$9',
    paddingLeft: '$5',
    paddingRight: '$5',
    fontSize: '$4',
  },
}

export const colorVariants = {
  main: {},
  sub: {},
  gray01: {},
  gray02: {},
  gray03: {},
  gray04: {},
  white: {},
}

export const variants = {
  outline: {
    borderWidth: '1px',
    borderColor: '$main',
    borderStyle: 'solid',
  },
}

export const ButtonComponent = styled('button', {
  ...defaultStyle,

  variants: {
    size: sizeVariants,
    color: colorVariants,
    variant: variants,
  },

  compoundVariants: [
    {
      color: 'main',
      variant: 'outline',
      css: {
        borderWidth: '1px',
        borderColor: '$main',
        borderStyle: 'solid',
      },
    },
    {
      color: 'sub',
      variant: 'outline',
      css: {
        borderWidth: '1px',
        borderColor: '$sub',
        borderStyle: 'solid',
      },
    },
    {
      color: 'sub',
      variant: 'outline',
      css: {
        borderWidth: '1px',
        borderColor: '$sub',
        borderStyle: 'solid',
      },
    },
  ],
})

// const generateCompoundVariants = () => {}
