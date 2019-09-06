import React from 'react'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

import { useNearScreen } from '../../hooks/useNearScreen'

import { toggleLikeMutation } from '../../graphql/mutations/toggleLikeMutation'

import { FavButton } from '../FavButton'

import { Article, ImgWrapper, Img } from './styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, liked, likes = 0 }) => {
  const [show, element] = useNearScreen()
  const [toggleLike] = toggleLikeMutation()

  const handleFavClick = () => {
    toggleLike({ variables: { input: { id } } })
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='photo card' />
            </ImgWrapper>
          </Link>
          <FavButton
            liked={liked}
            likes={likes}
            onClick={handleFavClick}
          />
        </>
      )}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
