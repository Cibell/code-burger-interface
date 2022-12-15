
import React from 'react'

import PropTypes from 'prop-types'

import { ContainerButton } from './styles'

const Button = ({ children, ...res }) => {
  return <ContainerButton {...res}>{children}</ContainerButton>
}

export default Button

Button.propTypes = {
  children: PropTypes.string
}
