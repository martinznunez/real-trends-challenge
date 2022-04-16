import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const Container = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  flex-direction: row;

`
const NoteFormWrapper = ({ children }) => {
  return <Container>{children}</Container>
}

NoteFormWrapper.propTypes = {
  children: PropTypes.node
}

export default NoteFormWrapper
