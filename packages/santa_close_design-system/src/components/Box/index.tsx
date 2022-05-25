import {BoxComponent} from './style'
import {BoxProps} from './type'

export const Box = ({children, ...props}: Partial<BoxProps>) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <BoxComponent {...props}>{children}</BoxComponent>
)
