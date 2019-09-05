import React from 'react'

import { Meta } from '../Meta'
import { UserForm } from '../layout/UserForm'

export default () => {
  const meta = {
    title: 'Login-Sigin',
    description: 'Se parte de petgram :D'
  }

  return (
    <>
      <Meta {...meta} />
      <UserForm />
    </>
  )
}
