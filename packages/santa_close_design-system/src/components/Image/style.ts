import {styled} from '../../styles/stitches.config'

export const ImageContainer = styled('span', {
  variants: {
    fillContainer: {
      true: {
        position: 'absolute',
        inset: 0,
        '& > img': {
          inset: 0,
          position: 'absolute',
          minWidth: '100%',
          maxWidth: '100%',
          minHeight: '100%',
          maxHeight: '100%',
        },
      },
      false: {
        width: 'fit-content',
        height: 'fit-content',
      },
    },
    objectFit: {
      cover: {
        objectFit: 'cover',
      },
      contain: {
        objectFit: 'contain',
      },
      fill: {
        objectFit: 'fill',
      },
      inherit: {
        objectFit: 'inherit',
      },
      initial: {
        objectFit: 'initial',
      },
      none: {
        objectFit: 'none',
      },
      revert: {
        objectFit: 'revert',
      },
      'scale-down': {
        objectFit: 'scale-down',
      },
      unset: {
        objectFit: 'unset',
      },
    },
  },
})
