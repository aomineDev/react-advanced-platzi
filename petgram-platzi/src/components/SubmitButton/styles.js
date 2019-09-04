import styled from 'styled-components'

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 32px;
  padding: 0;
  border-radius: 3px;
  background-color: #8d00ff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  transition: .3s;
  &:disabled {
    opacity: .2;
  }
`
