import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_CATEGORIES = gql`
  query getCategories {
  categories {
    id
    cover
    emoji
  }
}
`

export function getCategories () {
  const { loading, error, data } = useQuery(GET_CATEGORIES)

  return { loading, error, data }
}
