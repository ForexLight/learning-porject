import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../../shared/Input/Input'
import Button from '../../shared/Button/Button'
import { scheduleState } from '../../../store/slices/scheduleSlice'

const PopupStyled = styled.div<PopupStyledProps>`
  display: ${(props) => (props.popupActive ? 'flex' : 'none')};
  color: white;
  position: absolute;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: calc(100% - 70px);
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.33);
`
const PopupContent = styled.div`
  background-color: #ff0000;
  width: 100%;
  height: 80%;
  border-radius: 40px 40px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
type PopupStyledProps = {
  popupActive: boolean
}
interface OwnProps {
  popupActive: boolean
  pushChanging: () => void
  popupActiveItem: scheduleState
  updateItem: (i: scheduleState) => void
  setPopupActive: (i: boolean) => void
}

type Props = OwnProps

const EditItemPopup: React.FC<Props> = ({
  popupActive,
  popupActiveItem,
  setPopupActive,
  updateItem,
  pushChanging,
}) => {
  const { id, info, date, place } = popupActiveItem

  console.log(popupActiveItem)

  const popupExit = (e: React.MouseEvent<HTMLDivElement>): void => {
    setPopupActive(false)
  }
  return (
    <PopupStyled
      popupActive={popupActive}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => popupExit(e)}
    >
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <form action=''>
          <h3>id : {id}</h3>
          <Input
            isError={false}
            label='date'
            onChange={(e) => updateItem({ ...popupActiveItem, date: e.target.value })}
            value={date}
          />
          <Input
            isError={false}
            label='info'
            onChange={(e) => updateItem({ ...popupActiveItem, info: e.target.value })}
            value={info}
          />
          <Input
            isError={false}
            label='place'
            onChange={(e) => updateItem({ ...popupActiveItem, place: e.target.value })}
            value={place}
          />
          <Button
            type='regular'
            onClick={(e) => {
              e.stopPropagation()
              console.log(e)
              pushChanging()
            }}
            size='30%'
            text='change'
          />
        </form>
      </PopupContent>
    </PopupStyled>
  )
}

export default EditItemPopup
