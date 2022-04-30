import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 400px;
`

const NoteForm = ({ onSubmit, initialSate, buttonValue, afterSubmit }) => {
  const [formValue, setFormValue] = useState(initialSate.content)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formValue.trim() === '') {
      return
    }

    if (formValue && !initialSate.id) {
      const note = { ...initialSate }

      note.id = Date.now()
      note.content = formValue

      onSubmit(note)
      setFormValue('')

      return
    }

    const updatedNote = { ...initialSate }
    updatedNote.content = formValue
    onSubmit(updatedNote)
    afterSubmit?.()
  }

  const handleChange = ({ target }) => {
    const { value } = target

    setFormValue(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Input handleChange={handleChange} value={formValue} />
        <Button value={buttonValue} />
      </Container>
    </form>
  )
}

NoteForm.defaultProps = {
  initialSate: { id: null, content: '', completed: false },
  buttonValue: 'Agregar'
}

NoteForm.propTypes = {
  initialSate: PropTypes.object,
  onSubmit: PropTypes.func,
  afterSubmit: PropTypes.func,
  buttonValue: PropTypes.string
}

export default NoteForm
