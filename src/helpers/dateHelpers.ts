type Day = {
  id: string
  day: string
  date: string
}

export const getMonth = (i: Date): string => `${i.toLocaleString('en-US', { month: 'long' })}`
export const getDayFormatted = (i: Date) =>
  new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(i)
export const getDateFormatted = (i: Date): string => `${i.getDate()} ${getMonth(i)}`
export const dateHelpers = (time: Date) => {
  const days: Date[] = []
  for (let i = 0; i <= 9; i += 1) {
    const newTime = new Date(time)
    newTime.setDate(time.getDate() + i)
    days.push(newTime)
  }
  const daysString: Day[] = days.map((i) => ({
    id: `${i}`,
    day: getDayFormatted(i),
    date: getDateFormatted(i),
  }))
  daysString[0].day = 'Today'
  return daysString
}
