import React from 'react'

import { getCategories } from '../graphql/queries/getCategories'

import { ListOfCategories } from '../components/ListOfCategories'
import { LoadingSpinner } from '../components/shared/LoadingSpinner'

export const Categories = () => {
  const { loading, error, data } = getCategories()
  const { categories = {} } = data

  if (loading) return <LoadingSpinner />

  if (error) return `Error! ${error}`

  return <ListOfCategories categories={categories} />
}
