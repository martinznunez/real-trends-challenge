import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import App from './App'

describe('first', () => {
  test('when rendering verify that there are elements', () => {
    render(
        <App />
    )

    const title = screen.getByText(/lista de tareas/i)

    expect(title).toBeInTheDocument()

    const button = screen.getByText(/ocultar completadas/i)

    expect(button).toBeInTheDocument()

    const input = screen.getByPlaceholderText(/nueva tarea/i)

    expect(input).toBeInTheDocument()
    const buttonAdd = screen.getByText(/agregar/i)

    expect(buttonAdd).toBeInTheDocument()
  })

  test('when creating and editing a note and checkbox verification', () => {
    render(<App />)

    const title = screen.getByText(/lista de tareas/i)

    expect(title).toBeInTheDocument()

    const hideCompletedButton = screen.getByText(/ocultar completadas/i)

    expect(hideCompletedButton).toBeInTheDocument()

    const input = screen.getByPlaceholderText(/nueva tarea/i)

    expect(input).toBeInTheDocument()
    const addButton = screen.getByText(/agregar/i)

    expect(addButton).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'note test' } })
    expect(input.value).toBe('note test')

    fireEvent.click(addButton)

    const note = screen.getByText(/note test/i)
    expect(note).toBeInTheDocument()
    expect(note).toHaveStyle({ textDecoration: 'initial' })

    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).toBeInTheDocument()

    expect(checkbox.checked).toEqual(false)

    fireEvent.click(checkbox)

    expect(checkbox.checked).toEqual(true)

    expect(note).toHaveStyle({ textDecoration: 'line-through' })

    fireEvent.click(note)

    const inputEdit = screen.getByDisplayValue('note test')

    expect(inputEdit).toBeInTheDocument()

    const editedValue = 'note test edited'
    fireEvent.change(inputEdit, { target: { value: editedValue } })

    expect(inputEdit.value).toBe(editedValue)

    const editButton = screen.getByRole('button', { name: /guardar/i })
    expect(editButton).toBeInTheDocument()

    fireEvent.submit(editButton)

    expect(note).toHaveTextContent(editedValue)

    fireEvent.click(hideCompletedButton)

    expect(screen.queryByText(editedValue)).not.toBeInTheDocument()

    const showButton = screen.getByText(/mostrar completadas/i)

    fireEvent.click(showButton)

    expect(screen.getByText(editedValue)).toBeInTheDocument()
  })
})
