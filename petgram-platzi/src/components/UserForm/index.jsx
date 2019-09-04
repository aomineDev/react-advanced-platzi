import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'

import { SubmitButton } from '../SubmitButton'

import { Form, Input, Title, GoSignIn, GoBack, ErrorMsg } from './styles'

export const UserFormComponent = ({ disabled, errorLogIn, errorSignIn, onLogIn, onSignIn, isLogin, handleClick }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const title = isLogin ? 'LOG IN' : 'SIGN IN'
  const ToggleMode = isLogin ? GoSignIn : GoBack
  const ButtonName = isLogin ? 'Sign In here' : 'Go Back'
  const SubmitButtonName = isLogin ? 'Log In' : 'Sign In'

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
      <SubmitButton disabled={disabled}>{SubmitButtonName}</SubmitButton>
      {isLogin && errorLogIn && <ErrorMsg>{errorLogIn}</ErrorMsg>}
      {!isLogin && errorSignIn && <ErrorMsg>{errorSignIn}</ErrorMsg>}
      <ToggleMode type='button' disabled={disabled} onClick={handleClick}>{ButtonName}!</ToggleMode>
    </Form>
  )
}
