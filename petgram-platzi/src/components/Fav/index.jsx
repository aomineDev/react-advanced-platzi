import React from 'react'
import { Link } from '@reach/router'

import { Image, Photo } from './styles'

export const Fav = ({ src, id }) => (
  <Photo>
    <Link to={`/detail/${id}`}>
      <Image src={src} alt='image' />
    </Link>
  </Photo>
)
