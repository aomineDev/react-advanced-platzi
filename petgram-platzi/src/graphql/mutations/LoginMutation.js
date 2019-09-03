import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const LOGIN = gql`
mutation logIn($input: UserCredentials!) {
  login (input: $input)
}
`

export function loginMutation () {
  const [login, { loading, error }] = useMutation(LOGIN)

  return [login, { loadingLogIn: loading, errorLogIn: error }]
}
