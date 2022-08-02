import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks'
import GetStart from '../../helpers/GetStart'
import Button from '../shared/Button/Button'
import BookVisit from './components/BookVisit'

const DoctorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    align-self: flex-start;
  }
`

const DataContainer = styled.div`
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

const DoctorPage: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const doctor = useAppSelector((state) => state.doctorReducer.doctors.filter((i) => i.id === id))
  return (
    <DoctorContainer>
      <Button
        onClick={() => navigate('../doctors')}
        size='100'
        type='Back'
        text='back to doctor list'
      />
      <DataContainer>
        <img src={doctor[0].photo} alt='doctor' />
        <div className='title'>
          <GetStart number={Number(doctor[0].rating)} />
          <span className='name'>{doctor[0].name}</span>
          <span className='speciality'>{doctor[0].speciality}</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, reiciendis sunt.
          Accusamus asperiores aspernatur culpa natus porro quidem quo tempora. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Harum, nihil!
        </p>
      </DataContainer>
      <BookVisit />
    </DoctorContainer>
  )
}

export default DoctorPage
