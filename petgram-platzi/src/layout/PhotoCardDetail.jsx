import React from 'react'

import { getSinglePhoto } from '../graphql/queries/getSinglePhoto'

import { LoadingDots } from '../components/shared/LoadingDots'
import { PhotoCard } from '../components/PhotoCard'
import { Container } from '../components/Container'

export const PhotoCardDetail = ({ id }) => {
  const { loading, error, data } = getSinglePhoto(id)
  const { photo = {} } = data

  if (loading) return <LoadingDots />

  if (error) return <p>Error! {error}</p>

  return (
    <Container>
      <PhotoCard {...photo} />
    </Container>
  )
}
