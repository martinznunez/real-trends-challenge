import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import Button from './index'

const handleClick = jest.fn()

const FAKE_VALUE = 'tets value'

describe('when rendering', () => {
  test('when rendering the component value and event checks', () => {
    render(
            <Button value={FAKE_VALUE}onClick={handleClick} />
    )

    const btn = screen.getByText(/tets value/i)

    expect(btn).toBeInTheDocument()

    fireEvent.click(btn)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
