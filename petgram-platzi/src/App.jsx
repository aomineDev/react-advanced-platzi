import React from 'react'

import { Logo } from './components/Logo'
import { Categories } from './layout/Categories'
import { PhotoCards } from './layout/PhotoCards'
import { PhotoCardDetail } from './layout/PhotoCardDetail'

import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyles />
      <Logo />
      {detailId
        ? <PhotoCardDetail id={detailId} />
        : (
          <>
            <Categories />
            <PhotoCards categoryId={1} />
          </>
        )}
    </>
  )
}
