import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import GetStars from '../../helpers/GetStars'
import Button from '../shared/Button/Button'
import BookVisit from './components/BookVisit'
import { DataContainer, DoctorContainer } from './DoctorsPage.styles'

const DoctorPage: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const doctor = useAppSelector(
    (state) => state.doctorReducer.doctors.filter((i) => i.id === id)[0],
  )
  return (
    <DoctorContainer>
      <Button
        onClick={() => navigate('../doctors')}
        size='100'
        type='Back'
        text='back to doctor list'
      />
      <DataContainer>
        <img src={doctor.photo} alt='doctor' />
        <div className='title'>
          <GetStars number={Number(doctor.rating)} />
          <span className='name'>{doctor.name}</span>
          <span className='speciality'>{doctor.speciality}</span>
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
