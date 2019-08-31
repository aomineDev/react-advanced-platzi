import React from 'react'

import { getPhotos } from '../graphql/queries/getPhotos'

import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
import { LoadingDots } from '../components/shared/LoadingDots'

export const PhotoCards = ({ categoryId }) => {
  const { loading, error, data } = getPhotos(categoryId)
  const { photos = {} } = data

  if (loading) return <LoadingDots />

  if (error) return <p>Error! {error}</p>

  return <ListOfPhotoCardsComponent photos={photos} />
}
