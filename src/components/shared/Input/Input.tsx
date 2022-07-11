import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  padding: 5px;

  input {
    width: 100%;
    padding: 5px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid ${(props) => (props.isError ? '#f10000' : '#000000')};
    border-radius: 4px;
  }
`

interface StyledProps {
  isError: boolean
}

interface OwnProps {
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isError: boolean
}

type Props = OwnProps

const Input: React.FC<Props> = ({ label, onChange, isError }) => (
  <InputContainer isError={isError}>
    <label htmlFor='input'>{label}</label>
    <input id='input' type='text' required onChange={onChange} />
  </InputContainer>
)

export default Input
