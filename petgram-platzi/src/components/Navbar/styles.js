import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

import { fadeIn } from '../../styles/animatios'

export const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  max-width: 500px;
  height: 50px;
  z-index: 1;
`
export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #888;
  text-decoration: none;
  &:active {
    background-color: #ccc;
  }
  &[aria-current] {
    color: #212121;
    &:after {
      content: '.';
      position: absolute;
      bottom: -1px;
      font-size: 34px;
      ${fadeIn({ time: '.5s' })};
    }
  }
`
