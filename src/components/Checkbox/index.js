import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Container = styled.div`
  .form-control {
    font-family: system-ui, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.1;
    input[type="checkbox"] {
      background-color: #fff;
      margin: 0;
      font: inherit;
      color: currentColor;
      width: 2rem;
      height: 2rem;
      border: 0.15em solid currentColor;
      border-radius: 0.15em;
    }
  }
`

const Checkbox = ({ onClick, value }) => {
  return (
    <Container>
      <label className="form-control">
        <input
          onClick={onClick}
          defaultChecked={value}
          type="checkbox"
          name="checkbox"
        />
      </label>
    </Container>
  )
}

Checkbox.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.bool
}

export default Checkbox
