import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const InputText = styled.input`
  width: 250px;
  padding: 10px 10px 10px 10px;
  text-align: start;
  font-size: 1.2rem;
  height: 20px;
  font-weight: 100;
  border: 3px solid rgba(0, 0, 0, 0.2);
  padding: 10px 10px 10px 10px;
  border-radius: 8px;
  letter-spacing: 0.7px;
`
const Input = ({ value, handleChange }) => {
  return (
    <div>
      <InputText
        onChange={handleChange}
        type="text"
        value={value}
        placeholder="Nueva Tarea"
      />
    </div>
  )
}
Input.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func
}
export default Input
