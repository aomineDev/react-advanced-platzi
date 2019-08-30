import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0)
    opacity: 1
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`

const fadeInTopKeyframes = keyframes`
  from {
    transform: scale(.8) translateY(-150%)
  }
  to {
    transform: scale(.8) translateY(0)
  }
`

export const fadeInTop = ({ time = '.5s', type = 'linear', fillMode = 'none' } = {}) => css`
  animation: ${time} ${fadeInTopKeyframes} ${type} ${fillMode};
`
const fadeOutTopKeyframes = keyframes`
  from {
    transform: scale(.8) translateY(0)
  }
  to {
    transform: scale(.8) translateY(-150%)
  }
`

export const fadeOutTop = ({ time = '.5s', type = 'linear', fillMode = 'none' } = {}) => css`
  animation: ${time} ${fadeOutTopKeyframes} ${type} ${fillMode};
`
