import React from 'react'
import { useAppSelector } from '../../../hooks'
import { RootState } from '../../../store/store'
import { certificationState } from '../../../store/slices/certificatSlice'
import { CertificatesContainer, CertificatesItem } from './Certificates.styles'

const Certificates: React.FC = () => {
  const certificates = useAppSelector((state: RootState) => state.certification)

  const certificatesStatus = certificates.map((i: certificationState) => (
    <CertificatesItem key={i.id}>
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
