import {ForwardedRef, forwardRef, PropsWithChildren} from 'react'
import {FlexComponent} from './style'
import {FlexProps} from './type'

export const Flex = forwardRef(
  (
    {children, ...props}: PropsWithChildren<Partial<FlexProps>>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <FlexComponent ref={ref} {...props}>
      {children}
    </FlexComponent>
  ),
)
