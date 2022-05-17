import {Suspense, lazy, useMemo, ComponentProps} from 'react'
import {Theme, styled, theme} from '../../styles/stitches.config'
import {SVG_ICON_MAP, SvgIconKey} from './iconMap'

const EmptyBox = styled('div', {
  display: 'inline-block',
  variants: {
    size: {
      16: {width: '16px', height: '16px'},
      20: {width: '20px', height: '20px'},
      24: {width: '24px', height: '24px'},
      30: {width: '30px', height: '30px'},
    },
  },
})

interface IconProps {
  name: SvgIconKey
  size?: ComponentProps<typeof EmptyBox>['size']
  color?: keyof Theme['colors']
}

export const Icon = ({name, size = '16', color = 'gray01'}: IconProps) => {
  const IconComponent = useMemo(() => lazy(SVG_ICON_MAP[name]), [name])
  return (
    <Suspense fallback={<EmptyBox size={size} />}>
      <IconComponent color={theme.colors[color]} width={size} height={size} />
    </Suspense>
  )
}
