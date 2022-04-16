import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import Input from './index'

const handleChange = jest.fn()

const FAKE_VALUE = 'tets value'

describe('when rendering the component', () => {
  test('when rendering the component value and event checks', () => {
    render(<Input value={FAKE_VALUE} handleChange={handleChange} />)

    const input = screen.getByPlaceholderText(/Nueva Tarea/i)

    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: '23' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
