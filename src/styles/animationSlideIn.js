
import { keyframes, css } from 'styled-components'


const slideInKeyframes = keyframes`
from{
  transform: translate3d(0, -100px, 0) scale(.5);
}
to{
  transform: translate3d(0, 0, 0) scale(.5);
}
`



export const slideIn = ({ time = '1s', type = 'ease' } = {}) => 
css`animation: ${time} ${slideInKeyframes} ${type} forwards;`
// export const slideIn = ({ time = '1s', type = 'ease' } = {}) =>
// css`animation: ${time} ${fadeInKeyframes} ${type};`