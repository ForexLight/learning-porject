export const getStringTime = (i: Date): string =>
  `${i.getHours()}:${String(i.getMinutes()).padStart(2, '0')}`

const getHours = (date: Date) => {
  const activeHours: Date[] = []
  const halfHour = 1800000
  const startHour = 18
  const timesFor = 11

  date.setHours(startHour, 0, 0, 0)
  for (let i = 0; i <= timesFor; i += 1) {
    const newDate = new Date(date)
    newDate.setTime(newDate.getTime() - halfHour * i)
    activeHours.push(newDate)
  }
  return activeHours.map((i) => getStringTime(i))
}

export default getHours
