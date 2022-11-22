import React, { useState } from 'react'
import styled from 'styled-components'
import TestItem from './components/TestItem'
import { data, MedicalTestItem } from './Types'

const MedicalTestsWrapper = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    align-items: center;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`

const MedicalTests: React.FC = () => {
  const [items] = useState<MedicalTestItem[]>(data)
  return (
    <MedicalTestsWrapper>
      <h3>MedicalTests</h3>
      {items.map((i) => (
        <TestItem key={i.id} data={i} />
      ))}
    </MedicalTestsWrapper>
  )
}

export default MedicalTests
