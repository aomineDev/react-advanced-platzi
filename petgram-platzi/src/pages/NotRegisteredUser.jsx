import React, { useState } from 'react'

import Context from '../Context'
import { registerMutation } from '../graphql/mutations/RegisterMutation'

import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [register, { loading, error }] = registerMutation()

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSubmit = (email, password) => {
            const input = { email, password }
            const variables = { input }
            register({ variables })
              .then(activateAuth)
          }

          const errorMsg = error && 'El usuario ya existe o hay algún problema.'

          return (
            <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} isLogin={isLogin} handleClick={() => { setIsLogin(!isLogin) }} />
          )
        }
      }
    </Context.Consumer>
  )
}
