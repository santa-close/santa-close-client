import {CSS} from '@stitches/react'
import {AriaAttributes, AriaRole, ElementType} from 'react'

export interface DefaultComponentProps<T extends ElementType | '' = ''>
  extends AriaAttributes {
  as?: T extends '' ? ElementType : T
  role?: AriaRole
  tabIndex?: number
  css?: CSS
}
