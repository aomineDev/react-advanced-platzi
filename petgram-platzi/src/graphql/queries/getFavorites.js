import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const getFavs = () => {
  const { loading, error, data } = useQuery(GET_FAVS, {
    fetchPolicy: 'network-only'
  })
  return { loading, error, data }
}
