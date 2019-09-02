import styled from 'styled-components'
import { fadeIn } from '../../styles/animatios'

export const Article = styled.article`
  min-height: 200px;
  padding-left: 15px;
  padding-right: 15px;
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  height: 0;
  overflow: hidden;
  padding-top: 56.5%;
  position: relative;
  margin-top: 20px;
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
