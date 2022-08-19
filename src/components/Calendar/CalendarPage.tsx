import React from 'react'
import FullCalendar from '@fullcalendar/react'

import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar: React.FC = () => (
  <FullCalendar plugins={[dayGridPlugin]} initialDate={new Date()} initialView='dayGridMonth' />
)

export default Calendar
