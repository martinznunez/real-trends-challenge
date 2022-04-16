import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import ListItem from './index'

const onSubmit = jest.fn()

const onComplete = jest.fn()

describe('when rendering the component', () => {
  const FAKE_NOTE = {
    content: 'test nota',
    id: 2893,
    completed: false
  }

  beforeEach(() =>
    render(
      <ListItem note={FAKE_NOTE} onSubmit={onSubmit} onComplete={onComplete} />
    )
  )

  test('when rendering the component', () => {
    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).toBeInTheDocument()

    const note = screen.getByText('test nota')

    expect(note).toHaveStyle({ textDecoration: 'initial' })
  })

  test('when the checkbox event is checked', () => {
    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).toBeInTheDocument()

    const note = screen.getByText('test nota')

    fireEvent.click(checkbox)

    expect(onComplete).toHaveBeenCalledTimes(1)
    expect(note).toHaveStyle({ textDecoration: 'line-through' })
  })

  test('when the note event is checked', () => {
    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).toBeInTheDocument()

    const note = screen.getByText('test nota')

    fireEvent.click(note)

    const input = screen.getByPlaceholderText(/Nueva Tarea/i)

    expect(input).toBeInTheDocument()
  })
})
