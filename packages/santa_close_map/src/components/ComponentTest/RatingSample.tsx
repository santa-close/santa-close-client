import {useState} from 'react'
import {StarRating} from 'santa_close_design-system'

export const RatingSample = () => {
  const [맛, set맛] = useState<number>(4)
  const [경치, set경치] = useState<number>(3)
  const [청결도, set청결도] = useState<number>(1)
  const [분위기, set분위기] = useState<number>(0)
  return (
    <>
      <StarRating name="맛" rate={맛} setRate={set맛} />
      <StarRating name="경치" rate={경치} setRate={set경치} />
      <StarRating name="매장 청결도" rate={청결도} setRate={set청결도} />
      <StarRating name="분위기" rate={분위기} setRate={set분위기} />
    </>
  )
}
