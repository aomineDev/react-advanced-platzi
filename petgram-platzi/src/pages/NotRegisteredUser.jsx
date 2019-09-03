import React, { useState } from 'react'

import Context from '../Context'
import { registerMutation } from '../graphql/mutations/RegisterMutation'
import { loginMutation } from '../graphql/mutations/LoginMutation'

import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [register, { loadingSignIn, errorSignIn }] = registerMutation()
  const [login, { loadingLogIn, errorLogIn }] = loginMutation()

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSignIn = (email, password) => {
            const input = { email, password }
            const variables = { input }
            register({ variables })
              .then(activateAuth)
          }

          const onLogIn = (email, password) => {
            const input = { email, password }
            const variables = { input }
            login({ variables })
              .then(activateAuth)
          }

          const errorMsgLogIn = errorLogIn && 'Email y/o contraseña incorrecta.'
          const errorMsgSignIn = errorSignIn && 'El email ya existe o hay algún problema.'

          return (
            <UserForm
              disabled={loadingSignIn || loadingLogIn}
              errorLogIn={errorMsgLogIn}
              errorSignIn={errorMsgSignIn}
              onLogIn={onLogIn}
              onSignIn={onSignIn}
              isLogin={isLogin}
              handleClick={() => { setIsLogin(!isLogin) }}
            />
          )
        }
      }
    </Context.Consumer>
  )
}
