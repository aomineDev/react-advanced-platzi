import React from 'react'

import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({ photos }) => (
  <main>
    {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
  </main>
)
