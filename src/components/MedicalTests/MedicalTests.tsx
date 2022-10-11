import React, { useState } from 'react'
import styled from 'styled-components'
import TestItem from './components/TestItem'
import { MedicalTestItem } from './Types'

const MedicalTestsWrapper = styled.div``

const MedicalTests: React.FC = () => {
  const [items, setItems] = useState<MedicalTestItem[]>([])
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
