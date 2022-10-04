import React from 'react'
import Input from '../../shared/Input/Input'
import Button from '../../shared/Button/Button'
import { PopupContent, PopupStyled } from './EditItemPopup.styles'
import { EditItemPopupProps } from '../Types'

const EditItemPopup: React.FC<EditItemPopupProps> = ({
  popupActive,
  popupActiveItem,
  setPopupActive,
  updateItem,
  pushChanging,
}) => {
  const { id, info, date, place } = popupActiveItem

  const popupExit = (): void => {
    setPopupActive(false)
  }
  return (
    <PopupStyled popupActive={popupActive} onClick={() => popupExit()}>
      <PopupContent onClick={(e) => e.stopPropagation()}>
        <form action=''>
          <h3>id : {id}</h3>
          <Input
            isError={false}
            label='date'
            onChange={(e) =>
              updateItem({
                ...popupActiveItem,
                date: e.target.value,
              })
            }
            value={date}
          />
          <Input
            isError={false}
            label='info'
            onChange={(e) =>
              updateItem({
                ...popupActiveItem,
                info: e.target.value,
              })
            }
            value={info}
          />
          <Input
            isError={false}
            label='place'
            onChange={(e) =>
              updateItem({
                ...popupActiveItem,
                place: e.target.value,
              })
            }
            value={place}
          />
          <Button
            type='regular'
            onClick={(e) => {
              e.stopPropagation()
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
