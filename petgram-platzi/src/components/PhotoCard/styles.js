import styled from 'styled-components'
import { fadeIn } from '../../styles/animatios'

export const Article = styled.article`
  min-height: 200px;
`

export const ImgWrapper = styled.div`
  height: 0;
  padding-top: 56.5%;
  position: relative;
  margin-top: 20px;
  overflow: hidden;
`

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${fadeIn()}
`
