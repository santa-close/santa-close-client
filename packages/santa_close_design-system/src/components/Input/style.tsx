import {styled} from '@stitches/react'

export const InputContainer = styled('div', {
  padding: '$4',
  backgroundColor: '$white',
  borderRadius: '$2',
  boxShadow:
    'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;',
})

export const InputComponent = styled('input', {
  width: '$full',
  border: 'none',
  color: '$gray01',
  fontSize: '$3',

  '&::placeholder': {
    color: '$gray04',
    fontSize: '$3',
    verticalAlign: 'middle',
  },
})
