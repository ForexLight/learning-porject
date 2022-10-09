import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    width: 100%;
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
  placeholder: string

  [x: string]: any
}

type Props = OwnProps

const Input: React.FC<Props> = ({ label, onChange, isError, placeholder, ...props }) => (
  <InputContainer isError={isError}>
    <label htmlFor={label}>{label}</label>
    <input
      id={label}
      type='text'
      required
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  </InputContainer>
)

export default Input
