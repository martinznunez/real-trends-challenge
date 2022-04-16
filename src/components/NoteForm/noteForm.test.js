import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import NoteForm from './index'

const onSubmit = jest.fn()

describe('when rendering the component', () => {
  const FAKE_BUTTON_VALUE = 'test value'
  const afterSubmit = jest.fn()
  const FAKE_NOTE = {
    id: null, content: '', completed: false
  }
  beforeEach(() =>
    render(
        <NoteForm
        buttonValue={FAKE_BUTTON_VALUE}
        initialSate={FAKE_NOTE}
        onSubmit={onSubmit}
        afterSubmit={afterSubmit}
      />
    )
  )

  test('when rendering the component for a new task', () => {
    const btn = screen.getByRole('button', { name: FAKE_BUTTON_VALUE })
    expect(btn).toBeInTheDocument()
    const input = screen.getByPlaceholderText(/Nueva Tarea/i)

    expect(input).toBeInTheDocument()
    fireEvent.change(input, { target: { value: 'note test' } })
    expect(input.value).toBe('note test')

    fireEvent.submit(input)
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })
})

describe('when the component is rendered check for editing', () => {
  const FAKE_BUTTON_VALUE = 'test value'
  const afterSubmit = jest.fn()
  const FAKE_NOTE = { id: null, content: 'note', completed: false }
  beforeEach(() =>
    render(
          <NoteForm
          buttonValue={FAKE_BUTTON_VALUE}
          initialSate={FAKE_NOTE}
          onSubmit={onSubmit}
          afterSubmit={afterSubmit}
        />
    )
  )

  test('when the component is rendered for editing', () => {
    const input = screen.getByPlaceholderText(/Nueva Tarea/i)

    expect(input).toBeInTheDocument()

    expect(input.value).toBe('note')
    fireEvent.change(input, { target: { value: 'note test' } })
    expect(input.value).toBe('note test')

    const btn = screen.getByRole('button', { name: FAKE_BUTTON_VALUE })
    expect(btn).toBeInTheDocument()

    fireEvent.submit(input)

    expect(onSubmit).toHaveBeenCalledTimes(1)
  })
})
