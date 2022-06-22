import {memo} from 'react'
import {Flex} from '../Flex'
import {Icon} from '../Icon'
import {Typography} from '../Typography'
import {Spreader} from './style'
import {StarRatingProps} from './type'

export const StarRating = memo(({name, rate, setRate}: StarRatingProps) => {
  const renderStars = () => {
    const stars: JSX.Element[] = []
    for (let i = 0; i < 5; i += 1) {
      stars.push(
        <span onClick={() => setRate(i + 1)} role="button" tabIndex={-1}>
          <Icon name="star" size="24" color={i < rate ? 'sub' : 'gray06'} />
        </span>,
      )
    }
    return stars
  }

  return (
    <Flex align="center" justify="between">
      {name && (
        <>
          <Typography
            size="2"
            color="gray01"
            weight="medium"
            css={{whiteSpace: 'nowrap'}}
          >
            {name}
          </Typography>
          <Spreader />
        </>
      )}
      <Flex align="center" gap="1" css={{width: 'fit-content'}}>
        {renderStars()}
      </Flex>
    </Flex>
  )
})
