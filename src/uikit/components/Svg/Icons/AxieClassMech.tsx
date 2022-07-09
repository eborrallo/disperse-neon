import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 16 16" {...props}>
      <path d="M9.23004444,9.8361067 C9.52195556,9.87521781 9.84391111,9.86935115 10.1345778,9.83539559 C10.0403556,9.98632892 9.84337778,10.0949511 9.69511111,10.1827734 C9.31342222,10.4090845 8.85333333,10.4679289 8.41653333,10.4544178 C8.07502222,10.4437511 7.73671111,10.3552178 7.43111111,10.2032178 C7.12924444,10.0533511 6.8624,9.88588448 6.65102222,9.61815115 C6.64888889,9.61548448 6.64746667,9.61192892 6.64622222,9.60855115 C6.632,9.59504003 6.61688889,9.58312892 6.60284444,9.56926226 C5.79484444,8.76126226 5.79484444,7.45139559 6.60284444,6.64339559 C6.69173333,6.55468448 6.78737778,6.47735115 6.88675556,6.40819559 C6.59608889,6.36979559 6.27591111,6.37548448 5.98648889,6.40944003 C6.08071111,6.2585067 6.27768889,6.1497067 6.42595556,6.06206226 C6.80782222,5.83557337 7.26791111,5.7769067 7.70453333,5.79024003 C8.04604444,5.8009067 8.38435556,5.88961781 8.68995556,6.04144003 C8.92711111,6.1593067 9.14222222,6.28872892 9.32622222,6.4681067 C9.39626667,6.52197337 9.46435556,6.57939559 9.52871111,6.64339559 C10.3367111,7.45139559 10.3367111,8.76126226 9.52871111,9.56926226 C9.42791111,9.66988448 9.31964444,9.75806226 9.20533333,9.83344003 C9.21333333,9.83432892 9.22204444,9.83521781 9.23004444,9.8361067 M11.1130667,2.74437337 C10.5210667,2.39806226 5.6112,2.40944003 5.008,2.74437337 C4.4048,3.07948448 1.95555556,7.00215115 1.95555556,8.03166226 C1.95555556,9.06117337 4.41617778,12.8983289 5.008,13.3185956 C5.6,13.7388623 10.5098667,13.7280178 11.1130667,13.3185956 C11.7160889,12.9091734 14.1655111,8.86881781 14.1655111,8.03166226 C14.1655111,7.1945067 11.7050667,3.09104003 11.1130667,2.74437337" />{' '}
    </Svg>
  )
}

export default Icon
