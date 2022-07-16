import {ChangeEvent, useState} from 'react'
import {Icon, Input} from 'santa_close_design-system'

export const InputTest = () => {
  const [value, setValue] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  console.log('value??', value)

  return (
    <div>
      Input TEST
      <Input
        size="lg"
        value={value}
        onChange={handleInputChange}
        placeholder="placeholder test"
        leftSocket={<Icon name="bookmark" />}
      />
    </div>
  )
}
