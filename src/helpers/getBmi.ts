import { PhysiqueType } from '../components/Main/Types'

const oneHundred = 100

const getBMI = ({ weight, height }: PhysiqueType): number =>
  Math.trunc(weight / (height / oneHundred) ** 2)

export default getBMI
