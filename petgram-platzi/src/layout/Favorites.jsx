import React from 'react'

import { getFavs } from '../graphql/queries/getFavorites'

import { ListOfFavsComponent } from '../components/ListOfFavs'
import { LoadingDots } from '../components/shared/LoadingDots'

export const Favorites = () => {
  const { loading, error, data } = getFavs()
  const { favs } = data

  if (loading) return <LoadingDots />

  if (error) return <p>Error! {error}</p>

  return <ListOfFavsComponent favs={favs} />
}
