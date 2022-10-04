import React from 'react'
import { useAppSelector } from '../../../hooks'
import SvgLoader from '../../../helpers/SvgLoader'
import { CategoriesContainer, CategoriesItem } from './Categories.styles'
import { CategoriesProps } from '../Types'

const Categories: React.FC<CategoriesProps> = ({ setActiveCategory, activeCategory }) => {
  const categories = useAppSelector((state) => state.doctorReducer.categories)
  const categoriesNodes = categories.map((item) => (
    <li>
      <CategoriesItem
        key={item}
        onClick={() => setActiveCategory(item)}
        active={item === activeCategory}
      >
        <SvgLoader id={item} />
        <span>{item}</span>
      </CategoriesItem>
    </li>
  ))
  return (
    <CategoriesContainer>
      <ul>{categoriesNodes}</ul>
    </CategoriesContainer>
  )
}

export default Categories
