import React from 'react'
import styled from 'styled-components'

interface ComponentProps {
  text: string
  onClick: () => void
  type: string
  size: string

  [x: string]: any
}

interface StyledProps {
  onClick?: () => void
  size: string
}

type Props = ComponentProps

const StyledButton = styled.button<StyledProps>`
  border: none;
  border-radius: 20px;
  color: white;
  width: ${(props) => props.size};
  margin: 5px 0;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`
const RegularStyledButton = styled(StyledButton)`
  background-color: #4caf50;
`

const SecondaryStyledButton = styled(StyledButton)``

const InfoStyledButton = styled(StyledButton)``

const SuccessStyledButton = styled(StyledButton)``

const WarningStyledButton = styled(StyledButton)``

const Button: React.FC<Props> = ({ text, onClick, type, size, ...props }) => {
  switch (type) {
    case 'regular':
      return (
        <RegularStyledButton onClick={onClick} size={size} {...props}>
          {text}
        </RegularStyledButton>
      )
    case 'secondary':
      return (
        <SecondaryStyledButton onClick={onClick} size={size} {...props}>
          {text}
        </SecondaryStyledButton>
      )
    case 'info':
      return (
        <InfoStyledButton onClick={onClick} size={size} {...props}>
          {text}
        </InfoStyledButton>
      )
    case 'success':
      return (
        <SuccessStyledButton onClick={onClick} size={size} {...props}>
          {text}
        </SuccessStyledButton>
      )
    case 'Warning':
      return (
        <WarningStyledButton onClick={onClick} size={size} {...props}>
          {text}
        </WarningStyledButton>
      )
    default:
      return (
        <StyledButton onClick={onClick} size={size} {...props}>
          {text}
        </StyledButton>
      )
  }
}
export default Button
