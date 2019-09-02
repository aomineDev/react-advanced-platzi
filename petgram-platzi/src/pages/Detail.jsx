import React from 'react'

import { Logo } from '../components/Logo'
import { PhotoCardDetail } from '../layout/PhotoCardDetail'

export const Detail = ({ detailId }) => (
  <>
    <Logo />
    <PhotoCardDetail id={detailId} />
  </>
)
