import {ReactNode} from 'react'
import {Theme} from '../../styles'
import {DefaultComponentProps} from '../../interface'

export interface TypoProps
  extends DefaultComponentProps<
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'label'
    | 'i'
    | 'u'
    | 'del'
    | 'em'
    | 'strong'
    | 'pre'
  > {
  children: ReactNode
  size: keyof Theme['fontSizes']
  weight: keyof Theme['fontWeights']
  color: keyof Theme['colors']
}
