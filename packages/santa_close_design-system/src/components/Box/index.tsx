import {ForwardedRef, forwardRef} from 'react'
import {BoxComponent} from './style'
import {BoxProps} from './type'

export const Box = forwardRef(
  (
    {children, ...props}: Partial<BoxProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <BoxComponent ref={ref} {...props}>
      {children}
    </BoxComponent>
  ),
)
