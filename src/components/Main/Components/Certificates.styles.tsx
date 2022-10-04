import styled from 'styled-components'

export const CertificatesContainer = styled.section`
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
export const CertificatesItem = styled.div`
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
