import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const REGISTER = gql`
  mutation signUp($input: UserCredentials!) {
    signup(input: $input)
  }
`
export function registerMutation () {
  const [register, { data, loading, error }] = useMutation(REGISTER)

  return [register, { data, loading, error }]
}
