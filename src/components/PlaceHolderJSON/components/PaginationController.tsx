import React from 'react'
import styled from 'styled-components'

const PaginationContainer = styled.nav``
const PagesController = styled.ul`
  text-decoration: none;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PageIndicator = styled.li<PageIndicatorType>`
  display: flex;
  align-items: center;
  min-width: 30px;
  justify-content: center;
  background-color: ${(props) => (props.active ? 'red' : 'transparent')};
  color: black;
  border: 1px solid black;
  cursor: pointer;
`

type PageIndicatorType = {
  active: boolean
}

interface OwnProps {
  page: number
  totalPages: number
  nextPage: () => void
  prevPage: () => void
  setPage: (page: number) => void
}

type Props = OwnProps

const PaginationController: React.FC<Props> = ({
  page,
  prevPage,
  nextPage,
  setPage,
  totalPages,
}) => {
  const pages: number[] = []
  for (let i = totalPages; i !== 0; i -= 1) {
    pages.push(i)
  }
  return (
    <PaginationContainer>
      <PagesController>
        <PageIndicator active={false} onClick={() => prevPage()}>
          {'<'}
        </PageIndicator>
        {pages
          .map((i) => (
            <PageIndicator onClick={() => setPage(Number(i))} key={i} active={page === i}>
              {i}
            </PageIndicator>
          ))
          .reverse()}
        <PageIndicator active={false} onClick={() => nextPage()}>
          {'>'}
        </PageIndicator>
      </PagesController>
    </PaginationContainer>
  )
}

export default PaginationController
