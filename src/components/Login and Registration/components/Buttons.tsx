import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Button from '../../shared/Button/Button'
import SvgLoader from '../../../helpers/SvgLoader'

interface OwnProps {
  sendData: () => void
}

type Props = OwnProps

const Separator = styled.div`
  margin: 10px;
  position: relative;
  width: 90%;
  justify-content: center;
  align-items: center;
  display: flex;

  hr {
    width: 100%;
  }

  span {
    width: 100px;
    display: flex;
    justify-content: center;
    font-size: 16px;
    padding-bottom: 5px;
    background-color: rgb(255, 255, 255);
    position: absolute;
  }
`
const BtnData = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  svg {
    position: absolute;
    left: 0;
    width: 24px;
  }

  span {
    font-size: 18px;
  }
`

const BtnsContainer = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Buttons: FunctionComponent<Props> = ({ sendData }) => (
  <BtnsContainer>
    <Button onClick={sendData} size='90%' text='Log in' type='regular' data-testid='main-btn' />
    <Separator>
      <span>Or Login with</span>
      <hr />
    </Separator>
    <Button
      onClick={sendData}
      size='90%'
      text={
        <BtnData>
          <SvgLoader id='google' />
          <span>Login with google</span>
        </BtnData>
      }
      type='google'
    />
    <Button
      onClick={sendData}
      size='90%'
      text={
        <BtnData>
          <SvgLoader id='facebook' />
          <span>Login with facebook</span>
        </BtnData>
      }
      type='facebook'
    />
  </BtnsContainer>
)

export default Buttons
