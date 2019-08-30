import React, { useEffect, useRef, useState } from 'react'

import { Article, ImgWrapper, Img, Button } from './styles'

import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        console.log('si')
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='photo card' />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size='24px' />{likes} likes!
          </Button>
        </>
      )}

    </Article>
  )
}
