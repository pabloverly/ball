import {Container} from './styles'

interface BallProps{
  backgroundColor: string;  
}
const Ball: React.FC<BallProps> = ({backgroundColor}) =>(
<Container backgroundColor={backgroundColor}></Container>
)

export default Ball