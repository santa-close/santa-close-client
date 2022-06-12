import {ImageContainer} from './style'
import {ImageProps} from './type'

export const Image = ({
  src,
  alt,
  lazy = true,
  fillContainer = false,
  objectFit,
  ...rest
}: ImageProps) => {
  return (
    <ImageContainer fillContainer={fillContainer} objectFit={objectFit}>
      <img src={src} alt={alt} loading={lazy ? 'lazy' : 'eager'} {...rest} />
    </ImageContainer>
  )
}
