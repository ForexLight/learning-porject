import React from 'react'
import { PageIndicator, PagesController, PaginationContainer } from './PaginationController.styles'

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
