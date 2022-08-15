import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../../hooks'
import SvgLoader from '../../../helpers/SvgLoader'

const CategoriesContainer = styled.div`
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  padding: 20px 0;

  ul {
    width: 200vw;
    display: flex;
    overflow: visible;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      padding: 0;
      margin: 0;
    }
  }
`

const CategoriesItem = styled.button<ItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 0 5px;
  height: 50px;

  svg {
    width: 36px;
    padding-right: 10px;
  }

  background-color: ${(props) => (props.active ? 'green' : 'white')};
`
type ItemProps = {
  active: boolean
}

interface OwnProps {
  setActiveCategory: Dispatch<SetStateAction<string>>
  activeCategory: string
}

type Props = OwnProps

const Categories: React.FC<Props> = ({ setActiveCategory, activeCategory }) => {
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
