import React from 'react'

import { render, screen } from '@testing-library/react'

import Title from './index'

const FAKE_SIZE = '2rem'

const FAKE_VALUE = 'tets title'

describe('when rendering the component', () => {
  test('when rendering the component value and event checks', () => {
    render(
            <Title value={FAKE_VALUE} size={FAKE_SIZE} />
    )

    const title = screen.getByText(/tets title/i)

    expect(title).toBeInTheDocument()
  })
})
