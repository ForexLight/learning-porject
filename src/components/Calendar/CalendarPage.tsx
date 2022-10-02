import React, { useState } from 'react'
import Calendar from './components/Calendar'
import InformationField from './components/InformationField'
import Button from '../shared/Button/Button'
import { getMonth } from '../../helpers/dateHelpers'
import EditItemPopup from './components/EditItemPopup'
import { scheduleState, updateScheduleItem } from '../../store/slices/scheduleSlice'
import { useAppDispatch } from '../../hooks'
import { CalendarContainer, CalendarTitleContainer } from './CalendarPage.style'

const CalendarPage: React.FC = () => {
  const dispatcher = useAppDispatch()
  const [time, setTime] = useState(new Date())
  const [chosenDay, setChosenDay] = useState(new Date())
  const [popupActive, setPopupActive] = useState(false)
  const [popupActiveItem, setPopupActiveItem] = useState({
    id: '',
    info: '',
    place: '',
    date: '',
  })

  const forwardMonth = (): void => {
    const funcTime = time
    funcTime.setDate(1)
    if (time.getMonth() <= 11) {
      funcTime.setMonth(funcTime.getMonth() + 1)
    } else {
      funcTime.setFullYear(funcTime.getFullYear() + 1)
      funcTime.setMonth(funcTime.setMonth(0))
    }
    setTime(new Date(funcTime))
  }
  const backwardMonth = (): void => {
    const funcTime = time
    funcTime.setDate(1)
    if (time.getMonth() === 12) {
      funcTime.setFullYear(funcTime.getFullYear() - 1)
      funcTime.setMonth(10)
    } else {
      funcTime.setMonth(funcTime.getMonth() - 1)
    }
    setTime(new Date(funcTime))
  }

  const editItem = (item: scheduleState): void => {
    setPopupActive(true)
    setPopupActiveItem({ ...popupActiveItem, ...item })
  }

  const updateItem = (item: scheduleState): void => {
    setPopupActiveItem({ ...popupActiveItem, ...item })
  }
  const pushChanging = (): void => {
    setPopupActive(false)
    dispatcher(updateScheduleItem(popupActiveItem))
  }
  return (
    <CalendarContainer>
      <CalendarTitleContainer>
        <Button type='secondary' onClick={() => backwardMonth()} text='prev' size='10' />
        <span>{`${getMonth(time)} ${time.getFullYear()}`}</span>
        <Button type='secondary' onClick={() => forwardMonth()} text='next' size='10' />
      </CalendarTitleContainer>
      <Calendar time={time} setActive={setChosenDay} active={chosenDay} />
      <InformationField date={chosenDay} editItem={editItem} />
      <EditItemPopup
        popupActive={popupActive}
        popupActiveItem={popupActiveItem}
        updateItem={updateItem}
        pushChanging={pushChanging}
        setPopupActive={setPopupActive}
      />
    </CalendarContainer>
  )
}

export default CalendarPage