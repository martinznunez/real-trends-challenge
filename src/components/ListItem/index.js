import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Checkbox from '../Checkbox'
import NoteForm from '../NoteForm'

const ContainerNote = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: start;
`

const NoteContent = styled.p`
  width: 90%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 2rem;
  cursor: pointer;
  font-weight: 900;
  line-height: 3rem;
  margin-left: 10px;
  text-decoration: ${(p) => (p.markAsCompleted ? 'line-through' : 'initial')};
`

const ListItem = ({ note, onSubmit, onComplete }) => {
  const [showEdition, setShowEdition] = useState(false)
  const [markAsCompleted, setMarkAsCompleted] = useState(note.completed)

  const handleContentClick = () => {
    setShowEdition((prevState) => !prevState)
  }

  const handleClickCheckbox = () => {
    setMarkAsCompleted((prevState) => !prevState)
    const updatedNote = { ...note }
    updatedNote.completed = !markAsCompleted
    onComplete(updatedNote)
  }

  return (
    <>
      <ContainerNote>
        <Checkbox value={note.completed} onClick={handleClickCheckbox} />

        <NoteContent
          markAsCompleted={markAsCompleted}
          onClick={handleContentClick}
        >
          {note.content}
        </NoteContent>
      </ContainerNote>
      {showEdition && (
        <NoteForm
          buttonValue="Guardar"
          initialSate={note}
          onSubmit={onSubmit}
          afterSubmit={() => setShowEdition(false)}
        />
      )}
    </>
  )
}

ListItem.propTypes = {
  setUserNotes: PropTypes.func,
  note: PropTypes.object,
  onSubmit: PropTypes.func,
  onComplete: PropTypes.func
}

export default ListItem
