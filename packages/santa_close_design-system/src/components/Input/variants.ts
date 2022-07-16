export const outerSizeVariants = {
  xs: {
    height: '$5',
    borderRadius: '$1',
    padding: '$1',
  },
  sm: {
    height: '$6',
    borderRadius: '$1',
    padding: '$2',
  },
  md: {
    height: '$7',
    borderRadius: '$2',
    padding: '$4',
  },
  lg: {
    height: '$8',
    borderRadius: '$2',
    padding: '$4',
  },
  full: {
    borderRadius: '$4',
    width: '$full',
    height: '$full',
  },
}

export const innerSizeVariants = {
  xs: {
    fontSize: '$1',
    '&::placeholder': {
      fontSize: '$1',
    },
  },
  sm: {
    fontSize: '$2',
    '&::placeholder': {
      fontSize: '$2',
    },
  },
  md: {
    fontSize: '$3',
    '&::placeholder': {
      fontSize: '$3',
    },
  },
  lg: {
    fontSize: '$4',
    '&::placeholder': {
      fontSize: '$4',
    },
  },
  full: {},
}

export const isDisabled = {
  outer: {
    true: {
      backgroundColor: '$gray06',
    },
  },
  inner: {
    true: {
      backgroundColor: '$gray06',
      '&::placeholder': {
        color: '$gray04',
      },
    },
  },
}

export const defaultVariants = {
  size: 'md',
}
