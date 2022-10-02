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
    <PaginationContainer data-testid='pagination-container'>
      <PagesController>
        <PageIndicator active={false} onClick={() => prevPage()} data-testid='prev-page-container'>
          {'<'}
        </PageIndicator>
        {pages
          .map((i) => (
            <PageIndicator
              onClick={() => setPage(Number(i))}
              key={i}
              active={page === i}
              data-testid='page-indicator'
            >
              {i}
            </PageIndicator>
          ))
          .reverse()}
        <PageIndicator active={false} onClick={() => nextPage()} data-testid='next-page-container'>
          {'>'}
        </PageIndicator>
      </PagesController>
    </PaginationContainer>
  )
}

export default PaginationController
