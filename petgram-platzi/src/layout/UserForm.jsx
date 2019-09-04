import React, { useState, useContext } from 'react'

import { Context } from '../Context'
import { registerMutation } from '../graphql/mutations/RegisterMutation'
import { loginMutation } from '../graphql/mutations/LoginMutation'

import { UserFormComponent } from '../components/UserForm'
import { Container } from '../components/Container'

export const UserForm = () => {
  const { activateAuth } = useContext(Context)
  const [isLogin, setIsLogin] = useState(true)

  const [register, { loadingSignIn, errorSignIn }] = registerMutation()
  const [login, { loadingLogIn, errorLogIn }] = loginMutation()

  const onSignIn = (email, password) => {
    const input = { email, password }
    const variables = { input }
    register({ variables })
      .then(({ data }) => {
        const { signup } = data
        activateAuth(signup)
      })
  }

  const onLogIn = (email, password) => {
    const input = { email, password }
    const variables = { input }
    login({ variables })
      .then(({ data }) => {
        const { login } = data
        activateAuth(login)
      })
  }

  const errorMsgLogIn = errorLogIn && 'Email y/o contraseña incorrecta.'
  const errorMsgSignIn = errorSignIn && 'El email ya existe o hay algún problema.'

  return (
    <Container>
      <UserFormComponent
        disabled={loadingSignIn || loadingLogIn}
        errorLogIn={errorMsgLogIn}
        errorSignIn={errorMsgSignIn}
        onLogIn={onLogIn}
        onSignIn={onSignIn}
        isLogin={isLogin}
        handleClick={() => { setIsLogin(!isLogin) }}
      />
    </Container>
  )
}
