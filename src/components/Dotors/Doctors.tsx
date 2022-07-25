import React, { useState } from 'react'
import styled from 'styled-components'
import Categories from './Components/Categories'
import { useAppSelector } from '../../hooks'

const DoctorsContainer = styled.div`
  background-color: red;
  color: black;
  width: 100%;
`
const DoctorsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background-color: blue;
  margin: 5px;
  img {
    border-radius: 20px 0 0 20px;
    max-width: 130px;
  }
`

const Doctors: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('')
  const doctors = useAppSelector((state) => state.doctorReducer.doctors)
  const doctorFilter = () =>
    doctors
      .filter((i) => i.speciality === activeCategory)
      .map((i) => (
        <DoctorsItem key={i.id}>
          <img src={i.photo} alt='doctor face' />
          <div>
            <span>{i.name}</span> <span>{i.speciality}</span>
          </div>
        </DoctorsItem>
      ))

  return (
    <DoctorsContainer>
      <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <div>{activeCategory ? doctorFilter() : 'Choose category'}</div>
    </DoctorsContainer>
  )
}

export default Doctors
