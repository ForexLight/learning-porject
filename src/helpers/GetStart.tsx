import React from 'react'
import styled from 'styled-components'
import SvgLoader from './SvgLoader'

const StarsContainer = styled.div`
  svg {
    width: 18px;
  }
`
interface OwnProps {
  number: number
}

type Props = OwnProps

const GetStart: React.FC<Props> = ({ number }) => {
  let num = number
  const stars = []
  for (let i = 5; i > 0; i -= 1) {
    if (num >= 1) {
      stars.push(<SvgLoader id='star' key={i} />)
    } else if (num > 0 && num < 1) {
      stars.push(<SvgLoader id='halfStar' key={i} />)
    } else {
      stars.push(<SvgLoader id='emptyStar' key={i} />)
    }
    num -= 1
  }
  return <StarsContainer>{stars}</StarsContainer>
}

export default GetStart
