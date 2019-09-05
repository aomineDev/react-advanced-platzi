import React from 'react'

import { Meta } from '../Meta'
import { Error404 } from '../components/Error404'

export default () => {
  const meta = {
    title: 'No se encotro la página',
    description: 'No se pudo encontrar la página que buscas'
  }

  return (
    <>
      <Meta {...meta} />
      <Error404 />
    </>
  )
}
