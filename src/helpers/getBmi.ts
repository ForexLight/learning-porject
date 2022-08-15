import { PhysiqueType } from '../components/Main/Main.type'

const getBMI = ({ weight, height }: PhysiqueType): number =>
  Math.trunc(weight / (height / 100) ** 2)

export default getBMI
