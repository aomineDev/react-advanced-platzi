import React, { useContext } from 'react'
import { Context } from '../Context'

import { Title } from '../components/Title'
import { Container } from '../components/Container'
import { SubmitButton } from '../components/SubmitButton'

export const UserUI = () => {
  const { removeAuth } = useContext(Context)
  return (
    <Container>
      <Title>User 👩‍🚀</Title>
      <SubmitButton action={removeAuth}>Cerrar Sesión</SubmitButton>
    </Container>
  )
}
