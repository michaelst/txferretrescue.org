import React from 'react'
import { render } from '@testing-library/react'
import ContentBox from './'

test('renders ContentBox', () => {
  const { container } = render(<ContentBox />)
  expect(container.firstChild).toHaveClass('ContentBox')
})
