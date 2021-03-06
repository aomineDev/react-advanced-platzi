import React from 'react'

import { Meta } from '../Meta'
import { UserUI } from '../layout/UserUI'

export default () => {
  const meta = {
    title: 'User',
    description: 'La página donde podras ver tus datos como usuario'
  }

  return (
    <>
      <Meta {...meta} />
      <UserUI />
    </>
  )
}
