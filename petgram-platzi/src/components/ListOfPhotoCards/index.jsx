import React from 'react'

import { PhotoCard } from '../PhotoCard'

import { photos } from '../../../../api/db.json'

export const ListOfPhotoCards = () => (
  <main>
    {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
  </main>
)
