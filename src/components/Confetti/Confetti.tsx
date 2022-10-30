import Confetti from 'react-confetti'
import useResize from '../../hooks/useResize';


export default () => {
  const { width, height } = useResize();
  
  return (
    <Confetti width={width} height={height} />
  )
}