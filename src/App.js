import React, { useEffect, useState } from 'react'
import Title from './components/Title'
import styled from 'styled-components'
import NoteForm from './components/NoteForm'
import NoteFormWrapper from './components/NoteFormWrapper'
import Button from './components/Button'
import Card from './components/Card'

import ListItem from './components/ListItem'

const Container = styled.div`
  display: flex;
  margin: auto;
  width: 90%;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-weight: 300;
  min-height: 100vh;
`

const ContainerButton = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
`

const ContainerList = styled.div`
  margin: 10px 10px 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 10px 10px 10px;
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
`

function App () {
  const [userNotes, setUserNotes] = useState()

  const getLocalStorage = () => {
    const obtainedData = window.localStorage.getItem('data')

    if (obtainedData) {
      setUserNotes(JSON.parse(obtainedData))
    } else {
      setUserNotes([])
    }
  }

  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(() => {
    getLocalStorage()
  }, [])

  const saveNotes = (notes) => {
    window.localStorage.setItem('data', JSON.stringify(notes))
    setUserNotes(notes)
  }

  const handleEditNote = (updatedNote) => {
    const indexToUpdate = userNotes.findIndex(
      (note) => note.id === updatedNote.id
    )
    const notesCopy = [...userNotes]

    notesCopy[indexToUpdate] = updatedNote

    saveNotes(notesCopy)
  }

  const handleSubmitNewNote = (note) => {
    saveNotes([...userNotes, note])
  }

  const handleToggleCompleted = () =>
    setShowCompleted((prevState) => !prevState)
  const notesToShow = showCompleted
    ? userNotes
    : userNotes.filter((note) => !note.completed)

  return (
    <Container>
      <Title size="4rem" value="Lista de Tareas" />
      <ContainerButton>
        <Button
          value={showCompleted ? 'Ocultar completadas' : 'Mostrar Completadas'}
          onClick={handleToggleCompleted}
        />
      </ContainerButton>
          <NoteFormWrapper>
        <NoteForm onSubmit={handleSubmitNewNote} />
      </NoteFormWrapper>
      <Card>
        <ContainerList>
          {notesToShow?.map((note) => (
              <ListItem
                key={note.id}
                note={note}
                onSubmit={handleEditNote}
                onComplete={handleEditNote}
              />
          ))}
        </ContainerList>
      </Card>
    </Container>
  )
}

export default App
