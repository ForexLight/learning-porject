import React from 'react'
import styled from 'styled-components'
import SvgLoader from '../../../helpers/SvgLoader'

interface ComponentProps {
  text: string | JSX.Element
  onClick: (e?: any) => void
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

const BackStyledButton = styled(StyledButton)`
  border: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;

  svg {
    transform: rotate(90deg);
    width: 14px;
  }
`

const SecondaryStyledButton = styled(StyledButton)`
  background-color: #fff;
`

const GoogleStyledButton = styled(StyledButton)`
  background-color: #ff0000;
`

const FacebookStyledButton = styled(StyledButton)`
  background-color: #003cff;
`

const InfoStyledButton = styled(StyledButton)``

const SuccessStyledButton = styled(StyledButton)``

const WarningStyledButton = styled(StyledButton)``

const Button: React.FC<Props> = ({ text, onClick, type, size, ...props }) => {
  switch (type) {
    case 'regular':
      return (
        <RegularStyledButton type='button' onClick={onClick} size={size} {...props}>
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
    case 'google':
      return (
        <GoogleStyledButton onClick={onClick} size={size} {...props}>
          {text}
        </GoogleStyledButton>
      )
    case 'facebook':
      return (
        <FacebookStyledButton onClick={onClick} size={size} {...props}>
          {text}
        </FacebookStyledButton>
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
    case 'Back':
      return (
        <BackStyledButton onClick={onClick} size={size} {...props}>
          <SvgLoader id='arrow' />
          <span>{text}</span>
        </BackStyledButton>
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
