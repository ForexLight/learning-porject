const getHours = (date: Date) => {
  const activeHours: Date[] = []
  date.setHours(18, 0, 0, 0)
  console.log(date)
  for (let i = 0; i <= 11; i += 1) {
    const newDate = new Date(date)
    newDate.setTime(newDate.getTime() - 1800000 * i)

    console.log(newDate)
    activeHours.push(newDate)
  }
  return activeHours.map((i) => `${i.getHours()}:${String(i.getMinutes()).padStart(2, '0')}`)
}

export default getHours
