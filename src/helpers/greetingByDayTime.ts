const greetingByDayTime = (date: Date): string => {
  const morningStart = 6
  const dayStart = 12
  const eveningStart = 18
  const nightStart = 24
  const hours = date.getHours()
  if (hours >= 0 && hours < morningStart) {
    return 'night'
  }
  if (hours >= morningStart && hours < dayStart) {
    return 'morning'
  }
  if (hours >= dayStart && hours < eveningStart) {
    return 'day'
  }
  if (hours >= eveningStart && hours <= nightStart) {
    return 'evening'
  }
  return 'error'
}

export default greetingByDayTime
