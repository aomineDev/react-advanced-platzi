import React from 'react'

import { Fav } from '../Fav'
import { Container } from '../Container'
import { Title } from '../Title'

import { List } from './styles'

export const LisOfFavsComponent = ({ favs }) => (
  <Container>
    <Title>Favorite Photos 🖤</Title>
    <List>
      {
        favs.map(fav => <Fav key={fav.id} {...fav} />)
      }
    </List>
  </Container>
)
