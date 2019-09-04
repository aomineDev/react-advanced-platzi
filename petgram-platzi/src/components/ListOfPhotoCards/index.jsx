import React from 'react'

import { PhotoCard } from '../PhotoCard'

import { Container } from '../Container'

export const ListOfPhotoCardsComponent = ({ photos }) => (
  <Container>
    {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
  </Container>
)
