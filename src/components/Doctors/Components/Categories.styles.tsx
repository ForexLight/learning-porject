import styled from 'styled-components'
import { ItemProps } from '../Types'

export const CategoriesContainer = styled.div`
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

export const CategoriesItem = styled.button<ItemProps>`
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
