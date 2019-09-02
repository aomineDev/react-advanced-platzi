import React from 'react'

import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ id, cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor to={path}>
    <Image src={cover} alt='cover' />
    {emoji}
  </Anchor>
)
