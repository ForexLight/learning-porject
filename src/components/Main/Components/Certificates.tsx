import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../../hooks'
import { RootState } from '../../../store/store'

const CertificatesContainer = styled.section`
  flex: 1;
  background-color: #00ffb3;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 20px;
  @media (min-width: 542px) {
    height: 65%;
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
  const certificates = useAppSelector((state: RootState) => state.certification)

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
