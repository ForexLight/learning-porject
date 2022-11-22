import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { TestItemTypes } from '../Types'
import SvgLoader from '../../../helpers/SvgLoader'

const TestItemWrapper = styled.div`
  width: 98%;
  height: 90px;
  border-radius: 20px;
  margin: 5px;
  padding: 10px;
  color: black;
  background-color: rgba(0, 28, 45, 0.5);

  svg {
    color: rgba(0, 0, 255, 0.35);
    width: 22px;
  }
`
const TestItemHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
const TestItemTitle = styled.h4`
  padding: 0;
  margin: 0;

  &:first-letter {
    text-transform: capitalize;
  }
`

const TestItemDate = styled.span`
  font-size: 16px;
`
const TestItemDownload = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;

  span {
    font-size: 18px;
    padding-right: 10px;
  }
`
const TestItem: FunctionComponent<TestItemTypes> = ({ data }) => (
  <TestItemWrapper data-testid='test-item-component'>
    <TestItemHeader>
      <TestItemTitle>{data.name}</TestItemTitle>
      <TestItemDate>{data.date.toDateString()}</TestItemDate>
    </TestItemHeader>
    <TestItemDownload>
      <span>Download test result</span>
      <SvgLoader id='download' />
    </TestItemDownload>
  </TestItemWrapper>
)

export default TestItem
