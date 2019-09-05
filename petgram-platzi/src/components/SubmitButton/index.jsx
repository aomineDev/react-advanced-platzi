import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles'

export const SubmitButton = ({ action, children, disabled = false }) => <Button onClick={action} disabled={disabled}>{children}</Button>

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  action: PropTypes.func,
  chidlren: PropTypes.node
}
