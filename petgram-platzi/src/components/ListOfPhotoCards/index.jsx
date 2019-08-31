import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

import { PhotoCard } from '../PhotoCard'
import { LoadingDots } from '../shared/LoadingDots'

import { LoadingWrapper } from './styles'

const withPhotos = graphql(gql`
  {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

const ListOfPhotoCardsComponents = ({ data }) => (
  <main>
    {data.loading
      ? (
        <LoadingWrapper>
          <LoadingDots />
        </LoadingWrapper>
      )
      : (
        data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      )}
  </main>
)

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponents)
