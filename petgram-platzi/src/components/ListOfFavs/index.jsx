import React from 'react'
import PropTypes from 'prop-types'

import { Fav } from '../Fav'
import { Container } from '../Container'
import { Title } from '../Title'

import { List } from './styles'

export const ListOfFavsComponent = ({ favs }) => (
  <Container>
    <Title>Favorite Photos 🖤</Title>
    <List>
      {
        favs.map(fav => <Fav key={fav.id} {...fav} />)
      }
    </List>
  </Container>
)

ListOfFavsComponent.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  ).isRequired
}
