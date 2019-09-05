import React from 'react'

import { Meta } from '../Meta'
import { Logo } from '../components/Logo'
import { Categories } from '../layout/Categories'
import { PhotoCards } from '../layout/PhotoCards'

export const HomePage = ({ categoryId }) => {
  const meta = {
    title: 'by aomine',
    description: 'Con Petgram puedes econtrar todo ti tipo de animales domiesticos, So Cute :3'
  }

  return (
    <>
      <Meta {...meta} />
      <Logo />
      <Categories />
      <PhotoCards categoryId={categoryId} />
    </>
  )
}

export default React.memo(HomePage, (prevProps, props) => prevProps.categoryId === props.categoryId)
