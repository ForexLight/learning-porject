export type MedicalTestItem = {
  id: string
  link: string
  name: string
  date: Date
}
export type TestItemTypes = {
  data: MedicalTestItem
}

export const data = [
  {
    id: '1',
    link: 'somelink.com',
    name: 'blood test',
    date: new Date(),
  },
  {
    id: '2',
    link: 'somelink.com',
    name: 'covid test',
    date: new Date(),
  },
  {
    id: '3',
    link: 'somelink.com',
    name: 'complex test',
    date: new Date(),
  },
]
