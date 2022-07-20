import React, { useState } from 'react'
import styled from 'styled-components'
import { CertificatesType } from '../Types'

const CertificatesContainer = styled.section`
  background-color: #00ffb3;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 20px;
  @media (min-width: 542px) {
    width: 50%;
  }
  @media (min-width: 766px) {
  }
  @media (min-width: 1200px) {
  }
`
const CertificatesItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 5px;
  border-radius: 20px;
  background-color: #fffe8d;

  div {
    font-size: 18px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      margin: 5px 0 0 0;
    }
  }
`

const Certificates: React.FC = () => {
  const [certificates] = useState<CertificatesType[]>([
    {
      name: 'Covid Certificate',
      result: 'positive',
      date: '20.07.2022',
    },
    {
      name: 'Blood test',
      result: 'OK',
      date: '20.07.2022',
    },
    {
      name: 'Urine test',
      result: 'OK',
      date: '20.07.2022',
    },
  ])

  const certificatesStatus = certificates.map((i) => (
    <CertificatesItem>
      <div>
        <span>{i.name}</span>
        <span>Date: {i.date}</span>
      </div>
      <div>
        <span>Result: {i.result}</span>
        <span>
          <b>Download</b>
        </span>
      </div>
    </CertificatesItem>
  ))
  return (
    <CertificatesContainer>
      <h3>Certificates</h3>
      <div>{certificatesStatus}</div>
    </CertificatesContainer>
  )
}

export default Certificates
