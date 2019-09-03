import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`

export function toggleLikeMutation () {
  const [toggleMutation] = useMutation(LIKE_PHOTO)

  return [toggleMutation]
}
