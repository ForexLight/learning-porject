import { Dispatch, SetStateAction } from 'react'
import { scheduleState } from '../../store/slices/scheduleSlice'

export type DayContainerProps = {
  isActive?: boolean
  isOtherMonth?: boolean
}
export type PopupStyledProps = {
  popupActive: boolean
}

export type InformationFiledProps = {
  date: Date
  editItem: (item: scheduleState) => void
}

export type EditItemPopupProps = {
  popupActive: boolean
  pushChanging: () => void
  popupActiveItem: scheduleState
  updateItem: (i: scheduleState) => void
  setPopupActive: (i: boolean) => void
}

export type CalendarProps = {
  time: Date
  setActive: Dispatch<SetStateAction<Date>>
  active: Date
}
