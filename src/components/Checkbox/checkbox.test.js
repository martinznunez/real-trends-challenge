import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import Checkbox from './index'

const handleClick = jest.fn()

const FAKE_VALUE = false

describe('when rendering the component', () => {
  beforeEach(() =>
    render(
        <Checkbox value={FAKE_VALUE} onClick={handleClick} />
    )
  )
  test('when the rendering component that exists checkbox', () => {
    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).toBeInTheDocument()

    expect(checkbox.checked).toEqual(false)
  })

  test('when the component is rendered and the event is checked', () => {
    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).toBeInTheDocument()

    expect(checkbox.checked).toEqual(false)

    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
