import React from 'react'
import styled from 'styled-components'

const MessageStyle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 50px;
  border-radius: 20px;
  background-color: #5e5e5e;
  font-size: 14px;
  color: #fff;
  top: 20px;
  left: calc(50% - 70px);
`
const ErrorMessageStyle = styled(MessageStyle)`
  background-color: red;
`

const SuccessMessageStyle = styled(MessageStyle)`
  background-color: greenyellow;
`

interface OwnProps {
  text: string
  status: string
}

type Props = OwnProps

const Notifications: React.FC<Props> = ({ text, status }) => {
  switch (status) {
    case 'error':
      return <ErrorMessageStyle>{text}</ErrorMessageStyle>
    case 'success':
      return <SuccessMessageStyle>{text}</SuccessMessageStyle>
    default:
      return <MessageStyle>{text}</MessageStyle>
  }
}

export default Notifications
