import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: flex-start;
  width: 800px;
  min-height: 400px;
  margin-top: 30px;
  background-color: #f1f1f1;
  opacity: 70%;
  padding: 10px;
  border-radius: 50px;
  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1);
  height: auto;
`

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>
}

Card.propTypes = {
  children: PropTypes.node
}

export default Card
