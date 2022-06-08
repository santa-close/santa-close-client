import {BoxComponent} from './style'
import {BoxProps} from './type'

export const Box = ({children, ...props}: Partial<BoxProps>) => (
  <BoxComponent {...props}>{children}</BoxComponent>
)
