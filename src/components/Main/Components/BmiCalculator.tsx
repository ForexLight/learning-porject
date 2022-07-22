import React, { useState } from 'react'
import styled from 'styled-components'

import { PhysiqueType } from '../Types'
import getBMI from '../../../helpers/getBmi'

const BmiCalculatorContainer = styled.section`
  flex: 1;
  margin: 5px;
  border-radius: 20px;
  background-color: #fffe8d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 30px 10px;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media (min-width: 542px) {
    height: 35%;
  }
  @media (min-width: 766px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
  }
`
const BmiStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: ${(props) => props.color};
  border-radius: 20px;
  span {
    font-size: 18px;
    font-weight: bold;
  }
  @media (min-width: 542px) {
    height: 75px;
  }
`
const BodyStatus = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
  width: 65%;
  span {
    margin: 5px 0;
  }
  @media (min-width: 542px) {
    height: 75px;
  }
`
const BmiCalculator: React.FC = () => {
  const [physique] = useState<PhysiqueType>({ height: 183, weight: 68 })

  const getBmi = () => {
    const bmi = getBMI(physique)
    if (bmi < 25) {
      return (
        <BmiStatus color='blue'>
          <span>underweight</span>
        </BmiStatus>
      )
    }
    if (bmi > 25 && bmi < 30) {
      return (
        <BmiStatus color='green'>
          <span>normal weight</span>
        </BmiStatus>
      )
    }
    return (
      <BmiStatus color='red'>
        <span>overweight</span>
      </BmiStatus>
    )
  }
  return (
    <BmiCalculatorContainer>
      <div>
        <h2>BMI TEST</h2>
      </div>
      <div className='container'>
        <BodyStatus>
          <span>
            Height: <b>{physique.height} cm</b>
          </span>
          <span>
            Weight: <b>{physique.weight} kg</b>
          </span>
        </BodyStatus>
        {getBmi()}
      </div>
    </BmiCalculatorContainer>
  )
}

export default BmiCalculator
