import React from 'react'

import { Button } from './styles'

export const SubmitButton = ({ action, children, disabled = false }) => <Button onClick={action} disabled={disabled}>{children}</Button>
