import React from 'react'

import { Logo } from '../components/Logo'
import { Categories } from '../layout/Categories'
import { PhotoCards } from '../layout/PhotoCards'

export const Home = ({ categoryId }) => {
  return (
    <>
      <Logo />
      <Categories />
      <PhotoCards categoryId={categoryId} />
    </>
  )
}
