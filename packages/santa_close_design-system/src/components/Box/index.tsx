import {FC} from 'react'
import {BoxComponent} from './style'
import {BoxPros} from './type'

export const Box: FC<BoxPros> = ({
  children,
  as,
  bg,
  p,
  px,
  py,
  m,
  mx,
  my,
  br,
  border,
  bs,
  bc,
  w,
  h,
  size,
  ...css
}) => (
  <BoxComponent
    as={as}
    bg={bg}
    p={p}
    px={px}
    py={py}
    m={m}
    mx={mx}
    my={my}
    br={br}
    border={border}
    bs={bs}
    bc={bc}
    w={w}
    h={h}
    size={size}
    css={css}
  >
    {children}
  </BoxComponent>
)
