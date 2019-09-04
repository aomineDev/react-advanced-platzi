import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const getFavs = gql`
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
