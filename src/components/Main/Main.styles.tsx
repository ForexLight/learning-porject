import styled from 'styled-components'

export const StyledMain = styled.div`
  padding: 0 5px;
  @media (min-width: 542px) {
    height: 100%;
    padding: 5px;
  }
`
export const AdditionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 542px) {
    height: 65%;
    flex-direction: row;
    .leftSide {
      width: 50%;
    }

    .rightSide {
      padding-left: 5px;
      height: 100%;
      width: 50%;
    }

    margin-top: 20px;
    padding: 20px;
  }
  @media (min-width: 766px) {
  }
  @media (min-width: 1200px) {
  }
`