import React, { useState } from 'react'

import { PhysiqueType } from '../Types'
import getBMI from '../../../helpers/getBmi'
import { BmiCalculatorContainer, BmiStatus, BodyStatus } from './BmiCalculator.styles'

const BmiCalculator: React.FC = () => {
  const LOW_BMI_INDEX = 25
  const TOP_BMI_INDEX = 30

  const [physique] = useState<PhysiqueType>({ height: 183, weight: 68 })

  const getBmi = () => {
    const bmi = getBMI(physique)
    if (bmi < LOW_BMI_INDEX) {
      return (
        <BmiStatus color='blue'>
          <span>underweight</span>
        </BmiStatus>
      )
    }
    if (bmi > LOW_BMI_INDEX && bmi < TOP_BMI_INDEX) {
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
