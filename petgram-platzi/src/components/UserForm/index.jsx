import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'

import { Form, Input, Button, Title, GoSignIn, GoBack, ErrorMsg } from './styles'

export const UserForm = ({ disabled, error, onSubmit, isLogin, handleClick }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const title = isLogin ? 'LOG IN' : 'SIGN IN'
  const ButtonComponent = isLogin ? GoSignIn : GoBack
  const ButtonName = isLogin ? 'Sign In here' : 'Go Back'

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(email.value, password.value)
  }

  return (
    <Form disabled={disabled} onSubmit={handleSubmit}>
      <Title>{title}</Title>
      <Input
        type='text'
        placeholder='Email'
        {...email}
        disabled={disabled}
      />
      <Input
        type='password'
        placeholder='Password'
        {...password}
        disabled={disabled}
      />
      <Button disabled={disabled}>GO!</Button>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <ButtonComponent type='button' onClick={handleClick}>{ButtonName}!</ButtonComponent>
    </Form>
  )
}
