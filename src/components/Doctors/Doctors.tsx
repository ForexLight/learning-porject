import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Categories from './Components/Categories'
import { useAppSelector } from '../../hooks'
import { DoctorsContainer, DoctorsItem } from './Doctors.styles'

const Doctors: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('')
  const doctors = useAppSelector((state) => state.doctorReducer.doctors)
  const doctorFiltered = doctors
    .filter((i) => i.speciality === activeCategory)
    .map((i) => (
      <Link to={i.id}>
        <DoctorsItem key={i.id}>
          <img src={i.photo} alt='doctor face' />
          <div>
            <span>{i.name}</span> <span>{i.speciality}</span>
          </div>
        </DoctorsItem>
      </Link>
    ))

  return (
    <DoctorsContainer>
      <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <div>{activeCategory ? doctorFiltered : 'Choose category'}</div>
    </DoctorsContainer>
  )
}

export default Doctors
