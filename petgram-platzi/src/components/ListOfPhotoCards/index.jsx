import React from 'react'

import { PhotoCard } from '../PhotoCard'
import { LoadingDots } from '../shared/LoadingDots'

export const ListOfPhotoCardsComponents = ({ data }) => (
  <main>
    {data.loading
      ? (
        <LoadingDots />
      )
      : (
        data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      )}
  </main>
)
