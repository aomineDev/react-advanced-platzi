import styled, { keyframes } from 'styled-components'

const loadDots = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`

export const Loader = styled.div`
  color: #2196F3;
  font-size: 10px;
  margin: 0 auto 60px;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: ${loadDots} 1.8s infinite ease-in-out;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }
  &:before {
    left: -3.5em;
    animation-delay: -0.32s;
  }
  &:after {
    left: 3.5em;
  }
`
