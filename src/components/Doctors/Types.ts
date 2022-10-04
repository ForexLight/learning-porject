import { Dispatch, SetStateAction } from 'react'

export type ItemProps = {
  active: boolean
}
export type CategoriesProps = {
  setActiveCategory: Dispatch<SetStateAction<string>>
  activeCategory: string
}
