import styled from 'styled-components'
import { PageIndicatorType } from '../Types'

export const PaginationContainer = styled.nav``
export const PagesController = styled.ul`
  text-decoration: none;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PageIndicator = styled.li<PageIndicatorType>`
  display: flex;
  align-items: center;
  min-width: 30px;
  justify-content: center;
  background-color: ${(props) => (props.active ? 'red' : 'transparent')};
  color: black;
  border: 1px solid black;
  cursor: pointer;
`
