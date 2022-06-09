export const sizeVariants = {
  xs: {
    height: '$6',
    paddingLeft: '$2',
    paddingRight: '$2',
    fontSize: '$1',
    borderRadius: '$1',
  },
  sm: {
    height: '$7',
    paddingLeft: '$3',
    paddingRight: '$3',
    fontSize: '$2',
    borderRadius: '$1',
  },
  md: {
    height: '$8',
    paddingLeft: '$4',
    paddingRight: '$4',
    fontSize: '$3',
    borderRadius: '$1',
  },
  lg: {
    height: '$9',
    paddingLeft: '$5',
    paddingRight: '$5',
    fontSize: '$4',
    borderRadius: '$1',
  },
  full: {
    width: '$full',
    height: '$full',
  },
}

export const colorVariants = {
  main: {
    backgroundColor: '$main',
  },
  sub: {
    backgroundColor: '$sub',
  },
  gray01: {
    backgroundColor: '$gray01',
  },
  gray02: {
    backgroundColor: '$gray02',
  },
  gray03: {
    backgroundColor: '$gray03',
  },
  gray04: {
    backgroundColor: '$gray04',
  },
  white: {
    backgroundColor: '$white',
  },
  kakao01: {
    backgroundColor: '$kakao01',
  },
  kakao02: {
    backgroundColor: '$white',
  },
  apple: {
    backgroundColor: '$apple',
  },
}

export const buttonVariants = {
  solid: {
    backgroundColor: '$main',
  },
  outline: {
    borderWidth: '1px',
    borderColor: 'black',
    borderStyle: 'solid',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
}

export const compoundVariants = [
  {
    variant: 'solid',
    color: 'main',
    css: {
      backgroundColor: '$main',
    },
  },
  {
    variant: 'solid',
    color: 'sub',
    css: {
      backgroundColor: '$sub',
    },
  },
  {
    variant: 'solid',
    color: 'gray01',
    css: {
      backgroundColor: '$gray01',
    },
  },
  {
    variant: 'solid',
    color: 'gray02',
    css: {
      backgroundColor: '$gray02',
    },
  },
  {
    variant: 'solid',
    color: 'gray03',
    css: {
      backgroundColor: '$gray03',
    },
  },
  {
    variant: 'solid',
    color: 'gray04',
    css: {
      backgroundColor: '$gray04',
    },
  },
  {
    variant: 'solid',
    color: 'white',
    css: {
      backgroundColor: '$white',
    },
  },
  {
    variant: 'solid',
    color: 'kakao01',
    css: {
      backgroundColor: '$kakao01',
    },
  },
  {
    variant: 'solid',
    color: 'kakao02',
    css: {
      backgroundColor: '$kakao02',
    },
  },
  {
    variant: 'solid',
    color: 'apple',
    css: {
      backgroundColor: '$apple',
    },
  },
  {
    variant: 'outline',
    color: 'main',
    css: {
      borderWidth: '1px',
      borderColor: '$main',
      borderStyle: 'solid',
      backgroundColor: '$white',
      color: '$main',
    },
  },
  {
    variant: 'outline',
    color: 'sub',
    css: {
      borderWidth: '1px',
      borderColor: '$sub',
      borderStyle: 'solid',
      backgroundColor: '$white',
      color: '$sub',
    },
  },
  {
    variant: 'outline',
    color: 'gray01',
    css: {
      borderWidth: '1px',
      borderColor: '$gray01',
      borderStyle: 'solid',
      backgroundColor: '$white',
      color: '$gray01',
    },
  },
  {
    color: 'gray02',
    variant: 'outline',
    css: {
      borderWidth: '1px',
      borderColor: '$gray02',
      borderStyle: 'solid',
      backgroundColor: '$white',
      color: '$gray02',
    },
  },
  {
    variant: 'outline',
    color: 'gray03',
    css: {
      borderWidth: '1px',
      borderColor: '$gray03',
      borderStyle: 'solid',
      backgroundColor: '$white',
      color: '$gray03',
    },
  },
  {
    variant: 'outline',
    color: 'gray04',
    css: {
      borderWidth: '1px',
      borderColor: '$gray04',
      borderStyle: 'solid',
      backgroundColor: '$white',
      color: '$gray04',
    },
  },
  {
    variant: 'outline',
    color: 'white',
    css: {
      borderWidth: '1px',
      borderColor: '$white',
      borderStyle: 'solid',
      backgroundColor: '$white',
      color: '$white',
    },
  },
]

export const defaultVariants = {
  size: 'md',
  variant: 'solid',
}
