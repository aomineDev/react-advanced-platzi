import React from 'react'

import { Meta } from '../Meta'
import { Favorites } from '../layout/Favorites'

export const Favs = () => {
  const meta = {
    title: 'Tus Favoritos',
    description: 'Aqui puedes encontrar tus fotos favoritas'
  }

  return (
    <>
      <Meta {...meta} />
      <Favorites />
    </>
  )
}
