import React from 'react'
import {render} from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('renders App', () => {
    const {container} = render(<App />)

    expect(container).toHaveTextContent('This is Map App of santa-close-map')
  })
})
