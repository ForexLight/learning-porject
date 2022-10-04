import styled from 'styled-components'

export const DoctorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    align-self: flex-start;
  }
`

export const DataContainer = styled.div`
  color: black;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 5px;
  font-size: 22px;

  img {
    border-radius: 20px;
    object-fit: cover;
    width: 25%;
    margin-right: 5%;
  }

  .title {
    svg {
      color: black;
    }

    .name {
      font-weight: bold;
      font-size: 24px;
    }

    .speciality {
      font-weight: 400;
      font-size: 16px;
      color: darkgray;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    justify-content: center;
    width: 70%;
  }

  p {
    padding: 10px;
    width: 100%;
  }
`
