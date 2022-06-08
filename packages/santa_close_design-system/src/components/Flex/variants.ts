export const directionVariants = {
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
}

export const alignVariants = {
  start: {
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
  },
  end: {
    alignItems: 'flex-end',
  },
  stretch: {
    alignItems: 'stretch',
  },
  baseline: {
    alignItems: 'baseline',
  },
}

export const justifyVariants = {
  start: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  end: {
    justifyContent: 'flex-end',
  },
  between: {
    justifyContent: 'space-between',
  },
}

export const wrapVariants = {
  noWrap: {
    flexWrap: 'nowrap',
  },
  wrap: {
    flexWrap: 'wrap',
  },
}

export const isGrowVariants = {
  true: {
    '& > *': {
      flexGrow: 1,
    },
  },
  false: {},
}
