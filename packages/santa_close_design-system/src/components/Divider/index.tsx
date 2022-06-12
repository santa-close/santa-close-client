import {DividerComponent} from './style'
import {DividerProps} from './type'

export const Divider = ({
  direction = 'horizontal',
  size = 'full',
  w = '1',
  ...rest
}: Partial<DividerProps>) => (
  <DividerComponent
    data-direction={direction}
    data-size={size}
    data-width={w}
    {...rest}
  />
)
