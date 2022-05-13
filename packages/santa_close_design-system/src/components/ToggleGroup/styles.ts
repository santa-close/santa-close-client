import {Root, Item} from '@radix-ui/react-toggle-group'
import {styled} from '../../styles'

export const Group = styled(Root, {
  display: 'inline-flex',
  backgroundColor: 'white',
  borderRadius: 4,
  boxShadow: `0 2px 10px black`,
})

export const GroupItem = styled(Item, {
  all: 'unset',
  backgroundColor: '#fff',
  color: 123123,
  height: 35,
  width: 35,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 1,
  '&:first-child': {
    marginLeft: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  '&:last-child': {borderTopRightRadius: 4, borderBottomRightRadius: 4},
  '&:hover': {backgroundColor: '$sub'},
  '&[data-state=on]': {backgroundColor: '$main', color: '$gray01'},
  '&:focus': {position: 'relative', boxShadow: `0 0 0 2px black`},
})
