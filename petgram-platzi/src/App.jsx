import React from 'react'

import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './layout/ListOfPhotoCards'
import { PhotoCardWithQuery } from './layout/PhotoCardWithQuery'

import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <>
      <GlobalStyles />
      <Logo />
      {detailId
        ? <PhotoCardWithQuery id={detailId} />
        : (
          <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
          </>
        )}
    </>
  )
}
