import React from 'react'

import { ImgWrapper, Img, Button } from './styles'

import { MdFavoriteBorder } from 'react-icons/md'

export const PhotoCard = ({ id, src, likes }) => (
  <article>
    <a href={`/detail/${id}`}>
      <ImgWrapper>
        <Img src={src} alt='photo card' />
      </ImgWrapper>
    </a>

    <Button>
      <MdFavoriteBorder size='24px' />{likes} likes!
    </Button>
  </article>
)
