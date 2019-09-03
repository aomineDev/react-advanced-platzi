import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'

import { Form, Input, Button, Title, GoSignIn, GoBack, ErrorMsg } from './styles'

export const UserForm = ({ disabled, errorLogIn, errorSignIn, onLogIn, onSignIn, isLogin, handleClick }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const title = isLogin ? 'LOG IN' : 'SIGN IN'
  const ButtonComponent = isLogin ? GoSignIn : GoBack
  const ButtonName = isLogin ? 'Sign In here' : 'Go Back'

  const handleSubmit = e => {
    e.preventDefault()
    if (isLogin) {
      onLogIn(email.value, password.value)
    } else {
      onSignIn(email.value, password.value)
    }
  }

  return (
    <Form disabled={disabled} onSubmit={handleSubmit}>
      <Title>{title}</Title>
      <Input
        type='email'
        placeholder='Email'
        required
        {...email}
        disabled={disabled}
      />
      <Input
        type='password'
        placeholder='Password'
        required
        {...password}
        disabled={disabled}
      />
      <Button disabled={disabled}>GO!</Button>
      {isLogin && errorLogIn && <ErrorMsg>{errorLogIn}</ErrorMsg>}
      {!isLogin && errorSignIn && <ErrorMsg>{errorSignIn}</ErrorMsg>}
      <ButtonComponent type='button' disabled={disabled} onClick={handleClick}>{ButtonName}!</ButtonComponent>
    </Form>
  )
}
