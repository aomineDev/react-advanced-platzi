import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 60px);
`

export const Title = styled.h2`
  padding-bottom: 8px;
  color: #212121;
`

export const Input = styled.input`
  display: block;
  width: calc(100% - 8px);
  margin-bottom: 8px;
  padding: 8px 4px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  transition: .3s;
  &:disabled {
    opacity: .2;
  }
`

export const GoSignIn = styled.button`
  align-self: flex-end;
  margin-top: 8px;
  color: #2196F3;
  &:disabled {
    color: #ccc;
  }
`

export const GoBack = styled.button`
  align-self: flex-start;
  margin-top: 8px;
  color: #2196F3;
  &:disabled {
    color: #ccc;
  }
`

export const ErrorMsg = styled.span`
  display: inline-block;
  margin-top: 4px;
  align-self: flex-start;
  color: #f44336;
  font-size: 14px;
`
