import {PropsWithChildren} from 'react'
import {FlexComponent} from './style'
import {FlexProps} from './type'

export const Flex = ({
  children,
  ...props
}: PropsWithChildren<Partial<FlexProps>>) => (
  <FlexComponent {...props}>{children}</FlexComponent>
)
