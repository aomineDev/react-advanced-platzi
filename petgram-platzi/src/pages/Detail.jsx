import React from 'react'

import { Meta } from '../Meta'
import { Logo } from '../components/Logo'
import { PhotoCardDetail } from '../layout/PhotoCardDetail'

export const Detail = ({ detailId }) => {
  const meta = {
    title: 'Detalle de la foto',
    description: 'Aqui puedes encontrar el detalle de la foto'
  }

  return (
    <>
      <Meta {...meta} />
      <Logo />
      <PhotoCardDetail id={detailId} />
    </>
  )
}
