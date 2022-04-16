import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const H1 = styled.h1`
font-size: ${(p) => `${p.size}`}
`

const Title = ({ value, size }) => {
  return <H1 size={size}>{value}</H1>
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.string

}

export default Title
