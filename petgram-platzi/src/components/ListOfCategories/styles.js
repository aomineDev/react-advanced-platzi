import styled, { css } from 'styled-components'
import { fadeInTop, fadeOutTop } from '../../styles/animatios'

export const List = styled.ul`
  display: flex;
  overflow-x: auto;
  ${props => props.fixed && css`
    position: fixed;
    top: -4px;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 400px;
    background-color: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    z-index: 1;

    ${props => props.fadeIn && css`
      ${fadeInTop({ fillMode: 'forwards' })}
    `}

    ${props => !props.fadeIn && css`
      ${fadeOutTop({ fillMode: 'forwards' })}
    `}

  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
