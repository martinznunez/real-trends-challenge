import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Btn = styled.button`
  min-width: 100px;
  background-color: #f1f1f1;
  text-align: center;
  font-size: 1.2rem;
  font-weight: Light;
  border: 3px solid rgba(0, 0, 0, 0.2);
  padding: 10px 10px 10px 10px;
  border-radius: 8px;
  letter-spacing: 0.7px;
  cursor: pointer;

`

const Button = ({ value, onClick }) => {
  return <Btn onClick={onClick} >{value}</Btn>
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func

}

export default Button
